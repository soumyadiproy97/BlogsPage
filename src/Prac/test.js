const test = () => {
    operation()
        .then(() => console.log('OP1'))
            .then(() => console.log('OP2'))
                .then(() => {
                    operation2()
                        .then(() => console.log('OP3'))
                })
                .catch()
            .catch()                
        .catch()
}
//-----------------------------------------------------------
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("vould not fetch data fr the resource");
          }
          return res.json();
        })
        .then((data) => {
          setPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch abourt");
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, error, isPending };
};
export default useFetch;
