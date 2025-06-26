import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "+923420147371";
  const message =
    "Hello! I'm interested in your premium garage services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fadeInUp">
          {/* WhatsApp Option */}
          <div
            onClick={handleWhatsAppClick}
            className="group flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
          >
            <MessageCircle className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <div className="font-bold">WhatsApp</div>
              <div className="text-sm text-green-100">Chat with us now</div>
            </div>
          </div>

          {/* Call Option */}
          <div
            onClick={handleCallClick}
            className="group flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
          >
            <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <div className="font-bold">Call Now</div>
              <div className="text-sm text-blue-100">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/25 ${
          isExpanded ? "rotate-45" : ""
        }`}
        aria-label="Contact options"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>

        {/* Icon */}
        <div className="relative z-10">
          {isExpanded ? (
            <X className="w-7 h-7 transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </div>

        {/* Notification Badge */}
        {!isExpanded && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
            1
          </div>
        )}
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
