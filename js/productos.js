let carrito = []

const boxCards = document.querySelector("#contenedor-productos")

function cardsAlDom ( array ) {

    array.forEach( element => {
        const card = document.createElement("div")
        card.className = "tarjeta text-center"
        card.innerHTML = `
            <div class="card " style="width: 12rem;" id=${element.id}>
                <img src=${element.img} class="card-img-top" alt=${element.producto}
            </div>
            <div class="class="card-body ">
                <div>
                    ${element.precio} <span>€</span>
                </div>
                <h5 class="card-title">${element.marca}</h5>
                <p class="card-text">${element.producto}</p>
                <button class="btn btn-primary" id=${element.id} >Añadir al carrito</button>
            </div>   
        `
        boxCards.appendChild(card)
    });
}

cardsAlDom(productosTienda)

const subirAlLs = (key,valor) =>{
    localStorage.setItem(key,JSON.stringify(valor))
}


const push = (array,valor) =>{
    array.push(valor)
}

const carritoPush = () =>{
    const botonesCard = document.querySelectorAll(".btn")
    botonesCard.forEach (element =>{
        element.onclick = () =>{
            const matchearProd = productosTienda.find (elemento =>{
                return elemento.id === Number (element.id)
            })
            push (carrito,matchearProd)
            subirAlLs ("productos",carrito)
            
        }
    })
    
}
carritoPush()

const bajarDelLs = (key) =>{
    return JSON.parse(localStorage.getItem(key)) || [] 
} 

const carritoModificado = bajarDelLs("productos")
carrito = carritoModificado