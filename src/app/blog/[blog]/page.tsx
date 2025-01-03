"use client";
import { blogs } from "@/app/data/data";
import Comment from "@/components/Comment";

export default function BlogPage({ params }: { params: { blog: string } }) {
  const { blog } = params; // Extract the dynamic route parameter

  // Find the blog post that matches the slug
  const blogPost = blogs.find((post) => post.slug === blog);

  if (!blogPost) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg">The blog you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">
          <div key={blogPost.slug}>
            <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
            <div>
              {blogPost.content.map((content, index) => {
                // Render content based on its type
                switch (content.type) {
                  case "heading":
                    return (
                      <h2 className="text-3xl font-bold mb-2" key={index}>
                        {content.value}
                      </h2>
                    );
                  case "publish":
                    return (
                      <p key={index} className="text-gray-600 mb-4">
                        <strong>Published on:</strong> {content.value}
                      </p>
                    );
                  case "image":
                    return (
                      <img
                        key={index}
                        src={content.value}
                        alt={blogPost.title}
                        className="w-full h-auto mb-8"
                      />
                    );
                  case "paragraph":
                    return <p key={index} className="mb-4">{content.value}</p>;
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
}
