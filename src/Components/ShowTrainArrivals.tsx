import useTrainData from "../hooks/useTrainData";
import { XmlData, Arrival } from "../types";
import moment from "moment";

interface Props {
  mapId: string;
  selectedRoute: number;
  selectedTrain: number;
}

const ShowTrainArrivals = ({ mapId, selectedRoute }: Props) => {
  const { data, loading, error } = useTrainData(mapId);

  // Check if data is loading or there's an error
  if (loading) {
    return <p>Loading XML data...</p>;
  }

  if (error || !data) {
    return (
      <p>Error fetching XML data: {error ? error.message : "Unknown error"}</p>
    );
  }

  // Type assertion to tell TypeScript that data is not null or undefined
  const trainData = data as XmlData;

  // Transform the data into an array of objects with arrival time and destination name
  const arrivals = trainData.ctatt.eta
    .map((arrival: Arrival) => {
      const parsedTime = moment(arrival.arrT._text, "YYYYMMDD HH:mm:ss");
      const arrivalTime = parsedTime.format("LT");
      const fromNow = parsedTime.fromNow();
      const formattedFromNow =
        fromNow.includes("minutes") || fromNow.includes("hour")
          ? fromNow
          : "Due";

      return {
        arrivalTime,
        arrivalStatus: formattedFromNow,
        destinationName: arrival.destNm._text,
        destinationCode: arrival.trDr._text,
        lineName: arrival.rt._text,
      };
    })
    .filter((arrival) => arrival.destinationCode === selectedRoute.toString());

  return (
    <div className="container">
      <h1>Arrival Times:</h1>
      <ul>
        {arrivals.map((arrival, index) => (
          <li key={index}>
            ({arrival.lineName}) {arrival.destinationName} -{" "}
            {arrival.arrivalStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTrainArrivals;
