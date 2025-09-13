import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || "1");

  // Blog data
  const blogPosts = [
    {
      id: 1,
      title:
        "Auto Car Air Conditioning Service: Beat the Heat with Amin Garage.",
      content:
        "Nothing is more critical than an effective car air conditioning system when the scorching summer heat hits Pakistan. The car repair shop should be very efficient because it does not only maintain your car in the best manner but also makes you comfortable on the road. We, at Amin Garage, the best car workshop in Faqir Wali, get to know how important a well-functioning AC system is, particularly during long travels throughout the Bahawalnagar District.",
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Maintenance",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Why Car AC Repair Matters",
      content:
        "The AC of your car is not only a comfort, but a direct influence on the safety, health and performance. The malfunctioning of cooling may cause fatigue and diminished concentration of the driver, and even unnecessary load on the car. This is the reason why Amin Garage, a preferred auto repair shop and auto workshop in Faqir Wali, can offer you also the car AC repair service as per your needs. You may be looking to find a garage car near me in Faqir Wali or need car AC repair in Bahawalnagar, but our highly trained technicians are here to make sure you beat the heat with top-notch solutions.",
      image:
        "https://images.unsplash.com/photo-1681249537147-802e67912982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNpZ25zJTIwWW91ciUyMEJyYWtlcyUyME5lZWQlMjBJbW1lZGlhdGUlMjBBdHRlbnRpb258ZW58MHx8MHx8fDA%3D",
      date: "March 10, 2024",
      author: "Maria Garcia",
      category: "Safety",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Full Vehicle Maintenance.",
      content:
        "When it comes to Amin Garage, we do not stop at AC service. We have got it all as a complete service car workshop with engine repair services, brake repair, oil change service, and engine diagnostics up to the special repair of the suspension and hospital replacement of the battery. Years of trust, transparency and delivering results that drivers trust give us our reputation of being the best auto workshop in Faqir Wali.",
      image:
        "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      author: "David Wilson",
      category: "Maintenance",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Skilled Workmanship & Innovation.",
      content:
        "You need more than a quick fix when you get a search result of a car mechanic near me. Amin Garage has a blend of professional skills and state of the art diagnostic equipment to ensure the correct and permanent repair needs. Whether it is transmission repair, denting, painting, car polishing, wheel alignment, and even a tires replacement, we have all the equipment needed to meet every automotive requirement. A modern car paint booth located close to me, which we have invested in to make sure that our car painters will always produce a flawless vehicle, makes sure that your vehicle looks as good as it performs. We also provide authentic car parts and spares, which ensures performance and durability.",
      image:
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      author: "John Smith",
      category: "Technology",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Serving Faqir Wali & Beyond",
      content:
        "We serve in Bahawalnagar District. Amin Garage is your partner whether you require car service in Bahawalnagar, a car service center in Chishtian, a trustworthy car mechanic in Dahranwala or an auto workshop in Dunga Bunga. Drivers of Fort Abbas are banking on our high-tech engine fixing and the population of Shaheed Chowk is banking on our professional denting and painting. We also offer expert services in the form of suspension repairs in Haroonabad, battery replacement in chishtian, oil change service in Dahranwala and full car service in Dunga Bunga.",
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 20, 2024",
      author: "Maria Garcia",
      category: "Maintenance",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Why Choose Amin Garage?",
      content:
        "After more than ten years of practical work, Amin Garage has established itself as the top mechanism of cars in Faqir Wali. We have a simple philosophy, which is to treat our cars like it is our own and our customers like family. We offer a blend of honesty, expertise and affordability in quick AC check-ups to full car repair in Khichi Wala.",
      image:
        "https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 15, 2024",
      author: "David Wilson",
      category: "Comfort",
      readTime: "4 min read",
    },
  ];

  const post = blogPosts.find((post) => post.id === blogId) || blogPosts[0];

  // Format content with paragraphs
  const formatContent = (content: string) => {
    return content.split(".").map((sentence, index) => {
      if (!sentence.trim()) return null;
      return (
        <p key={index} className="mb-4">
          {sentence.trim() + "."}
        </p>
      );
    });
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-red-600 hover:text-red-800 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        {/* Blog header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-[38rem] object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-red-600 text-[#C0C0C0] px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-medium">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.content.substring(0, 100) + '...',
                        url: window.location.href,
                      })
                      .catch((error) => console.log('Error sharing', error));
                    } else {
                      // Fallback for browsers that don't support Web Share API
                      navigator.clipboard.writeText(window.location.href)
                        .then(() => alert('Link copied to clipboard!'))
                        .catch((error) => console.log('Error copying link', error));
                    }
                  }}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4 mb-6"> 
              <a 
                href="https://web.facebook.com/profile.php?id=61578059121001" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg" 
              > 
                <Facebook className="w-6 h-6 text-blue-600 group-hover:text-white group-hover:scale-110 transition-transform duration-300" /> 
              </a> 
              <a 
                href="https://www.instagram.com/amingarages" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-pink-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg" 
              > 
                <Instagram className="w-6 h-6 text-pink-600 group-hover:text-white group-hover:scale-110 transition-transform duration-300" /> 
              </a> 
              <a 
                href="https://x.com/amingarage96" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-400 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg" 
              > 
                <Twitter className="w-6 h-6 text-blue-400 group-hover:text-white group-hover:scale-110 transition-transform duration-300" /> 
              </a> 
              <a 
                href="https://www.youtube.com/@AminGarage-n6b" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg" 
              > 
                <Youtube className="w-6 h-6 text-red-600 group-hover:text-white group-hover:scale-110 transition-transform duration-300" /> 
              </a> 
              <a 
                href="https://www.tiktok.com/@amingarage96?lang=en-GB" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-black p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg" 
              > 
                <SiTiktok className="w-6 h-6 text-black group-hover:text-white group-hover:scale-110 transition-transform duration-300" /> 
              </a> 
            </div>
            
            {/* Blog content */}
            <div className="prose max-w-none text-gray-700">
              {formatContent(post.content)}
            </div>
          </div>
        </div>

        {/* Related posts section could be added here */}
      </div>
    </div>
  );
};

export default BlogDetails;
