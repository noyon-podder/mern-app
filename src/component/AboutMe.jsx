import React from 'react'
import aboutImage from "../images/about.png"
const AboutMe = () => {
  return (
    <section className="bg-white mt-10">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-x-9">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-xl lg:max-w-2xl"
            src={aboutImage}
            alt="photo"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-primary lg:text-4xl">
              Our Focus On
            </h1>
            <p className="text-base mt-8 text-gray-600">
              Continually underwhelm visionary models with cross-unit synergy.
              Uniquely leverage other's premium convergence before progressive
              data. Proactively monetize visionary models.
              <br />
              <br />

              Progressively customize backward-compatible applications whereas
              error-free technology. Intrinsicly underwhelm bleeding-edge
              meta-services rather than high-quality action
              <br />
              <br />
              Conveniently deploy top-line collaboration and idea-sharing for an
              expanded array of partnerships. Continually generate just in time
              innovation through premium niche markets. Conveniently plagiarize
              client-centered interfaces before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe