import LogoIcon from "../../assets/images/logo/flower.webp";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DropdownSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownMessage from "./DropdownMessage";
import LogoImage from "../LogoImage";
import SearhForm from "./SearchForm";
import NavbarMobile from "./NavbarMobile";
const Header = (props) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <NavbarMobile props={props} />
          <LogoImage
            image={LogoIcon}
            alt="Logo"
            className={`block w-12 h-12 flex-shrink-0 lg:hidden`}
            url="/"
          />
        </div>

        <div className="hidden sm:block">
          <SearhForm />
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
          </ul>
          {/* <!-- User Area --> */}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};
export default Header;
