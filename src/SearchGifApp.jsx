import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const SearchGifApp = () => {

  const [categorias, setCategorias] = useState([''])

    const addCategory = (newCategory) => {
      
      if (categorias.includes(newCategory)) return
      setCategorias([newCategory ,...categorias])
    }

    return (
        <>
          <h1>Buscar Gifs</h1>

          <AddCategory onNewCatrgory = {(categoria) => addCategory(categoria)}/>

          {
          
          categorias.map( (categoria)  => (

            <GifGrid 

               category={categoria}
               key={categoria}
            
            />

          ))
          
          }
                       
        </>
      ) 
}