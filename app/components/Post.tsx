"use client";
import { postData } from "@/app/action";

const Post: React.FC = () => {
  return (
    <form action={postData}>
      <button className="text-blue-500" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Post;
