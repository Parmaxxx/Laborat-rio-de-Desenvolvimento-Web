import React from "react";

const CarDetails = (marca, km, cor, ano) => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <div className="card-header">Carro</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Marca : {marca}</li>
          <li className="list-group-item">Quilometragem : {km} Km</li>
          <li className="list-group-item">Cor : {cor}</li>
          <li className="list-group-item">Ano : {ano}</li>
          {ano == 2024 ? (
            <li className="list-group-item">Carro Novo</li>
          ) : (
            <li className="list-group-item">Carro Usado</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CarDetails;
