import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setIsLoading(false);
            setData(data);
        }

        fetchData();

       }, [url])

    return {
        data, isLoading
    }
}

export default useFetch;