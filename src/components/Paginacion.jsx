import React from "react";

function Paginacion({ prev, next, onPrev, onNext }) {
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <nav>
      <ul className="pagination gap-2 d-md-flex justify-content-center">
        <li className="page-item">
          <button className="btn btn-dark" onClick={handlePrev}>
            Prev
          </button>
        </li>
        <li className="page-item">
          <button className="btn btn-dark" onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginacion;
