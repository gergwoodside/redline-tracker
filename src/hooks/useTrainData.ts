import { useState, useEffect } from "react";
import xmlJs from "xml-js";


const useTrainData = (mapid: string) => {
  const [data, setXmlData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `/api/1.0/ttarrivals.aspx?key=805a2a41b4a944129c9146605d4d5d3d&mapid=${mapid}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((xmlText) => {
        const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
        setXmlData(JSON.parse(jsonData));
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(new Error(error instanceof Error ? error.message : "Unknown error occurred"));
        setLoading(false);
      });
  }, [mapid]);

  return { data, loading, error };
};

export default useTrainData;
