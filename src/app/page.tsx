"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, Linkedin, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE || "";
  const emailTemplate = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || "";
  const emailUser = process.env.NEXT_PUBLIC_EMAIL_USER || "";

  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  emailjs.init(emailUser);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      subject: subjectRef.current?.value || "",
      message: messageRef.current?.value || "",
    };
    emailjs.send(emailService, emailTemplate, templateParams, emailUser).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thanks, message sent successfully");
      },
      function (error) {
        alert("OOPs something went wrong... Try again later");
        console.log("FAILED...", error);
      }
    );
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (subjectRef.current) subjectRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <>
      <section id="Landing">
        <MaxWidthWrapper className="px-8 min-h-[calc(100vh-81px)] flex flex-col justify-center">
          <div
            className="flex flex-col items-start text-left gap-6 bg-gradient-to-r from-stone-500 to bg-slate-500 text-clip py-20 px-12 rounded-lg select-none"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <p
              className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="700"
            >
              Hi! My name is
            </p>
            <h1
              className="tracking-tight text-balance font-bold text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 sm:py-4"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="700"
            >
              Guangran (<span className="text-[#1f88ff]">Ryan</span>) Tang.
            </h1>
            <h2
              className="tracking-tight text-balance font-bold text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="700"
            >
              I'm a Full-Stack Developer.
            </h2>
            <p
              className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100"
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="700"
            >
              I love the challenge of turning beautiful concepts into reality.
            </p>
            <div className="flex justify-center items-center gap-2">
              <Button
                asChild
                variant="ghost"
                className="hover:scale-110 transition duration-300"
                data-aos="fade-left"
                data-aos-delay="1600"
                data-aos-duration="700"
              >
                <a
                  href="https://www.linkedin.com/in/ryantanggr/"
                  aria-label="link to open Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:scale-110 transition duration-300"
                data-aos="fade-left"
                data-aos-delay="1600"
                data-aos-duration="700"
              >
                <a
                  href="https://github.com/Meji3011"
                  aria-label="link to open github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 shrink-0" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:scale-110 transition duration-300"
                data-aos="fade-left"
                data-aos-delay="1600"
                data-aos-duration="700"
              >
                <a
                  href="https://drive.google.com/file/d/1h_hzE48wLgOJmjOZ5DFdQue6H177rW9o/view?usp=sharing"
                  aria-label="link to open resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight className="h-5 w-5 shrink-0" />
                </a>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="About">
        <MaxWidthWrapper className="flex flex-col items-center mt-32 mb-32 px-8">
          <div
            className="flex flex-col w-full items-start select-none"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            <h1 className="tracking-tight text-balance font-bold text-4xl">
              About me
            </h1>
            <div className="border-b border-gray-200 w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="col-span-2 flex flex-col gap-4">
                <h2 className="tracking-tight text-primary text-lg">
                  As an avid gamer, I've always been fascinated by the
                  technology behind the scenes. During my pursuit of a physics
                  degree at Reed College, I took Computer Science courses to
                  improve my data analysis skills. However, it wasn't until
                  after graduation, when exploring the digital projects of
                  Virtual YouTubers, that I discovered the captivating world of
                  front-end development.{" "}
                  <a
                    href="https://p5aholic.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F51FF] hover:text-[#1F51FF]/90"
                  >
                    Keita Yamada's
                  </a>{" "}
                  sleek and responsive portfolio page was a true revelation,
                  igniting my passion for this realm where code transforms into
                  a visual feast for users. Inspired, I enrolled in the Frontend
                  Simplified bootcamp in the Summer of 2023, equipping myself
                  with the ability to design and implement web apps using the
                  latest technologies, learning the best practices and how to
                  enhance the user experience.
                </h2>
                <h2 className="tracking-tight text-primary text-lg">
                  I'm always interested in building web apps with scalability
                  and usability. My tech stack is shown below:
                </h2>

                <div className="col-span-2 flex flex-wrap py-2 gap-4 justify-start">
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="HTML"
                  >
                    HTML
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="CSS"
                  >
                    CSS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Javscript"
                  >
                    Javascript
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="React"
                  >
                    React
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Redux"
                  >
                    Redux
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Next.JS"
                  >
                    Next.JS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Tailwind CSS"
                  >
                    Tailwind CSS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Typescript"
                  >
                    Typescript
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Firebase"
                  >
                    Firebase
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="MongoDB"
                  >
                    MongoDB
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Prisma"
                  >
                    Prisma
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Stripe"
                  >
                    Stripe
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                    aria-label="Kinde"
                  >
                    Kinde
                  </Button>
                </div>
                <h2 className="tracking-tight text-primary text-lg">
                  Whether it's crafting visually stunning interfaces or
                  optimizing performance, I approach every project with a
                  meticulous eye for detail and a commitment to delivering
                  outstanding results.
                </h2>
              </div>

              <div className="items-center mt-4 md:col-start-3 mx-auto">
                <div className="relative w-full">
                  <Image
                    src="/TangAboutMe.jpg"
                    alt="Picture of Ryan for About me section."
                    width={1365}
                    height={2048}
                    layout="responsive"
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="Projects">
        <MaxWidthWrapper className="flex flex-col items-center mt-32 mb-32 px-8">
          <div
            className="flex flex-col w-full select-none"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            <h1 className="tracking-tight text-balance font-bold text-4xl">
              Projects
            </h1>
            <div className="border-b border-gray-200 w-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-2 md:p-4">
                <Image
                  src="/CaseCobraSS.png"
                  width={1649}
                  height={928}
                  alt="Picture of CaseCobra web app"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                  <p className="flex md:hidden text-sm">
                    CaseCobra, design and customize your phone case.
                  </p>
                  <p className="hidden md:flex">
                    CaseCobra, an E-commerce website for designing and
                    customizing your own smartphone case.{" "}
                  </p>
                  <p className="text-sm text-md">
                    {" "}
                    Next.JS, React, TailwindCSS, Typescipt, Prisma, Shadcn,
                    Kinde, Stripe.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-3/4 group-hover:-translate-y-1/2 top-3/4 text-white flex flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://casecobra-clone-grt.vercel.app/"
                      aria-label="link to open casecobra e-commerce website clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://github.com/Meji3011/casecobra-clone"
                      aria-label="link to open github repo of casecobra-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 shrink-0" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-2 md:p-4">
                <Image
                  src="/UltraverseSS.png"
                  width={1649}
                  height={928}
                  alt="Picture of Ultraverse web app"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                  <p>
                    Ultraverse NFT World. A mock digital market for showcasing
                    NFTs.
                  </p>
                  <p>React, Axios, Firebase.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-3/4 group-hover:-translate-y-1/2 top-3/4 text-white flex flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://ryan-fes-virtual-internship.vercel.app/"
                      aria-label="link to open ultraverse NFT marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://github.com/Meji3011/Ryan-FES-virtual-internship"
                      aria-label="link to open github repo of ultraverse NFT marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 shrink-0" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-2 md:p-4">
                <Image
                  src="/TeslaSS.png"
                  width={1649}
                  height={928}
                  alt="Picture of Tesla web app"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                  <p>Tesla clone with login functionality</p>
                  <p>React, Firebase, Auth</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-3/4 group-hover:-translate-y-1/2 top-3/4 text-white flex flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://week-6-tesla-2021-clone.vercel.app/"
                      aria-label="link to open tesla clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://github.com/Meji3011/Week-6-Tesla-2021-clone"
                      aria-label="link to open github repo of tesla clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 shrink-0" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-2 md:p-4">
                <Image
                  src="/ACMESS.png"
                  width={1649}
                  height={928}
                  alt="Picture of ACME web app"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                  <p>ACME Dashboard for tracking transactions.</p>
                  <p> Next.JS, React, Auth, Vercel DB</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-3/4 group-hover:-translate-y-1/2 top-3/4 text-white flex flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://next-js-14-crashcourse.vercel.app/"
                      aria-label="link to open ACME dashboard, an app created with Next.js 14"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="hover:scale-110 transition duration-300"
                  >
                    <a
                      href="https://github.com/Meji3011/Next.JS-14-crashcourse"
                      aria-label="link to open github repo of ACME dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 shrink-0" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="Contact" className="md:hidden">
        <MaxWidthWrapper className="flex flex-col items-center mb-16 px-8">
          <div
            className="flex flex-col w-full items-center justify-center select-none"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            <h1 className="tracking-tight text-balance font-bold text-4xl border-b-2 border-gray-200 w-auto">
              Contact Me!
            </h1>
            <form
              onSubmit={sendMessage}
              className="flex flex-col w-[360px] sm:w-[500px] md:w-[600px] items-center justify-center gap-4 pt-4"
              action=""
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full rounded-sm p-1 text-slate-900"
                ref={nameRef}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full rounded-sm p-1 text-slate-900"
                ref={emailRef}
                required
              />
              <input
                type="text"
                name="from_subject"
                placeholder="Your Subject"
                className="w-full rounded-sm p-1 text-slate-900"
                ref={subjectRef}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                cols={25}
                rows={7}
                className="w-full rounded-sm h-[200px] p-1 text-slate-900"
                ref={messageRef}
                required
              ></textarea>
              <Button type="submit" variant="default">
                <span className="text-xl p-2">Send Message</span>
              </Button>
            </form>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
