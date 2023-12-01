
import React, { useState } from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Row>
          {filteredList.map((beast) => (

            <Col key={beast._id} className="gallery-col">
              <HornedBeast {...beast} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default Gallery;
