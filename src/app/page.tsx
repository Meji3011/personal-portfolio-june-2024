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
    AOS.init();
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
        <MaxWidthWrapper className="mt-32 px-8 min-h-[90vh]">
          <div
            className="flex flex-col items-start text-left gap-6 bg-gradient-to-r from-slate-600 to bg-slate-300 text-clip py-20 px-12 rounded-lg"
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
              Guangran (<span className="text-[#1f50ff]">Ryan</span>) Tang.
            </h1>
            <h2
              className="tracking-tight text-balance font-bold text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="700"
            >
              I'm a Freelance Frontend Developer.
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
                  href="https://drive.google.com/file/d/1EvjdJWi8bK0CLcDor-zfyr5p7ZLai8HR/view?usp=sharing"
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
        <MaxWidthWrapper className="flex flex-col items-center mb-32 px-8">
          <div
            className="flex flex-col w-full items-start"
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
                  >
                    HTML
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    CSS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Javascript
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    React
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Next.JS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Tailwind CSS
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Typescript
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Firebase
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    MongoDB
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Prisma
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
                  >
                    Stripe
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-110 transition duration-300 cursor-default"
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
                <div>
                  <Image
                    src="/TangAboutMe.jpg"
                    width={400}
                    height={400}
                    alt="Picture of Ryan for About me section."
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="Projects">
        <MaxWidthWrapper className="flex flex-col items-center mt-32 mb-32 px-8">
          <div
            className="flex flex-col w-full"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease-in"
          >
            <h1 className="tracking-tight text-balance font-bold text-4xl">
              Projects
            </h1>
            <div className="border-b border-gray-200 w-full"></div>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="px-0 md:mx-12"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-12">
                    <Image
                      src="/CaseCobraSS.png"
                      width={1649}
                      height={928}
                      alt="Picture of CaseCobra web app"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                      <p>
                        CaseCobra clone, an E-commerce website for designing and
                        customizing your own smartphone case.{" "}
                      </p>
                      <p>
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
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-12">
                    <Image
                      src="/UltraverseSS.png"
                      width={1649}
                      height={928}
                      alt="Picture of Ultraverse web app"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                      <p>
                        Ultraverse NFT World. A mock digital market for
                        showcasing NFT tokens.
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
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-12">
                    <Image
                      src="/TeslaSS.png"
                      width={1649}
                      height={928}
                      alt="Picture of Tesla web app"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1C1D25] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease rounded-sm"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 top-3/4 text-md sm:text-xl text-white">
                      <p>Tesla Landing Page clone wiht login functionality.</p>
                      <p> React, Firebase, Auth.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[550px] w-full px-2 text-center transition-all duration-700 ease opacity-0 group-hover:opacity-100 group-hover:top-3/4 group-hover:-translate-y-1/2 top-3/4 text-white flex flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        variant="ghost"
                        className="hover:scale-110 transition duration-300"
                      >
                        <a
                          href="https://week-6-tesla-2021-clone.vercel.app/"
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
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="group relative flex items-center justify-center flex-col my-12 border-gray-200 border-[2px] rounded-md p-12">
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
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5 shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="Contact">
        <MaxWidthWrapper className="flex flex-col items-center mt-16 mb-16 px-8">
          <div
            className="flex flex-col w-full items-center justify-center"
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
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full rounded-sm p-1 text-slate-900"
                ref={emailRef}
              />
              <input
                type="text"
                name="from_subject"
                placeholder="Your Subject"
                className="w-full rounded-sm p-1 text-slate-900"
                ref={subjectRef}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                cols={25}
                rows={7}
                className="w-full rounded-sm h-[200px] p-1 text-slate-900"
                ref={messageRef}
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
