import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../assets/blogs/blogs"; // Import your actual blogs data

const Blog: React.FC = () => {
  const categories = ["All", "Maintenance", "Safety", "Technology", "Comfort"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const navigate = useNavigate();

  const filteredblogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Automotive Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
            Find out the tips of the trade, the practical side of maintenance,
            and the newest industry news, all of which our knowledgeable
            technicians will share with you to keep you informed and your car
            running at its best.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 text-[#C0C0C0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-red-600 text-[#C0C0C0]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-10 flex-wrap">
            {/* {filteredblogs.map((blog: any) => (
              <article
                onClick={() => navigate("/blog/" + blog.id)}
                key={blog.id}
                className="bg-gradient-to-br from-red-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold  transition-colors duration-200">
                    {blog.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{blog.author}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-red-600 hover:text-red-800 font-semibold flex items-center transition-colors duration-200 relative group"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </Link>
                  </div>
                </div>
              </article>
            ))} */}
            {filteredblogs.map((blog: any) => (
              <article
                onClick={() => navigate("/blog/" + blog.id)}
                key={blog.id}
                className="flex flex-col md:flex-row bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative md:w-1/3 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 md:h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 space-y-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                      <span>{blog.readTime}</span>
                    </div>

                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-red-600 hover:text-red-800 font-semibold flex items-center transition-colors duration-200 relative group"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-red-600 text-[#C0C0C0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-red-100">
            Subscribe to our newsletter and get the most current automotive
            tips, professional maintenance advice and special offers sent
            directly to your mailbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-white text-red-500 hover:bg-red-200 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
