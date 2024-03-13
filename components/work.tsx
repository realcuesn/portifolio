const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto">
        <h3 className="text-3xl font-medium mt-10 sm:mt-20">
          Projects I've worked on over the past three years, including both
          production-ready and hackathon projects
        </h3>

        <div className="w-full grid">
          <div className="w-full space-y-10 mt-20">
            <div className="w-full">
              <div className="aspect-video">
                <button className="glow-2 h-full w-full relative  text-white font-medium   rounded-md ">
                  <img
                    src="https://www.xpandify.agency/_vercel/image?url=%2Fimages%2Fpicture%2Finvac.png&w=1536&q=100"
                    alt="Invac project image"
                    className="h-full w-full projects-img-one  object-cover rounded-md"
                  />
                </button>
              </div>

              <h5 className="text-xl mt-1 uppercase font-medium">Invac</h5>
              <p className="text-lg text-neutral-400">
                Developed a website and CRM software
              </p>
            </div>

            <div className="w-full">
              <div className="aspect-video">
                <button className="glow-2 h-full w-full relative  text-white font-medium   rounded-md ">
                  <img
                    src="https://www.xpandify.agency/_vercel/image?url=%2Fimages%2Fpicture%2Fcriminaldefensegeorgialaw.png&w=1536&q=100"
                    alt="Invac project image"
                    className="h-full w-full projects-img-one  object-cover rounded-md"
                  />
                </button>
              </div>

              <h5 className="text-xl mt-1 uppercase font-medium">
                TWG Law Firm
              </h5>
              <p className="text-lg text-neutral-400">
                Developed a full stack website with stripe integration
              </p>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
