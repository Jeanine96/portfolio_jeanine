import Link from "next/link";
import PulsingIcon from "./PulsingIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="h-screen bg-primary px-[20] md:px-[92] pb-16"
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-col h-full">
        <div className="flex flex-col justify-center grow gap-6">
          <p className="text-text-three text-fontsize-body">
            HEEFT U EEN PASSENDE STAGEOPDRACHT?
          </p>
          <div className="flex flex-row gap-16">
            <h1 className="text-text-two text-fontsize-h1 font-h1">
              LET'S TALK
            </h1>
            <Link target="_blank" href={"mailto:j.deregter@student.fontys.nl"}>
              <PulsingIcon
                iconName="mail"
                size="!text-fontsize-h1"
                pulseAmount={0.3}
                className="text-text-two mt-6"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <hr className="border-t border-tertiary my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="text-text-two text-fontsize-body font-body">
              © Jeanine de Regter 2025
            </p>
            <div className="flex flex-row gap-8">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/jeanine-de-regter-683638144/"
                }
              >
                <FaLinkedin className="w-12 h-12 text-text-two hover:scale-110" />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/Jeanine96?tab=repositories"}
              >
                <FaGithub className="w-12 h-12 text-text-two hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col h-full md:hidden">
        <div className="flex flex-col justify-center items-center grow gap-6">
          <p className="text-text-three text-fontsize-body-mobile font-body">
            HEEFT U EEN PASSENDE STAGEOPDRACHT?
          </p>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-text-two text-fontsize-h1-mobile">
              LET'S TALK
            </h1>
            <Link target="_blank" href={"mailto:j.deregter@student.fontys.nl"}>
              <PulsingIcon
                iconName="mail"
                size="!text-fontsize-h1"
                pulseAmount={0.3}
                className="text-text-two mt-6"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <hr className="border-t border-tertiary my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="text-text-two text-fontsize-body font-body">
              © Jeanine de Regter 2025
            </p>
            <div className="flex flex-row gap-8">
               <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/jeanine-de-regter-683638144/"
                }
              >
                <FaLinkedin className="w-12 h-12 text-text-two" />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/Jeanine96?tab=repositories"}
              >
                <FaGithub className="w-12 h-12 text-text-two" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
