import { useEffect, useRef } from "react";

function useDocumentTitle(defaultTitle) {
    const myDocumentRef = useRef(defaultTitle || document.title)
    useEffect(() => {
        document.title = myDocumentRef.current;

    }, [])
}
export default useDocumentTitle;