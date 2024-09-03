import React from "react";
import "./App.css";
import { ShowUserName } from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";
import CarDetails from "./components/cars/CarDetails";

function App() {
  const users = [
    { id: 1, nome: "Ricardo", idade: 30, profissao: "Cozinheiro" },
    { id: 2, nome: "Ana", idade: 27, profissao: "Designer Gráfico" },
    { id: 3, nome: "Carlos", idade: 35, profissao: "Engenheiro" },
    { id: 4, nome: "Beatriz", idade: 22, profissao: "Estudante" },
    { id: 5, nome: "Lucas", idade: 28, profissao: "Médico" },
    { id: 6, nome: "Juliana", idade: 31, profissao: "Professora" },
    { id: 7, nome: "Miguel", idade: 40, profissao: "Advogado" },
    { id: 8, nome: "Fernanda", idade: 29, profissao: "Arquiteta" },
    { id: 9, nome: "Pedro", idade: 33, profissao: "Desenvolvedor de Software" },
    { id: 10, nome: "Mariana", idade: 26, profissao: "Jornalista" },
  ];
  const cars = [
    { id: 100, marca: "Audi", km: 4000, cor: "azul", ano: 2024 },
    { id: 101, marca: "BMW", km: 15000, cor: "preto", ano: 2023 },
    { id: 102, marca: "Mercedes", km: 8000, cor: "branco", ano: 2022 },
    { id: 103, marca: "Volkswagen", km: 12000, cor: "vermelho", ano: 2021 },
    { id: 104, marca: "Ford", km: 22000, cor: "prata", ano: 2020 },
    { id: 105, marca: "Chevrolet", km: 5000, cor: "cinza", ano: 2024 },
    { id: 106, marca: "Honda", km: 30000, cor: "azul escuro", ano: 2019 },
    { id: 107, marca: "Toyota", km: 7000, cor: "verde", ano: 2023 },
    { id: 108, marca: "Hyundai", km: 18000, cor: "bege", ano: 2022 },
    { id: 109, marca: "Nissan", km: 4000, cor: "laranja", ano: 2024 },
  ];

  return (
    <>
      <div>
        <ShowUserName name="Ricardo" />
        {users.map((users) => (
          <UserDetails
            key={users.id}
            nome={users.nome}
            idade={users.idade}
            profissao={users.profissao}
          />
        ))}
        {cars.map((cars) => (
          <CarDetails
            key={cars.id}
            marca={cars.marca}
            km={cars.km}
            cor={cars.cor}
            ano={cars.ano}
          />
        ))}
      </div>
    </>
  );
}

export default App;
