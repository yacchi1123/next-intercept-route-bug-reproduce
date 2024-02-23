import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3 p-3 border border-solid border-red-400">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Link className="text-blue-500" href="/post/1">
        Link to Post
      </Link>
    </div>
  );
}
