import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="  text-center p-6">
      <p className="text-lg font-semibold">
  &copy; {new Date().getFullYear()} Created by <span>Ashutosh Rathod</span>
</p>
<p className="text-sm">
  Designed & developed by <span>Ashutosh Rathod</span>.
</p>
    {/* Navigation Links */}
      <div className="flex justify-center gap-6 mt-4 text-lg ">
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/skills" className="hover:text-blue-600">Skills</Link>
        <Link to="/projects" className="hover:text-blue-600">Projects</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/ashutoshrathod"
          target="_blank"
          rel="noopener noreferrer" //Prevent tabnabbing (safe external link)
          className="hover:text-blue-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7.5 0h4v2c.6-.9 1.71-2 3.5-2 3.13 0 3.71 2.06 3.71 4.74V20h-4v-6.42c0-1.53-.03-3.51-2.14-3.51-2.14 0-2.46 1.67-2.46 3.39V20h-4V8z"/>
          </svg>
        </a>

        <a
          href="https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH"
          target="_blank"
          rel="noopener noreferrer" //Prevent tabnabbing (safe external link)
          className="hover:text-gray-400 transition duration-300"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.8c.85 0 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.69.92.69 1.86v2.75c0 .27.18.59.69.49A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
