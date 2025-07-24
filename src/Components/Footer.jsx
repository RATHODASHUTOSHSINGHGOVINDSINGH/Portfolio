 import { Link } from "react-router";
import { IoLogoGithub } from "react-icons/io5";
 import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-center p-6">
      <p className="text-lg font-semibold">
        &copy; {new Date().getFullYear()} Created by <span>Ashutosh Rathod</span>
      </p>
      <p className="text-sm">
        Designed & developed by <span>Ashutosh Rathod</span>.
      </p>
      
      {/* Navigation Links */}
      <div className="flex justify-center gap-6 mt-4 text-lg">
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/skills" className="hover:text-blue-600">Skills</Link>
        <Link to="/projects" className="hover:text-blue-600">Projects</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ashutoshrathod"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
          aria-label="LinkedIn"
        >
           <FaLinkedinIn className="w-6 h-6" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
          aria-label="GitHub"
        >
           <IoLogoGithub className="w-6 h-6" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-blue-500 transition duration-300"
          aria-label="X (Twitter)"
        >
            <FaXTwitter className="w-6 h-6" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:your.email@gmail.com"
          className="hover:text-blue-500 transition duration-300"
          aria-label="Gmail"
        >
           <SiGmail className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;