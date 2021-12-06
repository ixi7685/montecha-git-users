import { useAppContext } from "../../context";
import SearchBar from "./SearchBar.js";
import { CgCloseO } from "react-icons/cg";
import Result from "./Result.js";
import "./GitUsersSearch.css";

const GitUsersSearch = () => {
  const {
    setSidebar,
    availableProfiles,
    setAvailableProfiles,
    setProfileData,
    setRepos,
    setGists,
  } = useAppContext();

  const closeSidebar = () => {
    setSidebar(false);
    setAvailableProfiles([]);
  };

  const setProfileAndGetProfileData = async (profile) => {
    try {
      const prof = await fetch(`https://api.github.com/users/${profile}`);
      const profileJson = await prof.json();
      setProfileData(profileJson);

      const repositories = await fetch(profileJson.repos_url);
      const repos = await repositories.json();
      setRepos(repos);

      const gists= await fetch(
        `https://api.github.com/users/${profile}/gists`
      );
      const user_gists= await gists.json();
      setGists(user_gists);
      
      closeSidebar();
      setAvailableProfiles([]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="user_search">
      <div className="user_search__header">
        <CgCloseO color="white" fontSize="2em" onClick={closeSidebar} />
      </div>
      <SearchBar />
      <Result
        title={availableProfiles}
        onClick={() => {
          setProfileAndGetProfileData(availableProfiles);
        }}
      />
    </div>
  );
};

export default GitUsersSearch;
