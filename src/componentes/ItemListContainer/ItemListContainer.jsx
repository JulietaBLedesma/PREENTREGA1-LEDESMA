import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList" 
import { getProducts } from "../../mock/data"


const ItemListContainer = (propiedades) => {
    const [productos, setProductos ] = useState ([])




 useEffect (()=>{
    getProducts ()
    .then ((res) => setProductos (res))
    .catch ((error) => console.log (error))
 })



   
   

return (
<>
<div className="titulo">{propiedades.texto}</div>

 <ItemList productos= {productos}/>

 </>
)

}
export default ItemListContainer