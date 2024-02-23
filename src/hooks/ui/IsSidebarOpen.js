import React, {createContext, useContext, useEffect, useState} from 'react';

// Create a context for the sidebar state
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1300);


    // Function to handle window resize
    const handleResize = () => {
        console.log('window.innerWidth', window.innerWidth);
        setIsSidebarOpen(window.innerWidth > 1300);
    };

    // Add event listener on component mount and remove on unmount
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
            {children}
        </SidebarContext.Provider>
    );
};

// Create the custom hook
export const useIsSidebarOpen = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error('useIsSidebarOpen must be used within a SidebarProvider');
    }

    return context;
};