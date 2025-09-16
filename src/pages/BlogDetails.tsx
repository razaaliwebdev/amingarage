import { useParams, Link } from "react-router-dom";
import { blogs } from "../assets/blogs/blogs";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-lg mb-4">Blog post not found</p>
        <Link to="/blog" className="text-red-600 hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  // Clean content by removing any duplicate h1 and featured image
  const cleanContent = blog.content
    .replace(/<h1[^>]*>.*<\/h1>/i, "")
    .replace(
      /<img[^>]*class=["'](.*?featured-image|main-image|post-thumbnail|wp-post-image)(.*?)["'][^>]*>/i,
      ""
    );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

        {/* Meta Info */}
        <div className="flex justify-center gap-4 text-gray-600 mb-12">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none mx-auto mb-12"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block text-red-600 hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
