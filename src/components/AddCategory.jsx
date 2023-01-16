import React from "react";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <=1 ) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
};

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gift"
        value={ inputValue }
        //Funcion para capturar el dato almacenado
        onChange={ onInputChange }
      />
    </form>
  );
};
