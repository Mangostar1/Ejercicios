import React, { useEffect, useState } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(false);
        fetch(url)
            .then((response) => response.json)
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(true))
    }, []);

    return {data, isLoading, error}

}