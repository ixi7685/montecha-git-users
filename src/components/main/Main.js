import "./Main.css";
import { FaGithub } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import RepoCard from "./RepoCard";
import { useEffect } from "react";

import { useAppContext } from "../context";

const Main = () => {
  const { profileData, repos, gists } = useAppContext();

  useEffect(() => {
    document.querySelector(".main").scrollTop = 0;
  });

  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__height flex bio">{profileData.bio}</div>
        <div className="main__height flex">
          <GoPerson color="white" fontSize="2em" />
          <span>Followers : {profileData.followers}</span>
          <span> Following : {profileData.following}</span>
        </div>
        <div className=" main__height flex">
          <FaGithub color="white" fontSize="2em" />
          <a href={profileData.html_url} rel="noreferrer" target="_blank">
            {profileData.html_url}
          </a>
        </div>

        {gists.length > 0 && (
          <div className="main__gist__repo__title">Gists</div>
        )}
        {gists.map((gist) => (
          <a
            className="gist"
            href={gist.html_url}
            key={gist.id}
            rel="noreferrer"
            target="_blank"
          >
            {gist.html_url}
          </a>
        ))}

        {repos.length > 0 && (
          <div className="main__gist__repo__title">Repositories</div>
        )}
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
