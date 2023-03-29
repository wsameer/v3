import { useEffect, useState } from 'react';

/**
 * This hook returns whether the current viewport is a desktop or a mobile device.
 *
 * @example
 * ```
 *  const { isMobile } = useMobileDetect();
 * ```
 */

const MOBILE_MAX_WIDTH = 768;

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false),
        handleWindowSizeChange = () => {
            window.innerWidth <= MOBILE_MAX_WIDTH
                ? setIsMobile(true)
                : setIsMobile(false);
        };

    useEffect(() => {
        setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH ? true : false);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [setIsMobile]);

    return { isMobile };
};

export default useMobileDetect;
