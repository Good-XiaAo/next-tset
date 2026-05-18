"use client";
import { useParams } from "next/navigation";
import React, { memo } from "react";
const BlogPost: React.FC = async () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>BlogPost</h1>
      <p> 动态路由：{params.slug}</p>
    </>
  );
};
export default memo(BlogPost);
