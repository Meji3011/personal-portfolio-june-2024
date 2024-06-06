import MaxWidthWrapper from "./MaxWidthWrapper";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative h-32 overflow-x:hidden">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200"></div>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mb-2 gap-4">
            <Button asChild variant="outline">
              <a
                href="https://www.linkedin.com/in/ryantanggr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 shrink-0 text-slate-500" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/Meji3011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 shrink-0 text-slate-500" />
              </a>
            </Button>
          </div>
          <div className="text-center pb-2 md:pb-0 text-md text-muted-foreground">
            Copyright Guangran Tang &copy; {new Date().getFullYear()} All rights
            reserved.
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
