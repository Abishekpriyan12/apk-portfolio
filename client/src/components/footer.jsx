import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white px-8 py-10 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-black rounded-b-[50%] -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Side: Title */}
        <div className="font-bold text-3xl tracking-wider leading-tight">
          <span className="block">GET IN</span>
          <span className="block">TOUCH<span className="text-red-600">.</span></span>
        </div>

        {/* Right Side: Contact Info */}
        <div className="text-sm">
          <p className="font-semibold text-gray-300 uppercase mb-2">Contact Me</p>

          <div className="flex items-center gap-3 mb-2 text-white">
            <FaEnvelope className="text-red-600" />
            <a href="mailto:abishekpriyan11@gmail.com" className="hover:underline">
              abishekpriyan11@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-white">
            <FaPhoneAlt className="text-red-600" />
            <span>548 398 0430</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
