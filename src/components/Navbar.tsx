"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    // Close the drawer
    setIsDrawerOpen(false);
  
    // Delay for 400ms before restoring scroll behavior
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 600);
  };

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
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 transition-all flex select-none bg-inherit">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between p-4 sm:p-0">
          <a
            href="#"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <span className="text-xl font-bold sm:text-2xl">
              Guangran (<span className="text-[#1f88ff]">Ryan</span>) Tang
            </span>
          </a>

          <div className="h-full flex items-center space-x-4">
            <div className="hidden md:flex item-center space-x-2">
              <a
                href="/#About"
                aria-label="link to scroll to about me section"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                <span className="font-semibold">About</span>
              </a>
              <a
                href="/#Projects"
                aria-label="link to scroll to project section"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                <span className="font-semibold">Projects</span>
              </a>
              <a
                href="/#Contact"
                aria-label="link to scroll to contact section"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                <span className="font-semibold">Contact</span>
              </a>

              {/* Not using this drawer component, but keep for future reference */}
              {/* <Drawer onClose={handleDrawerClose}>
                <DrawerTrigger
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                  })}
                >
                  <span className="font-semibold">Contact</span>
                </DrawerTrigger>
                <DrawerContent className="mx-auto flex flex-col justify-center items-center">
                  <DrawerHeader>
                    <DrawerTitle>Contact Me!</DrawerTitle>
                  </DrawerHeader>
                  <DrawerDescription>
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
                      <DrawerClose className="pb-4">
                        <Button variant="outline">
                          <span className="text-xl p-2">Cancel</span>
                        </Button>
                      </DrawerClose>
                    </form>
                  </DrawerDescription>
                </DrawerContent>
              </Drawer> */}
              <a
                href="https://drive.google.com/file/d/1aNgxEhFCLMTPcDad1Fiei6zK1WuNU7m5/view?usp=sharing"
                aria-label="link to open resume in new tab"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                <span className="font-bold">Resume</span>
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
