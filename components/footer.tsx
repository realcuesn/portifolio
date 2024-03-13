const Footer = () => {
  return (
    <div className="w-full mt-20 border-t border-neutral-200">
      <div className="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto text-sm text-neutral-600 grid grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-20 ">
        <div className="w-full flex flex-col gap-y-2">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <a href="#about">Resume</a>
          <a href="#about">Github</a>
          <a href="#work">Newsletter</a>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <a href="#about">Blog</a>
          <a href="#work">Roadmap</a>
        </div>
      </div>
      <div className="justify-between flex max-w-7xl px-6 lg:px-8 py-10 w-full text-[0.95rem] mx-auto text-neutral-600">
        <p>©2024 Omkar Sontake</p>
        <a href="/privacy-policy" className="text-sm text-neutral-600">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
