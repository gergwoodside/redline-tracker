import React, { useState } from "react";

interface Props {
  trains: { name: string; id: number }[];
  onSelectTrain: (routeId: number) => void;
}

const FilterTrain: React.FC<Props> = ({ trains, onSelectTrain }) => {
  const [selectedTrain, setSelectedTrain] = useState<number>(trains[0].id);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedTrain(selectedId);
    onSelectTrain(selectedId);
  };

  return (
    <div>
      <label htmlFor="routeSelect">Select Route:</label>
      <select
        id="routeSelect"
        value={selectedTrain}
        onChange={handleSelectChange}
      >
        {trains.map((train) => (
          <option key={train.id} value={train.id}>
            {train.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTrain;
