import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import MascotaCard from "./components/MascotaCard";
export default function App() {
const [mascotas, setMascotas] = useState([
  {
    id: 1,
    nombre: "Firulais",
    especie: "Perro",
    edad: 5,
    propietario: "",
    vacunada: true
  },
  {
    id: 2,
    nombre: "Michi",
    especie: "Gato",
    edad: 3,
    propietario: "",
    vacunada: false
  },
  {
    id: 3,
    nombre: "Luna",
    especie: "Gato",
    edad: 4,
    propietario: "",
    vacunada: true
  }
]);
const [nombre, setNombre] = useState("");
const [especie, setEspecie] = useState("Perro");
const [edad, setEdad] = useState("");
const [propietario, setPropietario] = useState("");

const totalPerros = mascotas.filter(
  mascota => mascota.especie === "Perro"
).length;
const totalGatos = mascotas.filter(
  mascota => mascota.especie === "Gato"
).length;
function registrarMascota(event) {
  event.preventDefault();
if (nombre.trim() === "" || edad === "") {
  alert("Completa todos los campos");
  return;
}
const nuevaMascota = {
  id: Date.now(),
  nombre: nombre.trim(),
  especie: especie,
  edad: Number(edad),
  propietario: propietario.trim(),
  vacunada: false
};
setMascotas([...mascotas, nuevaMascota]);
setNombre("");
setEspecie("Perro");
setEdad("");
setPropietario("");
}
return (
<div className="app">
  <Header />
  <main className="contenedor">
    <section className="grid-estadisticas">
      <StatCard
      titulo="Mascotas registradas"
      valor={mascotas.length}
      />
      <StatCard
      titulo="Perros"
      valor={totalPerros}
      />
      <StatCard
      titulo="Gatos"
      valor={totalGatos}
      />
      </section>
      <form
      className="formulario"
      onSubmit={registrarMascota}
      >
        <h2>Registrar mascota</h2>
        <div className="formulario-grid">
          <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) =>
            setNombre(event.target.value)
            }
            />
            <select
            value={especie}
            onChange={(event) =>
              setEspecie(event.target.value)
              }
              >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                </select>
                <input
                type="number"
                min="0"
                placeholder="Edad"
                value={edad}
                onChange={(event) =>
                  setEdad(event.target.value)
                  }
                  />
                  
                  <input
                  type= "text"
                  placeholder="Propietario"
                  value={propietario}
                  onChange={(event) =>
                    setPropietario(event.target.value)
                  }
                  ></input>


                  <button type="submit">
                    Registrar
                    </button>
                    </div>
                    </form>
                    <section>
                      <h2>Mascotas</h2>
                    <div className="grid-mascotas">
                      {mascotas.map((mascota) => (
                        <MascotaCard
                        key={mascota.id}
                        nombre={mascota.nombre}
                        especie={mascota.especie}
                        edad={mascota.edad}
                        propietario={mascota.propietario}
                        vacunada={mascota.vacunada}
                        />
                        ))}
                        </div>
                        </section>
                        </main>
                        </div>
                        );
                  




                      }