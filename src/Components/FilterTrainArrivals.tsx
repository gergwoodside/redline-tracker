import React, { useState } from "react";

interface Props {
  routes: { name: string; id: number }[];
  onSelectRoute: (routeId: number) => void;
}

const FilterTrainArrivals: React.FC<Props> = ({ routes, onSelectRoute }) => {
  const [selectedRoute, setSelectedRoute] = useState<number>(routes[0].id);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedRoute(selectedId);
    onSelectRoute(selectedId);
  };

  return (
    <div>
      <label htmlFor="routeSelect">Select Route:</label>
      <select
        id="routeSelect"
        value={selectedRoute}
        onChange={handleSelectChange}
      >
        {routes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTrainArrivals;
