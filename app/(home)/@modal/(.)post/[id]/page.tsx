import Post from "@/app/components/Post";

export default function PostModal() {
  return (
    <div className="m-3 p-3 border border-solid border-green-400">
      <h1 className="text-3xl font-bold mb-4">Post Using Intercepting Route</h1>
      <Post/>
    </div>
  );
}
