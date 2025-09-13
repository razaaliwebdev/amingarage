import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: "auto-ac-service-001",
      title: "Auto Car Air Conditioning Service: Beat the Heat with Amin Garage.",
      excerpt:
        "Nothing is more critical than an effective car air conditioning system when the scorching summer heat hits Pakistan.",
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Maintenance",
      readTime: "5 min read",
    },
    {
      id: "car-ac-repair-matters-002",
      title: "Why Car AC Repair Matters",
      excerpt:
        "The AC of your car is not only a comfort, but a direct influence on the safety, health and performance.",
      image:
        "https://images.unsplash.com/photo-1681249537147-802e67912982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNpZ25zJTIwWW91ciUyMEJyYWtlcyUyME5lZWQlMjBJbW1lZGlhdGUlMjBBdHRlbnRpb258ZW58MHx8MHx8fDA%3D",
      date: "March 10, 2024",
      author: "Maria Garcia",
      category: "Safety",
      readTime: "4 min read",
    },
    {
      id: "full-vehicle-maintenance-003",
      title: "Full Vehicle Maintenance.",
      excerpt:
        "When it comes to Amin Garage, we do not stop at AC service. We have got it all as a complete service car workshop.",
      image:
        "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      author: "David Wilson",
      category: "Maintenance",
      readTime: "6 min read",
    },
    {
      id: "skilled-workmanship-innovation-004",
      title: "Skilled Workmanship & Innovation.",
      excerpt:
        "You need more than a quick fix when you get a search result of a car mechanic near me. Amin Garage has a blend of professional skills.",
      image:
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      author: "John Smith",
      category: "Technology",
      readTime: "7 min read",
    },
    {
      id: "serving-faqir-wali-beyond-005",
      title: "Serving Faqir Wali & Beyond",
      excerpt:
        "We serve in Bahawalnagar District. Amin Garage is your partner whether you require car service in Bahawalnagar.",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 20, 2024",
      author: "Maria Garcia",
      category: "Maintenance",
      readTime: "5 min read",
    },
    {
      id: "why-choose-amin-garage-006",
      title: "Why Choose Amin Garage?",
      excerpt:
        "After more than ten years of practical work, Amin Garage has established itself as the top mechanism of cars in Faqir Wali.",
      image:
        "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 15, 2024",
      author: "David Wilson",
      category: "Comfort",
      readTime: "4 min read",
    },
  ];

  const categories = ["All", "Maintenance", "Safety", "Technology", "Comfort"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

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

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-[#C0C0C0] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-red-600 hover:text-red-800 font-medium flex items-center transition-colors duration-200">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
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
