export const agregarCajas = (numCajas = 20) => {
  let newCajas = [];

  for (let i = 0; i < numCajas; i++) {
    newCajas[i] = {
      color: colorCaja(),
      numero: i,
    };
  }

  return newCajas;
};

const colorCaja = () =>
  `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
    Math.random() * 256
  )}, ${Math.round(Math.random() * 256)})`;
