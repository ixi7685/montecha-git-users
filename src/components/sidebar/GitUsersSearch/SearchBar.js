/* eslint-disable */
import { useState, useEffect } from "react";
import { useAppContext } from "../../context";
import { FaGithub } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setAvailableProfiles } = useAppContext();

  const fetchResult = async () => {
    if (searchText === "") {
      return;
    }
     try{
      let req = await fetch(`https://api.github.com/users/${searchText}`);
      let profileJson = await req.json();
      setAvailableProfiles(profileJson.login);
     } catch(err){
        console.log(err);
     }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResult();
    }, 800);
    
    return () => clearTimeout(timer);
  });

  return (
    <div className="user_search__search_bar">
      <div className="user_search__search_bar__search_box">
        <div className="size">
          <FaGithub color="white" fontSize="2em" />
        </div>
        <input
          type="text"
          onInput={(e) => setSearchText(e.target.value.trim())}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
