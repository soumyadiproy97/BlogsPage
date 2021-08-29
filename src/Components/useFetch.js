// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isPending, setPending] = useState(true);

//   useEffect(() => {
//     const abortCont = new AbortController();
//     setTimeout(() => {
//       fetch(url, { signal: abortCont.signal })
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("vould not fetch data fr the resource");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setPending(false);
//           setData(data);
//           setError(null);
//         })
//         .catch((err) => {
//           if (err.name === "AbortError") {
//             console.log("fetch abourt");
//           } else {
//             setPending(false);
//             setError(err.message);
//           }
//         });
//     }, 1000);
//     return () => abortCont.abort();
//   }, [url]);
//   return { data, error, isPending };
// };
// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      const fetchAsync = async () => {
        try {
          const res = await fetch(url, { signal: abortCont.signal });
          if (!res.ok) {
            throw Error("vould not fetch data fr the resource");
          }
          const data = await res.json();
          setPending(false);
          setData(data);
          setError(null);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("fetch abourt");
          } else {
            setPending(false);
            setError(err.message);
            console.log(err.message)
          }
        }
      };

      fetchAsync();
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, error, isPending };
};

export default useFetch;
