import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 backdrop-blur-sm transition-all flex h-[10vh] overflow-hidden">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}>
            <span className="font-bold text-2xl">Guangran (<span className="text-[#1F51FF]">Ryan</span>) Tang</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <>
              <a
                href="/#About"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                About
              </a>
              <a
                href="/#Projects"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                Projects
              </a>
              <a
                href="/"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                Contact
              </a>
              <a
                href="/"
                className={buttonVariants({
                  size: "sm",
                  variant: "outline",
                })}
              >
                Resume
              </a>
              {/* Light and Dark mode toggle button goes here */}
              <ThemeToggle />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
