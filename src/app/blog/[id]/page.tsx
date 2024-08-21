import Header from "@/components/navbar/Header";
import { ParsedUrlQuery } from "querystring";
import React from "react";

const BlogArticle = ({ params }: { params: ParsedUrlQuery }) => {
  return (
    <div className="mt-40">
      <Header />
      <h1>Blog Article {params.id}</h1>
    </div>
  );
};

export default BlogArticle;
