import React, { useState } from "react";
import ShowTrainArrivals from "./Components/ShowTrainArrivals";
import FilterTrainArrivals from "./Components/FilterTrainArrivals";
import FilterTrain from "./Components/FilterTrain";

const App: React.FC = () => {
  const trains = [
    { name: "Howard", id: 40900 },
    { name: "Jarvis", id: 41190 },
    { name: "Morse", id: 40100 },
    { name: "Loyola", id: 41300 },
    { name: "Granville", id: 40760 },
    { name: "Thorndale", id: 40880 },
    { name: "Bryn Mawr", id: 41380 },
    { name: "Berwyn", id: 40340 },
    { name: "Argyle", id: 41200 },
    { name: "Lawrence", id: 40770 },
    { name: "Wilson", id: 40540 },
    { name: "Sheridan", id: 40080 },
    { name: "Addison", id: 41420 },
    { name: "Belmont", id: 41320 },
    { name: "Fullerton", id: 41220 },
    { name: "North/Clybourne", id: 40650 },
    { name: "Clark/Divison", id: 40630 },
    { name: "Chicago", id: 41450 },
    { name: "Grand", id: 40330 },
    { name: "Lake", id: 41660 },
    { name: "Monroe", id: 41090 },
    { name: "Jackson", id: 40560 },
    { name: "Harrison", id: 41490 },
    { name: "Roosevelt", id: 41400 },
    { name: "Cermak-Chinatown", id: 41000 },
    { name: "Sox-35th", id: 40190 },
    { name: "47th", id: 41230 },
    { name: "Garfield", id: 41170 },
    { name: "63rd", id: 40910 },
    { name: "69th", id: 40990 },
    { name: "79th", id: 40240 },
    { name: "87th", id: 41430 },
    { name: "95th/Dan Ryan", id: 40450 },
  ];

  const routes = [
    { name: "Outbound", id: 1 },
    { name: "Inbound", id: 5 },
  ];
  const [selectedRoute, setSelectedRoute] = useState<number>(routes[0].id);
  const [selectedTrain, setSelectedTrain] = useState<number>(trains[0].id);

  const handleRouteSelect = (routeId: number) => {
    setSelectedRoute(routeId);
  };

  const handleTrainSelect = (trainId: number) => {
    setSelectedTrain(trainId);
  };

  return (
    <>
      <ShowTrainArrivals
        mapId={selectedTrain.toString()}
        selectedRoute={selectedRoute}
        selectedTrain={selectedTrain}
      />
      <FilterTrainArrivals routes={routes} onSelectRoute={handleRouteSelect} />
      <FilterTrain trains={trains} onSelectTrain={handleTrainSelect} />
    </>
  );
};

export default App;
