import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export const FlipIcon = (props) => {
  const { Componente1, Componente2 } = props;
  const [iconoActivo, setIconoActivo] = useState(1);
  const toggleIcono = () => {
    setIconoActivo(iconoActivo === 1 ? 2 : 1);
  };
  return (
    <>
      {iconoActivo === 1 ? (
        <Componente1 className="icono" onClick={toggleIcono} />
      ) : (
        <Componente2 className="icono" onClick={toggleIcono} />
      )}
    </>
  );
};
