// ======= src/components/Navbar.jsx =======
import { Link } from 'react-router-dom';
import logo from './../assets/images/LOGO-VECTOR.png'

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg  px-8 py-3 rounded-full flex items-center gap-8 text-sm text-[#FE4F2D] font-semibold shadow-xl">
      <div className="text-xl font-black text-[#FE4F2D] mr-2 tracking-wider drop-shadow">
        <img className="h-12 w-auto object-contain" src={logo} alt="" />
      </div>
      <div className="font-['Minecraft'] text-xs tracking-normal flex gap-6">
        <Link to="/" className="hover:text-white transition duration-300">HOME</Link>
        <Link to="/projects" className="hover:text-white transition duration-300">PROJECTS</Link>
        <Link to="/resume" className="hover:text-white transition duration-300">RESUME</Link>
        <Link to="/contact" className="hover:text-white transition duration-300">CONTACT ME</Link>
      </div>
    </nav>
  );
};

export default Navbar;
