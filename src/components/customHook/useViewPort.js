import { useEffect, useState } from "react";
export const MOBILE = 'MOBILE'
export const TABLET = 'TABLET'
export const DESKTOP = 'DESKTOP'

function getDevice(width) {
    if (width < 768) return MOBILE
    else if (width < 992) return TABLET
    else return DESKTOP
}

function useViewPort() {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        device: getDevice(window.innerWidth)
    })

    useEffect(() => {
        const handleResize = () =>
            setViewport({
                width: window.innerWidth,
                device: getDevice(window.innerWidth)
            })
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { viewport }
}
export default useViewPort;