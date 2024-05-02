import Logo from "../../assets/images/logo/flower.webp";
import SvgImage from "../../common/SvgImage";
import LogoImage from "../LogoImage";
const TopHeader = ({ trigger, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-4 lg:py-5">
      <div className="flex items-center">
        <LogoImage image={Logo} alt="Healthy App" className={`h-12 w-12`}>
          <h1 className="ml-5 text-white">Healthy App</h1>
        </LogoImage>
      </div>

      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <SvgImage name="burger" />
      </button>
    </div>
  );
};

export default TopHeader;
