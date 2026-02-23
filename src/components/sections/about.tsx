import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="max-w-6xl mx-auto py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-emerald-400" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
           <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
  <Image
    src="/me.png"
    alt="Smit Parikh"
    width={400}
    height={400}
    className="h-full w-full object-cover object-top"

    priority
  />
</div>

            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-xl border border-emerald-400/60" />
          </motion.div>
          <motion.div
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p>
              I&apos;m a third-year Computer Science and Design student and a Full
              Stack Web Developer with a strong passion for building beautiful,
              cool, and high-impact websites for real businesses.
            </p>
            <p>
              I enjoy creating modern web experiences that combine{" "}
              <span className="text-emerald-400 font-semibold">
                clean UI/UX design, responsive layouts, and scalable full-stack
                development
              </span>
              . My work focuses on transforming ideas into visually stunning and
              functional digital products that help businesses establish a
              strong online presence.
            </p>
            <p>
              I specialize in crafting business-ready websites across multiple
              domains such as restaurants, education, and fitness, ensuring
              every project is optimized for performance, usability, and
              real-world use.
            </p>
            <p>
              Whether you&apos;re a business owner looking for a professional website
              or someone with an idea that needs to come to life, I&apos;m always
              excited to build something meaningful and impactful.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
