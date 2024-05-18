"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li key="1">Next.js</li>
        <li key="2">MySql</li>
        <li key="3">Python</li>
        <li key="4">Java</li>
        <li key="5">JavaScript</li>
        <li key="6">React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li key="1">
          <span>2023 - 2026</span>BCA | from Institute of Information Technology & Management, Janakpuri (IITM) Delhi
        </li>
        <li key="2">
          <span>2022 - 2023</span>12th | from Vivekanand Public School, New Delhi
        </li>
        <li key="3">
          <span>2020 - 2021</span>10th | from Canterbury Public School, New Delhi
        </li>
      </ul>
    ),
  },
  // Add Experience content if necessary
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li key="1">Experience detail 1</li>
        <li key="2">will display soon!...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((tabData) => tabData.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/7.png" width={500} height={500} alt="About me image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Full Stack: With a broad skill set including front-end and back-end technologies, I am a driven full stack developer.
            I create attractive, easy, and user-friendly interfaces using my experience in HTML, CSS, and JavaScript. I am good in
            PHP, Node.js, and React on the server side, producing reliable, effective, protected applications. I am dedicated to my work,
            keeping in touch with new technologies in the market and having the courage to learn them. I place a higher priority on responsive 
            design and effective project management. I have also learned various algorithms (DSA). My core language for backend development is JAVA.
            I work diligently and creatively to develop cutting-edge, significant digital solutions.  
            I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {activeTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
