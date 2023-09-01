import React from "react";

function Vehicle({ vehicles }) {
  return (
    <div className="vehicles-cont">
      <div className="vehicles-cont__list">
        {vehicles &&
          vehicles.map(
            (
              {
                name,
                model,
                cargo_capacity,
                cost_in_credits,
                crew,
                manufacturer,
                max_atmosphering_speed,
                vehicle_class,
              },
              index
            ) => (
              <div
                id="{model}-index"
                className="vehicles-cont__list-item"
                key={index}
              >
                <h1 className="vehicles-cont__list-item__h3">{name}</h1>
                <p className="vehicles-cont__list-item__p">Model: {model}</p>
                <p className="vehicles-cont__list-item__p">
                  Cargo capacity: {cargo_capacity}
                </p>
                <p className="vehicles-cont__list-item__p">
                  Cost in credits: {cost_in_credits}
                </p>
                <p className="vehicles-cont__list-item__p">Crew: {crew}</p>
                <p className="vehicles-cont__list-item__p">
                  Manufacturer: {manufacturer}
                </p>
                <p className="vehicles-cont__list-item__p">
                  Max atmosphering speed: {max_atmosphering_speed}
                </p>
                <p className="vehicles-cont__list-item__p">
                  Vehicle class: {vehicle_class}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default Vehicle;
