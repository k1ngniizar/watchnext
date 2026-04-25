const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800/90 z-20 sticky top-0 text-white">
      <h1 className="text-xl font-bold">🎬 WatchNext</h1>

      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#trending" className="hover:text-gray-300">Trending</a>
        <a href="#genre" className="hover:text-gray-300">Genres</a>
      </div>
    </nav>
  );
};

export default Navbar;