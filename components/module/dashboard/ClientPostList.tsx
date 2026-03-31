// [NEXT] [LEARN]: data loading from client
// It is must to make with `use client` at the top not inside the component
"use client";
import Button from "@/components/lib/Button";
import Loader from "@/components/lib/Loader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ClientPostList = () => {
  const queryClient = useQueryClient();
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return (await res.json()).slice(0, 10);
      }),
  });

  // [NEXT] [LEARN]: query mutation with invalidation
  const mutation = useMutation({
    mutationFn: async (title: string) => {
      await fetch("https://jsonplaceholder.typicode.com/api/fake", {
        method: "POST",
        body: JSON.stringify({ title }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleCreatePost = async (formData: FormData) => {
    const title = formData.get("title");
    if (!title) return;
    mutation.mutate(title as string);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Client Post List</h2>
      <form action={handleCreatePost}>
        <input type="text" placeholder="Title" name="title" />
        <Button type="submit">Add Post</Button>
      </form>

      <ul>
        {posts?.map((post: any) => (
          <li key={post.id} className="pl-4">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPostList;
