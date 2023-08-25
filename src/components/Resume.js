import React from "react";

export default function Resume({ resumeRef }) {
  return (
    <div className="bg-white text-center h-[1220px] pt-24">
      <div
        ref={resumeRef}
        className="relative flex sm:flex-row flex-col sm:justify-center sm:items-baseline  items-center sm:gap-40 gap-8 sm:right-6"
      >
        <div className="sm:text-2xl text-lg underline underline-offset-8 font-bold w-32">
          Work
        </div>
        <div className="flex flex-col gap-16 sm:w-[510px] w-[300px] px-0">
          <div className="flex flex-col text-left gap-2">
            <h1 className="sm:text-3xl text-xl font-medium">
              Automatic Data Processing Inc.
            </h1>
            <div className="flex gap-12 items-center">
              <span className="sm:text-lg text-sm">Software Engineer</span>{" "}
              <ul className="list-disc italic">
                <li>Feb 2022 - Present</li>
              </ul>{" "}
            </div>
          </div>
          <div className="flex flex-col text-left gap-2">
            <h1 className="sm:text-3xl text-xl font-medium">
              The Coder School
            </h1>
            <div className="flex gap-12 items-center">
              <span className="sm:text-lg text-sm">Instructor</span>{" "}
              <ul className="list-disc italic">
                <li>June 2021 - Feb 2022</li>
              </ul>{" "}
            </div>
          </div>
          <div className="flex flex-col text-left gap-2">
            <h1 className="sm:text-3xl text-xl font-medium">
              Application Consulting Group
            </h1>
            <div className="flex gap-12 items-center">
              <span className="sm:text-lg text-sm">Consulting Intern</span>{" "}
              <ul className="list-disc italic">
                <li>Aug 2021 - Sept 2021</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-1/2 my-8 mx-auto" />

      <div className="relative flex sm:flex-row flex-col sm:justify-center sm:items-baseline  items-center sm:gap-40 gap-8 sm:right-6">
        <div className="sm:text-2xl text-lg underline underline-offset-8 font-bold w-32">
          Education
        </div>
        <div className="flex flex-col gap-16 sm:w-[510px] w-full sm:px-0 pl-[30px]">
          <div className="flex flex-col text-left gap-2 relative right-1">
            <h1 className="sm:text-3xl text-xl font-medium">
              New Jersey Institute of Technology
            </h1>
            <div className="flex gap-12 items-center">
              <span className="sm:text-lg text-sm">
                Bachelors of Science in Computer Science
              </span>{" "}
              <ul className="list-disc italic">
                <li>Sept 2017 - Dec 2021</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>

      <hr className="w-1/2 my-8 mx-auto" />

      <div className="relative flex sm:flex-row flex-col sm:justify-center sm:items-baseline  items-center sm:gap-40 gap-8 sm:right-6">
        <div className="sm:text-2xl text-lg underline underline-offset-8 font-bold w-32">
          Skills
        </div>
        <div className="flex flex-col gap-8 sm:w-[510px] w-full sm:px-0 px-[40px]">
          <div className="flex flex-col text-left gap-2 relative right-1">
            <h1 className="sm:text-2xl text-lg font-medium">React</h1>
            <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-4 w-4/5"></div>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 relative right-1">
            <h1 className="sm:text-2xl text-lg font-medium">
              Tailwind/Bootstrap
            </h1>
            <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-4 w-4/5"></div>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 relative right-1">
            <h1 className="sm:text-2xl text-lg font-medium">Node.js</h1>
            <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-4 w-4/5"></div>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 relative right-1">
            <h1 className="sm:text-2xl text-lg font-medium">MongoDB</h1>
            <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-4 w-[70%]"></div>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 relative right-1 mb-8">
            <h1 className="sm:text-2xl text-lg font-medium">
              AWS Lambdas/Step functions
            </h1>
            <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-4 w-3/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
