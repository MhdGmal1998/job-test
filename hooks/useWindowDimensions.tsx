// Get size Of Window hook


import { useState, useEffect } from "react";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    // before useEffect the value 0, cuz the window object is undefined in next 
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });


    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        if (windowDimensions.width == 0) {
            handleResize()
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}