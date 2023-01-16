import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( NewCategory ) => {
        //Validacion para que no se repitan 
if(categories.includes( NewCategory ) ) return;

        setCategories([  NewCategory, ...categories ]);
    }

  return (
    <>

    <h1>GiftExpertApp</h1>

    <AddCategory 
        //Solo carga el dato que se necesita (dato traido del input)
        onNewCategory={ (event) => onAddCategory(event) }
    />
    
        {
            categories.map( ( category ) => (
                <GifGrid 
                key={ category }
                category={ category }/>
            ))
        }

     </>
  )
}
