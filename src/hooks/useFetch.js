import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
}, [url]);

  return { data };
}
