"use client";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="pt-40 lg:py-52 2xl:py-40">
      <div className="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl max-w-4xl">
          Hi there! I'm Omkar, a student and lead frontend engineer interning at
          hola, and currently collaborating on projects involving{" "}
          <br className="sm:hidden" />
          <Typewriter
            options={{
              strings: [
                "React.",
                "Typescript.",
                "Node.",
                "Electron.",
                "Next.",
                "Vue.",
                "Nuxt.",
                "Python.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6 mt-10">
            <button className="glow w-fit relative min-w-fit inline-block px-4  bg-indigo-400 bg-opacity-20 text-indigo-600 font-medium  backdrop-blur-sm p-2  rounded-md  z-index: 1;">
              About Me
            </button>

            <button className="glow w-fit relative inline-block px-4  bg-indigo-400 bg-opacity-20 text-indigo-600 font-medium  backdrop-blur-sm p-2  rounded-md  z-index: 1;">
              Work
            </button>
          </div>

          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
