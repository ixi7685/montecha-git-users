import Header from "./Header/Header.js";
import UserContent from "./UserContent/UserContent.js";
import GitUsersSearch from "./GitUsersSearch/GitUsersSearch.js";
import "./Sidebar.css";

import { useAppContext } from "../context";

const Sidebar = (props) => {
  const { isSidebarOpen } = useAppContext();

  return (
    <div className="sidebar">
      <Header />
      <UserContent />
      {isSidebarOpen && <GitUsersSearch />}
    </div>
  );
};

export default Sidebar;
