const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800/90 z-20 sticky top-0 text-white">
      <h1 className="text-xl font-bold">🎬 WatchNext</h1>

      <div className="space-x-4">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">Trending</button>
        <button className="hover:text-gray-300">Genres</button>
      </div>
    </nav>
  );
};

export default Navbar;