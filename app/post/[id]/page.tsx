import Post from "@/app/components/Post";

export default function PostPage() {
  return (
    <div className="m-3 p-3 border border-solid border-yellow-400">
      <h1 className="text-3xl font-bold">Post</h1>
      <Post />
    </div>
  );
}
