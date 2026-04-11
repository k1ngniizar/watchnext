"use client";

const PremiumBanner = () => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-xs rounded-lg text-white p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">
        Upgrade to Premium 🚀
      </h2>
      <p className="mb-4">
        Get personalized recommendations, early trailers, and movie alerts.
      </p>

      <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
        Go Premium
      </button>
    </div>
  );
};

export default PremiumBanner;