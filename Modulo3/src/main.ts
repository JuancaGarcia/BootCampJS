import { boolean } from "yargs";
import "./style.css";

console.log("Modulo 3 - Variables!");

const estiloTitulo = " background-color: green ; font-size:24pxclear"; //font-weight : bold

interface Grupo {
  nombreGrupo: String;
  anoFundacion: number;
  estado: boolean;
  genero: string;
}

const grupoA: Grupo = {
  nombreGrupo: "The Beatles",
  anoFundacion: 1960,
  estado: true,
  genero: "🎵 Pop Rock",
};

const grupoB: Grupo = {
  nombreGrupo: "Queen",
  anoFundacion: 1970,
  estado: false,
  genero: "🎸 Rock",
};

const grupoC: Grupo = {
  nombreGrupo: "AC DC",
  anoFundacion: 1973,
  estado: true,
  genero: "🤘 Hard Rock",
};

const grupoD: Grupo = {
  nombreGrupo: "Ludwig van Beethoven",
  anoFundacion: 1770,
  estado: false,
  genero: "🎼 Clásica",
};

const grupoE: Grupo = {
  nombreGrupo: "The Rolling Stones",
  anoFundacion: 1962,
  estado: true,
  genero: "🎸 Rock",
};

console.log(` %cGrupo: ${grupoA.nombreGrupo}`, estiloTitulo);
console.log(
  `Fundando en: ${grupoA.anoFundacion} / Activo: ${grupoA.estado} / genero musical: ${grupoA.genero}  `
);

console.log(` %cGrupo: ${grupoB.nombreGrupo}`, estiloTitulo);
console.log(
  `Fundando en: ${grupoB.anoFundacion} / Activo: ${grupoB.estado} / genero musical: ${grupoB.genero}  `
);

console.log(` %cGrupo: ${grupoC.nombreGrupo}`, estiloTitulo);
console.log(
  `Fundando en: ${grupoC.anoFundacion} / Activo: ${grupoC.estado} / genero musical: ${grupoC.genero}  `
);

console.log(` %cGrupo: ${grupoD.nombreGrupo}`, estiloTitulo);
console.log(
  `Fundando en: ${grupoD.anoFundacion} / Activo: ${grupoD.estado} / genero musical: ${grupoD.genero}  `
);

console.log(` %cGrupo: ${grupoE.nombreGrupo}`, estiloTitulo);
console.log(
  `Fundando en: ${grupoE.anoFundacion} / Activo: ${grupoE.estado} / genero musical: ${grupoE.genero}  `
);
