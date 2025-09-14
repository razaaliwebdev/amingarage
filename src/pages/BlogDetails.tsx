import { useParams, Link } from "react-router-dom";
import { blogs } from "../assets/blogs/blogs";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="p-6">
        <p>Blog not found.</p>
        <Link to="/blog" className="text-red-600 underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const related = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4">
      {/* Header Info */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>By {blog.author}</span>
          <span>• {blog.date}</span>
          <span>• {blog.readTime}</span>
        </div>
      </div>

      {/* Main Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-md mb-10"
      />

      {/* Blog Content */}
      <div
        className="prose prose-lg max-w-none space-y-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <Link to="/blog" className="text-red-600 underline block mt-10">
        ← Back to Blogs
      </Link>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/blog/${r.id}`}
                className="block bg-white rounded-lg shadow hover:shadow-md overflow-hidden"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-2">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
