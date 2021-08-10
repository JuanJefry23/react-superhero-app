import { useState } from "react";

//Al parámetro initialState le doy un arreglo vacío por default en caso el usuario no me pase nada(Así NO "revienta" mi aplicación)
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  //Con esta función borramos/reseteamos el input
  const reset = () => {
    setValues(initialState);
  };
  //Haremos por separado al evento de la función, y no retonaremos todo en uno como en "OTRA FORMA"
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  /*OTRA FORMA PARA RETORNAR TODO EN UNO:
  return [values, ({target})=>{
      setValues({
          ...values,
          [target.name]: target.value
      });
  }];
  */

  return [values, handleInputChange, reset];
};

/*OBSERVACIÓN:
-Es un Custom Hook que se encargará de manejar los formularios
-Este es el custom hook para los formularios , o sea para código que se repite y que se
usará en varios formularios
*/