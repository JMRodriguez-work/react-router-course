import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./blogdata";

const BlogPost = () => {

    const navigate = useNavigate()

    const { slug } = useParams();
    const blogpost = blogData.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate('/blog'); //-1 nos indica volver atrás, en caso de desactivarlo debemoms agregar { replace: true }
    };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
};


export { BlogPost };
