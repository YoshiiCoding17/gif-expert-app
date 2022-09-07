

import { GifItem } from "./GifItem";
GifItem;
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);
    

  return (
        <>
            <h2>{category}</h2>
            {
              isLoading && (<h3>Cargando..</h3>)
            }
            <div className="card-grid">
              {images.map(function(imagen){
                return <GifItem 
                key={imagen.id} 
                {...imagen}
                />
              })}              
             </div>
        </>
  )
}
