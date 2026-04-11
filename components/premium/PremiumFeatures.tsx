
const PremiumFeatures = () => {
  return (
    <section className="px-6 py-10 bg-gray-900 text-white relative rounded-lg overflow-hidden">
      <div className="absolute top-4 right-0 bg-blue-200 rounded-tl-sm rounded-bl-sm p-2 flex items-center justify-center">
        <p className="font-black text-blue-900 text-center">$9.99</p>
        <p className="font-black text-gray-600 text-center">/month</p>
      </div>
      <h2 className="text-2xl font-bold mb-6">
        🌟 Premium Benefits
      </h2>

      <ul className="space-y-4 text-gray-300">
        <li>📧 Personalized movie recommendations via email</li>
        <li>🎬 Exclusive insights into upcoming movies</li>
        <li>🚀 Early access to trailers & teasers</li>
        <li>🔔 Instant release notifications</li>
      </ul>
    </section>
  );
};

export default PremiumFeatures;