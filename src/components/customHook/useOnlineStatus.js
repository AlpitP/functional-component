import { useDebugValue, useEffect, useState } from "react";

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    useDebugValue(isOnline ? 'Online' : 'Offline')
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
        }
    }, [])
    return isOnline;
}
export default useOnlineStatus;