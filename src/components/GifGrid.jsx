import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifShower } from "./GifShower"

export const GifGrid = ({category}) => {

  const {isLoading, images} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
      
      {
        isLoading && (<h3>Cargando...</h3>)
      }

      { 
      
        images.map( (image) => (
          <GifShower key={image.id}
                     {... image}
          
          />
          
        ))
      
      }
      </div>
    </>
  )
}
