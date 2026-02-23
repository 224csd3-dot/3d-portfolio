import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  image: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "the-cave-cafe",
    category: "Restaurant",
    title: "The Cave Cafe",
    image:
      "/assets/projects-screenshots/the-cave-cafe/Screenshot%202026-02-07%20204510.png",
    screenshots: [
      "/assets/projects-screenshots/the-cave-cafe/Screenshot%202026-02-07%20204510.png",
    ],
    live: "https://thecavecafe.in",
    github: "https://github.com/224csd3-dot/thecavecafe.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            The Cave Cafe is a modern café website designed to showcase their menu, ambiance, and provide a seamless online presence for customers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "rajdhani-polytechnic",
    category: "Educational",
    title: "Rajdhani Polytechnic",
    image:
      "/assets/projects-screenshots/rajdhani-polytechnic/Screenshot%202026-02-07%20204542.png",
    screenshots: [
      "/assets/projects-screenshots/rajdhani-polytechnic/Screenshot%202026-02-07%20204542.png",
    ],
    live: "https://rajdhanipolytech.live",
    github: "https://github.com/224csd3-dot/rajdhani-source-hub.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Rajdhani Polytechnic is an educational platform providing information and resources for students and faculty members.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "vipul-classes",
    category: "Education",
    title: "Vipul Classes",
    image:
      "/assets/projects-screenshots/vipul-classes/Screenshot%202026-02-07%20204633.png",
    screenshots: [
      "/assets/projects-screenshots/vipul-classes/Screenshot%202026-02-07%20204633.png",
    ],
    live: "https://vipulclasses.lovable.app",
    github: "https://github.com/224csd3-dot/vipulclasses.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Vipul Classes is a coaching platform offering quality educational content and guidance for students aiming for academic excellence.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "stark-fitness-gym",
    category: "Fitness",
    title: "Stark Fitness Gym",
    image:
      "/assets/projects-screenshots/stark-fitness-gym/Screenshot%202026-02-07%20204724.png",
    screenshots: [
      "/assets/projects-screenshots/stark-fitness-gym/Screenshot%202026-02-07%20204724.png",
    ],
    live: "https://starkfitnessgym.lovable.app",
    github: "https://github.com/224csd3-dot/starkfitnessgym.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
      ],
      backend: [PROJECT_SKILLS.prisma, PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Stark Fitness Gym is a comprehensive fitness platform showcasing memberships, programs, and helping people achieve their fitness goals.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "pandeji-restaurant",
    category: "Restaurant",
    title: "Pandeji Restaurant",
    image:
      "/assets/projects-screenshots/pandeji-restaurant/Screenshot%202026-02-07%20204802.png",
    screenshots: [
      "/assets/projects-screenshots/pandeji-restaurant/Screenshot%202026-02-07%20204802.png",
    ],
    live: "https://pandejirestaurant.lovable.app",
    github: "https://github.com/224csd3-dot/pandejirestaurant.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Pandeji Restaurant is a dining platform featuring authentic cuisine with an intuitive interface for menu browsing and reservations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "uma-autocare",
    category: "Automobile",
    title: "Uma Autocare",
    image:
      "/assets/projects-screenshots/uma-autocare/umaautocare.png",
    screenshots: [
      "/assets/projects-screenshots/uma-autocare/umaautocare.png",
    ],
    live: "https://umaautocare.lovable.app",
    github: "https://github.com/224csd3-dot/umaautocare",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.spline,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern, high-performance website built for Uma Autocare, showcasing car accessories and car spa services with clean UI, smooth animations, and responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "keval-electronics",
    category: "Electrical Services",
    title: "Keval Electronics",
    image:
      "/assets/projects-screenshots/keval-electronics/kevalelectronics.png",
    screenshots: [
      "/assets/projects-screenshots/keval-electronics/kevalelectronics.png",
    ],
    live: "https://kevalelectronics.lovable.app",
    github: "https://github.com/224csd3-dot/kevalelectronics",
    skills: {
      frontend: [
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A professional website developed for Keval Electronics, highlighting electrical contracting services, contact information, and business credibility with a clean corporate design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "harmony-dental-care",
    category: "Healthcare",
    title: "Harmony Dental Care",
    image:
      "/assets/projects-screenshots/harmony-dental-care/Screenshot%202026-02-23%20142227.png",
    screenshots: [
      "/assets/projects-screenshots/harmony-dental-care/Screenshot%202026-02-23%20142227.png",
    ],
    live: "https://harmonydentalcares.lovable.app",
    github: "https://github.com/224csd3-dot/harmonydentalcares.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [PROJECT_SKILLS.prisma, PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Harmony Dental Care is a clean, patient-friendly clinic website designed to highlight services, build trust, and make booking easy.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
];
export default projects;
