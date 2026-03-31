// [NEXT] [LEARN]: data loading from client
// It is must to make with `use client` at the top not inside the component
"use client";
import Loader from "@/components/lib/Loader";
import { useQuery } from "@tanstack/react-query";

const ClientPostList = () => {
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

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Client Post List</h2>
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
