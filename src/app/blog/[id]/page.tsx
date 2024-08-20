import { ParsedUrlQuery } from "querystring";
import React from "react";

const BlogArticle = ({ params }: { params: ParsedUrlQuery }) => {
  return (
    <div>
      <h1>Blog Article {params.id}</h1>
    </div>
  );
};

export default BlogArticle;
