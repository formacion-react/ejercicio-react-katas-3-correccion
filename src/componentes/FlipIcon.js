import { useState } from "react";

export const FlipIcon = (props) => {
  const { icono1, icono2 } = props;
  const [iconoActivo, setIconoActivo] = useState(icono1);
  const toggleIcono = () => {
    setIconoActivo(iconoActivo === icono1 ? icono2 : icono1);
  };
  return <i className={`icono fas ${iconoActivo}`} onClick={toggleIcono} />;
};
