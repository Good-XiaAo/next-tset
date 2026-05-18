import Link from "next/link";
import React, { memo } from "react";
const Blog: React.FC = () => {
  return (
    <>
      <h1>Blog</h1>
      <p>
        <Link href="/blog/post-1">post-1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">post-2</Link>
      </p>
    </>
  );
};
export default memo(Blog);
