
import React, { useState, useMemo } from "react";
import "../Styles/Cate.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([
{ nombre: "E" },
    { nombre: "A" },
    { nombre: " C" },
    { nombre: "D" },
    { nombre: "J" },
    { nombre: "K" },
    { nombre: "Electrónica" },
    { nombre: "Ropa" },
    { nombre: "Hogar" },
    { nombre: "Deportes" },
  ]);

  const handleCategoriaSeleccionada = (categoria) => {
    setCategorias((prevCategorias) =>
      prevCategorias.map((c) =>
        c.nombre === categoria ? { ...c, seleccionada: !c.seleccionada } : c
      )
    );
  };

  const categoriasMemo = useMemo(() => categorias, [categorias]);

  return (
    <div className="Categorias">
      <h1>Categorías</h1>

      <div className="categorias-container">
        <div className="categoria-item">
          {categoriasMemo.map((categoria) => (
            <div
              key={categoria.nombre}
              className={`categoria ${
                categoria.seleccionada ? "categoria-seleccionada" : ""
              }`}
              onClick={() => handleCategoriaSeleccionada(categoria.nombre)}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={categoria.seleccionada}
                  readOnly
                />
                {categoria.nombre}
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Categorias;
