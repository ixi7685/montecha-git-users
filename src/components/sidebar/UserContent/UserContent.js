import "./UserContent.css";
import { DiGithubFull } from "react-icons/di";
import { GoLocation } from "react-icons/go";
import { BiBuilding } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useAppContext } from "../../context";

const UserContent = () => {
  const { profileData } = useAppContext();
  return (
    <div className="sidebar__body">
      <div>
        <div className="sidebar__body__logo">
          <DiGithubFull color="#e7e7eb" fontSize="5em" />
        </div>
        <div className="sidebar_user_image">
          <img
            className="image"
            src={profileData.avatar_url}
            alt="BigCo Inc. logo"
          />
        </div>

        <div className="sidebar_user_info">
          <div className="flex">
            <FaGithub color="white" fontSize="2em" />
            <span className="left">{profileData.login}</span>
          </div>

          <div className="flex">
            <GoPerson color="white" fontSize="2em" />
            
            {profileData.name !== null ? (
              <span className="left">{profileData.name}</span>
            ) : (
              <span className="left">Name is not added</span>
            )}
          </div>

          <div className="flex">
            <BiBuilding color="#e7e7eb" fontSize="2em" />

            {profileData.company !== null ? (
              <span className="left">{profileData.company}</span>
            ) : (
              <span className="left">Company is not added</span>
            )}
          </div>
          <div className="flex">
          <span>
          <GoLocation color="#a09fb1" fontSize="2em" />
        </span>
        {profileData.location !== null ? (
          <span>{profileData.location}</span>
        ) : (
          <span>Location is not added</span>
        )}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default UserContent;
