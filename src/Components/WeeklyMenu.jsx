import React, { useState } from 'react';
import { Week } from './Week';
import { LunchList } from './LunchList';
import { DinnerList } from './DinnerList';
import { BotonGenerarMenu, DivAlmuerzos, DivCenas, DivGenerarMenu, DivTabla, Parrafo } from './Styled';

export const WeeklyMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [almuerzos, setAlmuerzos] = useState([...LunchList]);
  const [cenas, setCenas] = useState([...DinnerList]);
  const [showRecipe, setShowRecipe] = useState(null);

  const handleOnClick = () => {
    setIsActive(isActive + 1);
  }

  const Aleatorio = (food) => {
    return [...food]
      .sort(() => Math.random() > 0.5 ? 1 : -1)
      .slice(0, 7);
  }

  const guardarAlmuerzoDia = (index) => {
    const nuevosAlmuerzos = [...almuerzos];
    nuevosAlmuerzos[index] = Aleatorio(LunchList)[index];
    setAlmuerzos(nuevosAlmuerzos);
  }

  const dinnerAleatorio = (dinner) => {
    return [...dinner]
      .sort(() => Math.random() > 0.5 ? 1 : -1)
      .slice(0, 7);
  }

  const guardarCenaDia = (index) => {
    const nuevasCenas = [...cenas];
    nuevasCenas[index] = dinnerAleatorio(DinnerList)[index];
    setCenas(nuevasCenas);
  }

  const mostrarReceta = (recipe) => {
    setShowRecipe(recipe);
  }

  return (
    <>
      <DivGenerarMenu>
        <BotonGenerarMenu onClick={handleOnClick}>Generar Menu</BotonGenerarMenu>
      </DivGenerarMenu>
      <DivTabla>
        <DivAlmuerzos>
          <h1>Almuerzos</h1>
          {Week.map(({ dia }, index) => {
            return (
              <div key={index}>
                {isActive && <h3>{dia}: </h3>}

                {isActive && <Parrafo>{almuerzos[index].food}</Parrafo>}
                {isActive && <button onClick={() => guardarAlmuerzoDia(index)}>Cambiar solo este menu</button>}
                {isActive && <button onClick={() => mostrarReceta(almuerzos[index].recipe)}>Receta para 2 personas</button>}
                {showRecipe === almuerzos[index].recipe && <p>{almuerzos[index].recipe}</p>}
              </div>
            )
          })}
        </DivAlmuerzos>
        <DivCenas>
          <h1>Cenas</h1>
          {Week.map(({ dia }, index) => {
            return (
              <div key={index}>
                {isActive && <h3>{dia}: </h3>}

                {isActive && <Parrafo>{cenas[index].dinner}</Parrafo>}
                {isActive && <button onClick={() => guardarCenaDia(index)}>Cambiar solo este menú</button>}
                {isActive && <button onClick={() => mostrarReceta(cenas[index].recipe)}>Receta para 2 personas</button>}
                {showRecipe === cenas[index].recipe && <p>{cenas[index].recipe}</p>}
              </div>
            )
          })}
        </DivCenas>

      </DivTabla>
    </>
  )
}