const About = () => {
  return (
    <section>
      <div className="py-4 lg:py-24 bg-[#EDF1FB] !-z-0 mix-blend-overlay">
        <div className="max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto">
          <h3 className="text-3xl font-medium">About Me</h3>

          <div className="grid lg:grid-cols-2 mt-14 text-lg gap-x-10">
            <div className="space-y-10">
              <p>
                I've been building UIs for container management tools since
                2013. I started hacking and building web services around Docker
                as soon as it came out. My experiments eventually got me my
                first job out of college at Tutum. I moved from Eastern France
                to Madrid in Spain to start my career in software engineering
                and shortly after I got the opportunity to move to San
                Francisco, CA, after the acquisition of Tutum by Docker.
              </p>

              <p>
                I originally focused on building SDKs and internals for
                TutumCloud in Go, then shortly after taking my first steps as a
                frontend engineer when building Stackfiles.io.
              </p>
            </div>

            <div className="space-y-10">
              <p>
                At Docker, my main focus was building high quality, and
                well-designed enterprise products with React, Redux and Styled
                Components. I always strive for clean, well tested and
                accessible UI projects. I also brought my attention to building
                a scalable design system components library and tools to bring
                consistency in UX and tooling across all the different products
                of the company.
              </p>

              <p>
                After a pit stop as a lead frontend engineer in adtech at
                Madhive, I recently joined Tango in New York City where I build
                products and tools to make you the best at your work!
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="glow-2 w-fit relative  px-4  bg-indigo-600 text-white font-medium  p-2  rounded-md ">
              <div className="flex items-center gap-x-3">
                <span>Resume.pdf</span>
                <img src="/download.svg" className="h-5" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
