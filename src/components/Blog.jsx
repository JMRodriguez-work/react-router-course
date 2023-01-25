import React from "react";
import { BlogLink } from "./BlogLink";
import { blogData } from './blogdata.js';
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>

      <Outlet /> {/*Search more info*/}
      <ul>
        {blogData.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
};



export { Blog };
