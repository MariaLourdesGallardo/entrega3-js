
const bajarDelLs = (key) =>{
    return JSON.parse(localStorage.getItem(key)) || []
}

let carrito = bajarDelLs("productos")
console.log(carrito)

const subirAlLs = (key,valor) =>{
    localStorage.setItem(key,JSON.stringify(valor))
}




function delLsAlDom (array){
    const contenedor = document.querySelector("#carrito_list")
    
    array.forEach(element => {
        const cardsCarrito = document.createElement("div")
        cardsCarrito.className ="cardsCarrito"
        cardsCarrito.innerHTML = `
            <div class="card text-center">
                <div class="card-header">
                    ${element.producto}
                </div>

                <div class="card-body d-flex">
                    <div>
                        <img src=${element.img} alt=${element.producto}>
                    </div>
                    <div>
                        <h5 class="card-title">${element.marca} </h5>
                        <p class="card-text">${element.descripcion1} </p>
                        <a href="#" class="quitar_boton btn btn-primary" id=${element.id} >Quitar</a>
                    </div>
                    
                </div>
                <div class="card-footer text-muted">
                    *Productos incluidos en el envío gratuito a domicilio por compras superiores a 30€
                </div>
            </div>
        `   
        contenedor.appendChild(cardsCarrito)     
    });
}

delLsAlDom(bajarDelLs("productos"))





const carritoEliminar = () =>{
    const prodEnCarrito = document.querySelectorAll(".quitar_boton")
    // console.log(prodEnCarrito)
    prodEnCarrito.forEach (element =>{
        element.onclick = () =>{
            // console.log(element.id)
            const filtrar = carrito.filter( (valor,index) =>{
                return valor.id != Number(element.id)  
            } )
            
            carrito = filtrar

            // console.log(carrito)

            subirAlLs("productos",carrito )
            
            
            
            carritoEliminar()
            
            

        }
    })

}

carritoEliminar()




