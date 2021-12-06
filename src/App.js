/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar.js";
import Main from "./components/main/Main.js";

import { useAppContext } from "../src/components/context/index";

function App() {
  const { profile, setProfileData, setRepos, setGists } =
    useAppContext();
  async function getGithubProfile() {
   
    try{
      const prof = await fetch(`https://api.github.com/users/${profile}`);
      const profileJson = await prof.json();
      setProfileData(profileJson);

      const repositories = await fetch(profileJson.repos_url);
      const repos = await repositories.json();
      setRepos(repos);
      
      const gists= await fetch(`https://api.github.com/users/${profile}/gists`);
      const user_gists = await gists.json();
      setGists(user_gists);
    } catch (err) {
      console.log(err);
    } 
  }
  useEffect(() => {
    getGithubProfile();
    window.scrollTo(0,0)
    }, []);

  return (
    <div className="App">
      
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
