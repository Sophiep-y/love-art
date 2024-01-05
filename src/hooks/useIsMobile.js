import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
