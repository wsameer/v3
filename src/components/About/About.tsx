import { SectionTitle } from "@components/common/SectionTitle/SectionTitle";
import React from "react";

export const About: React.FC = () => {
  return (
    <div className="mx-auto p-6 md:px-10 md:py-12 items-start">
      <SectionTitle>
        <span>About Me</span>
      </SectionTitle>
      <p className="mb-2 text-base md:text-lg">
        I am an <strong>Engineering Manager</strong> based out of{" "}
        <a
          href="https://goo.gl/maps/kCHBvVyaqoryn5fS9"
          rel="noreferrer"
          target="_blank"
          className="font-semibold text-purple-400"
        >
          Toronto, Canada
        </a>
        . With ruminations of using technology to make a positive impact on a
        human life, I have invested over a{" "}
        <span className="font-semibold text-purple-400">decade</span> in
        learning and practicing software development to distil complex technical
        ideas into enterprise scale products.
      </p>
      <p className="mb-2 text-base md:text-lg">
        Over the past{" "}
        <span className="font-semibold text-purple-400">8 years</span>, I have
        had the privilege of working in{" "}
        <a
          href="https://vizitechsolutions.com"
          rel="noreferrer"
          target="_blank"
          className="font-semibold text-purple-400"
        >
          finance
        </a>
        ,{" "}
        <a
          href="https://www.securly.com/"
          rel="noreferrer"
          target="_blank"
          className="font-semibold text-purple-400"
        >
          student safety
        </a>
        , and{" "}
        <a
          href="https://www.koruux.com/"
          rel="noreferrer"
          target="_blank"
          className="font-semibold text-purple-400"
        >
          healthcare
        </a>{" "}
        domains.
      </p>
      <p className="mb-2 text-base md:text-lg">
        Here are a few technologies I&apos;ve been working with recently:
      </p>
      <div>
        <ul className="grid grid-cols-2 list-disc list-inside">
          <li className="text-sm md:text-base my-2">JavaScript, TypeScript</li>
          <li className="text-sm md:text-base my-2">React, Redux</li>
          <li className="text-sm md:text-base my-2">Node.js, Kotlin</li>
          <li className="text-sm md:text-base my-2">
            AWS, Google Cloud Platform
          </li>
          <li className="text-sm md:text-base my-2">NextJS, Angular</li>
          <li className="text-sm md:text-base my-2">Styled Components</li>
        </ul>
      </div>
    </div>
  );
};

About.displayName = "About";
