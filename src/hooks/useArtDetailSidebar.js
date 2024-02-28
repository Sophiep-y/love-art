// useSidebar.js
import { useState } from "react";

const useArtDetailSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isUnCollapse, setIsUnCollapse] = useState(false);
  const [isNavigation, setIsNavigation] = useState(false);
  const [selectedArtForSidebar, setSelectedArtForSidebar] = useState(null);

  const toggleSidebar = ({ art }) => {
    console.log(art);

    if (art) {
      setSelectedArtForSidebar(art);
    }

    if (isNavigation) {
      setIsNavigation(false);
    } else {
      if (isUnCollapse) {
        setIsCollapsed(!isCollapsed);
        setTimeout(() => {
          setIsUnCollapse(!isUnCollapse);
        }, 300);
      } else {
        setIsUnCollapse(!isUnCollapse);
        setTimeout(() => {
          setIsCollapsed(!isCollapsed);
        }, 0);
      }
    }
  };

  return {
    isCollapsed,
    isUnCollapse,
    isNavigation,
    selectedArtForSidebar,
    toggleSidebar,
  };
};

export default useArtDetailSidebar;
