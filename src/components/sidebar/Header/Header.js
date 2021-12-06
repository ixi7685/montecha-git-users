import "./Header.css";
import { BiSearch } from 'react-icons/bi';
import { useAppContext } from "../../context";

const Header = () => {
  const { setSidebar } = useAppContext();
  const openSidebar = () => {
    setSidebar(true);
  };

  return (
   <div className="sidebar_header">
    <button onClick={openSidebar} className="sidebar_header__search_btn">
      <span>Search for users</span>
      <BiSearch color="white" fontSize="1.5em" />
    </button>
   </div>
      
    
  );
};

export default Header;