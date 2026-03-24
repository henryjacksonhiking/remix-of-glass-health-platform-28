import React from "react";

interface BlogContentProps {
  html: string;
}

/**
 * Reusable prose wrapper for blog post body content.
 * All typographic styles are applied via CSS in index.css under .blog-prose.
 */
const BlogContent: React.FC<BlogContentProps> = ({ html }) => {
  return (
    <div
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogContent;
