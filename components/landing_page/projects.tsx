"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { VscAzure, VscTerminalPowershell } from "react-icons/vsc";
import { FaAws, FaWindows } from "react-icons/fa";
import { SiGnubash, SiOracle } from "react-icons/si";
import { HiCheck } from "react-icons/hi";
import { RiMicrosoftFill } from "react-icons/ri";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projectList = [
    {
      title: "Project One",
      image: "/projects/project1.png",
      topic: "Intune- Project one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Two",
      image: "/projects/project1.png",
      topic: "Intune- Project two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Three",
      image: "/projects/project1.png",
      topic: "Intune- Project three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Four",
      image: "/projects/project1.png",
      topic: "Intune- Project four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectList.length]);

  const tags = [
    {
      name: "Network Documentation",
    },
    {
      name: "System Monitoring",
    },
    {
      name: "Process Optimization",
    },
    {
      name: "Active Directory",
    },
  ];
  return (
    <section
      className="w-full py-20 mb-10 bg-gray-50 dark:bg-gray-900"
      id="projects"
    >
      <div className="w-11/12 mx-auto">
        <ScrollAnimation>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">
              Let&apos;s have a look at
              <br />
              my <span className="text-primary">Projects</span>
            </h1>

            {/* <Button className="rounded-full">See All</Button> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative pt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentProject * 50}%)`,
              }}
            >
              {projectList.map((project, index) => (
                <div key={index} className="relative flex-shrink-0 w-1/2 px-3">
                  <div
                    className={`relative overflow-hidden rounded-lg ${
                      index === currentProject ? "" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-[20vh] md:h-[40vh] object-top rounded-2xl"
                    />
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                      }}
                    />
                    <h1
                      className={`absolute text-xl md:text-3xl font-bold text-white bottom-4 left-4 ${
                        index === currentProject ? "text-shadow-lg" : ""
                      }`}
                    >
                      {project.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="flex items-center justify-center gap-2 pt-8">
            {projectList.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentProject
                    ? "w-8 bg-primary"
                    : "w-2 bg-stone-400 hover:bg-stone-500"
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.5}>
          <div className="grid justify-center grid-flow-row grid-cols-2 gap-2 py-8 md:flex">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full md:text-base text-[12px] text-center"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <div>
            <h1 className="mb-4 text-4xl font-semibold text-center text-gray-800 transition-all duration-500 dark:text-gray-100">
              {projectList[currentProject].topic}
            </h1>
            <p className="text-lg text-[#667085] leading-relaxed text-center md:w-6/12 mx-auto text-[14px] transition-all duration-500">
              {projectList[currentProject].description}
            </p>
          </div>
        </ScrollAnimation>

        {/* Skills & Expertise and Tools & Technologies Cards */}
        <ScrollAnimation delay={0.8}>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
            {/* Skills & Expertise Card */}
            <div className="p-8 bg-white border border-gray-200 rounded-3xl dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-8 text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
                SKILLS & EXPERTISE
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Active <br className="md:block hidden" />
                    Directory
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Process <br className="md:block hidden" />
                    Optimization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Network <br className="md:block hidden" />
                    Troubleshooting
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Software <br className="md:block hidden" />
                    Deployment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Technical <br className="md:block hidden" />
                    Documentation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Global Team <br className="md:block hidden" />
                    Collaboration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Compliance <br className="md:block hidden" />
                    Monitoring
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    System <br className="md:block hidden" />
                    Monitoring
                  </span>
                </div>
              </div>
            </div>

            {/* Tools & Technologies Card */}
            <div className="p-8 bg-white border border-gray-200 rounded-3xl dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-8 text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
                TOOLS & TECHNOLOGIES
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <VscAzure className="w-8 h-8 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Azure
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <RiMicrosoftFill className="w-8 h-8 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Microsoft 365
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaAws className="w-8 h-8 text-orange-500" />
                  <span className="text-gray-700 dark:text-gray-300">AWS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWindows className="w-8 h-8 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    WindowsServer
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiOracle className="w-8 h-8 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Entra ID
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiOracle className="w-8 h-8 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Oracle Cloud
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <RiMicrosoftFill className="w-8 h-8 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Intune
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiOracle className="w-8 h-8 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    ServiceNow
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiGnubash className="w-8 h-8 text-gray-600" />
                  <span className="text-gray-700 dark:text-gray-300">Bash</span>
                </div>
                <div className="flex items-center space-x-3">
                  <VscTerminalPowershell className="w-8 h-8 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    PowerShell
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
