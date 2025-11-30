import { useState, useEffect } from "react";

function useFetch (url, options) { 
    const [meals, setMeals] = useState([]); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);

    function logRequest(logObj) {
        const existingLogs = JSON.parse(localStorage.getItem("api_logs")) || [];
        const newLogs = [...existingLogs, logObj];
        localStorage.setItem("api_logs", JSON.stringify(newLogs));
  }

    useEffect(() => {
        setError(null);
        setLoading(true);
        async function fetchMeals() {
            const payload = options?.body || null;

            try {
                const response = await fetch (url, options)

                logRequest({
                    time: new Date().toISOString(),
                    url,
                    payload,
                    status: response.status
                });
                
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }

                const data = await response.json();
                setMeals(data);       
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        };
        fetchMeals();
    }, []);
    return [meals, loading, error];
};

export default useFetch;