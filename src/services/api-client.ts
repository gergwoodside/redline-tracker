import { useState, useEffect } from "react";
import xmlJs from "xml-js";



const useData = (mapid: string) => {
    const [xmlData, setXmlData] = useState(null);
    useEffect(() => {
        fetch(
          `/api/1.0/ttarrivals.aspx?key=805a2a41b4a944129c9146605d4d5d3d&mapid=${mapid}`
        )
          .then((response) => response.text())
          .then((xmlText) => {
            const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
            setXmlData(JSON.parse(jsonData));
          })
          .catch((error) => {
            console.error("Error fetching XML data:", error);
          });
      }, []);

  return xmlData
}

export default useData



