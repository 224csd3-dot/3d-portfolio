"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin className="h-5 w-5" />,
  },
  {
    name: "Email",
    href: "mailto:parikhsmit1105@gmail.com",
    icon: <SiGmail className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram className="h-5 w-5" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button
              variant="ghost"
              className="text-foreground/80 hover:text-foreground dark:text-white/90"
              aria-label={button.name}
            >
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
