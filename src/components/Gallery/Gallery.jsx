import React, { useState } from "react";
import HornedBeast from "./HornedBeast";

function Gallery({ list }) {
  const [filterHorns, setFilterHorns] = useState(null);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterHorns(value !== "" ? parseInt(value, 10) : null);
  };

  const filteredList = filterHorns
    ? list.filter((beast) => beast.horns === filterHorns)
    : list;

  return (
    <div className="gallery">
      <label>
        Filter by Horns:
        <input
          type="number"
          value={filterHorns || ""}
          onChange={handleFilterChange}
          min="1"
        />
      </label>
      {filteredList.map((beast) => (
        <HornedBeast key={beast._id} {...beast} />
      ))}
    </div>
  );
}

export default Gallery;
