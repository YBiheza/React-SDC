import { useState, useEffect } from 'react';
import type { TMeals } from '../components/Menu/TMeals';

function useFetch(url: string, options?: RequestInit) {
  const [meals, setMeals] = useState<TMeals[] | null>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  function logRequest(logObj: Record<string, unknown>) {
    const existingLogs = JSON.parse(localStorage.getItem('api_logs') || '[]');
    const newLogs = [...existingLogs, logObj];
    localStorage.setItem('api_logs', JSON.stringify(newLogs));
  }

  useEffect(() => {
    setError(null);
    setLoading(true);

    async function fetchMeals() {
      const payload = options?.body || null;

      try {
        const response = await fetch(url, options);

        logRequest({
          time: new Date().toISOString(),
          url,
          payload,
          status: response.status,
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }

        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError('unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, []);
  return [meals, loading, error];
}

export default useFetch;
