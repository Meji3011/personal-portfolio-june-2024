import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 transition-all flex backdrop-blur-sm select-none">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between p-4 sm:p-0">
          <Link
            href="/"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <span className="text-xl font-bold sm:text-2xl">
              Guangran (<span className="text-[#1f88ff]">Ryan</span>) Tang
            </span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <div className="hidden md:flex item-center space-x-4">
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
                aria-label="link to scroll to contact form"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                <span className="font-semibold">Contact</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1h_hzE48wLgOJmjOZ5DFdQue6H177rW9o/view?usp=sharing"
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
