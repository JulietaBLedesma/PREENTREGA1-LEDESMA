const list = [
    {id: '01', nombre: 'Remera Rosa' , stock:5 , precio: 3000, descripcion: 'Remera Rosa básica' , img:'../public/RemeraRosa.jpg'},
    {id: '02', nombre: 'Remera Negra' , stock:9 , precio: 3000, descripcion: 'Remera Negra básica' , img:'../public/RemeraNegra.jpg'},
    {id: '03', nombre: 'Pantalon Jeans' , stock:10 , precio: 7500, descripcion: 'Pantalon Jeans' , img:'../public/jean.jpg'},
    {id: '04', nombre: 'Pantalon Engomado' , stock:5 , precio: 8000, descripcion: 'Pantalon Engomado' , img:'../public/engomado.jpg'},
    {id: '05', nombre: 'Pollera de Jeans' , stock:7 , precio: 4500, descripcion: 'Pollera de Jeans' , img:'../public/pollerajean.jpg'},
    {id: '06', nombre: 'Pollera Engomada' , stock:5 , precio: 3500, descripcion: 'Pollera de Jeans' , img:'../public/polleracuero.jpg'},


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

    export const getItem = () => {
        return new Promise ((resolve) => {
            setTimeout(()=>{
                resolve(list[2])
            }, 2000)
        })
    }