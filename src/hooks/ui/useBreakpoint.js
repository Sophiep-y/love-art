import {useEffect, useState} from 'react';
import Sizes from "../../../../../../../Downloads/utils/break-points";

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('');

    useEffect(() => {
        const calculateBreakpoint = () => {
            const width = window.innerWidth;
            if (width <= 767) {
                setBreakpoint(Sizes.Small);
            } else if (width > 767 && width <= 992) {
                setBreakpoint(Sizes.Medium);
            } else if (width > 992 && width <= 1200) {
                setBreakpoint(Sizes.Large);
            } else if (width > 1200 && width <= 1400) {
                setBreakpoint(Sizes.ExtraLarge);
            } else {
                setBreakpoint(Sizes.ExtraExtraLarge);
            }
        };

        calculateBreakpoint();
        window.addEventListener('resize', calculateBreakpoint);

        return () => {
            window.removeEventListener('resize', calculateBreakpoint);
        };
    }, []);

    return breakpoint;
};

export default useBreakpoint;