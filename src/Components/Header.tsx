import { MdDarkMode, MdLightMode } from "react-icons/md";
import useTheme from "../Hooks/useTheme";
import useChangebyTheme from "../Hooks/useChangebyTheme";

const Header = () => {
  const { handleClick } = useTheme();
  return (
    <div className={`w-full flex justify-between p-5 z-50`}>
      <div>
        <a href="/" className={`text-2xl  font-bold `}>
          FakeStroe
        </a>
      </div>
      <div className={`flex items-center gap-4`}>
        <a href="#profile">Profile</a>
        <a href="#Logout">Logout</a>
        <i className="cursor-pointer" onClick={handleClick}>
          {useChangebyTheme(<MdLightMode />, <MdDarkMode />)}
        </i>
      </div>
    </div>
  );
};

export default Header;
