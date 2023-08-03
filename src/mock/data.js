const list = [
    {id: '01', nombre: 'Remera Rosa' ,categoria: 'Remeras', stock:5 , precio: 3000, descripcion: 'Remera Rosa básica' , img:'../public/RemeraRosa.jpg'},
    {id: '02', nombre: 'Remera Negra' ,categoria: 'Remeras', stock:9 , precio: 3000, descripcion: 'Remera Negra básica' , img:'../public/RemeraNegra.jpg'},
    {id: '03', nombre: 'Pantalon Jeans' ,categoria: 'Pantalones', stock:10 , precio: 7500, descripcion: 'Pantalon Jeans' , img:'../public/jean.jpg'},
    {id: '04', nombre: 'Pantalon Engomado' ,categoria: 'Pantalones',stock:5 , precio: 8000, descripcion: 'Pantalon Engomado' , img:'../public/engomado.jpg'},
    {id: '05', nombre: 'Pollera de Jeans' ,categoria: 'Polleras' ,stock:7 , precio: 4500, descripcion: 'Pollera de Jeans' , img:'../public/pollerajean.jpg'},
    {id: '06', nombre: 'Pollera Engomada' ,categoria: 'Polleras', stock:5 , precio: 3500, descripcion: 'Pollera de Jeans' , img:'../public/polleracuero.jpg'},


]

 export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        let error= false
        
        setTimeout (() => { 
            if(error) {
                reject ('Intente más tarde')
            } else {
                resolve (list)
            }
            
        },2000)
    })}

    export const getItem = (id) => {
        return new Promise ((resolve) => {
            setTimeout(()=>{
                resolve(list.find((item)=> item.id === id))
            }, 2000)
        })
    }