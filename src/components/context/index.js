import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const Context = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [profile, setProfile] = useState('ixi7685'); 
  const [availableProfiles, setAvailableProfiles] = useState([]); 
  const [profileData, setProfileData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [gists, setGists] = useState([]);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setSidebar,
        availableProfiles,
        setAvailableProfiles,
        profile,
        setProfile,
        repos,
        setRepos,
        profileData,
        setProfileData,
        gists,
        setGists
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
