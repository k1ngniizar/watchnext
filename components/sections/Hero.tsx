

const isProduction = process.env.NODE_ENV === "production";
const Hero = () => {
  return (
    <section id="home" style={
      {
        backgroundImage: isProduction ? "url('./backdrop.avif')" : "url('/backdrop.avif')"
      }
    } className={`text-white py-20 px-6 text-center flex items-center justify-center min-h-screen relative`}>
      <div className="z-10">

        <h2 className="text-4xl font-bold my-4">
          Discover Your Next Favorite Movie 🍿
        </h2>
        <p className="text-gray-100 mb-6">
          Get personalized recommendations instantly
        </p>

        <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700">
          Explore Movies
        </button>
      </div>
      <div className="absolute top-0 w-full h-full bg-black/60" />
    </section>
  );
};

export default Hero;