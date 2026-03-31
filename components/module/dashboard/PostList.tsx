interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {}

/* [NEXT] [LEARN]: data loading from server */
const PostList = async ({}: PostListProps) => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = (await res.json()).slice(0, 10);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} className="pl-4">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
