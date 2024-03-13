const Header = () => {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md z-20">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-6">
        <h1 className="text-xl font-bold uppercase">Omkar</h1>

        <button className="glow w-fit relative inline-block  bg-neutral-100 p-2  rounded-md  z-index: 1;">
          <img src="/menu.svg" className="h-5" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
