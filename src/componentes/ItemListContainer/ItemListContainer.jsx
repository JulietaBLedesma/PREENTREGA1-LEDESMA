import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList" 
import { getProducts } from "../../mock/data"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"


const ItemListContainer = (propiedades) => {
    const [productos, setProductos ] = useState ([])
    const {categoriaId} = useParams()



 useEffect (()=>{
    getProducts ()
    .then ((res) => {
      if (categoriaId) {
         setProductos (res.filter((Item)=> Item.categoria === categoriaId))
      }else{
         setProductos(res)
      }
    })
    .catch ((error) => console.log (error))
 }, [categoriaId])



   
   

return (
<>
<div className="titulo">{propiedades.texto}</div>

 <ItemList productos= {productos}/>

 </>
)

}
export default ItemListContainer