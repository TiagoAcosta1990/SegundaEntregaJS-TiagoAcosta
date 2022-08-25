
/* creamos la funcion para generar los productos
    producto: {
        codigo: numero
        nombre: palabra
        tamaño: string
        peso: string
        precio: numero
        imagen string
    }*/

 const carrito =[];
 
 
const productoHTML = (producto) => {
    const texto = `
    <div class="card mx-3 my-3" style="width: 18rem;">
                    <img 
                        src="${producto.imagen}" 
                        class="my-2 card-img-top" 
                        alt="..."
                        />
                    <div class="card-body text-center">
                      <h5 class="card-title negrita">${producto.nombre}</h5>
                      <p class="card-text"><span class="negrita">Tamaño:</span> ${producto.tamaño}</p>
                      <p class="card-text"><span class="negrita">Peso:</span>  ${producto.peso}</p>
                      <p class="card-text"><span class="negrita">Precio:</span> $${producto.precio}</p>
                      <button type="button" id="boton-${producto.codigo}" class="btn btn-success">+ AGREGAR AL CARRITO</button>
                    </div>
                </div>
    `;
    return texto;
};

/* Creamos el HTML para el carrito */

const productoCarritoHTML = (producto) => {
    const texto = `
    <div class="card mx-3 my-3" style="width: 18rem;">
                    <img 
                        src="${producto.imagen}" 
                        class="my-2 card-img-top" 
                        alt="..."
                        />
                    <div class="card-body text-center">
                      <h5 class="card-title negrita">${producto.nombre}</h5>
                      <p class="card-text"><span class="negrita">Precio:</span> $${producto.precio}</p>
                      <button type="button" id="boton-quitar-${carrito.length}" class="btn btn-danger">X ELIMINAR</button>
                    </div>
                </div>
    `;
    return texto;
};

/* Creamos otra funcion para añadir los productos a nuestro catálogo */


const catalogo = document.getElementById("catalogo");
const carritoDom = document.getElementById("carrito");
for (const producto of productos) {
    catalogo.innerHTML += productoHTML(producto);
}

for (const producto of productos){
    const boton = document.getElementById(`boton-${producto.codigo}`);
    boton.addEventListener("click", () => {
        const productoCarrito = {
            nombre: producto.nombre,
            imagen: producto.imagen,
            idCompra: carrito.length,
            codigo: producto.codigo,
        };
        carrito.push(productoCarrito);
        addCarrito();
        console.log(carrito);
    });
}

/* Definimos una funcion que nos crea todos los productos que irán al carrito */

const addCarrito = ()=> {
    let productosCarritoHTML = "";
    for(const producto of carrito) {
        productosCarritoHTML += productoCarritoHTML(producto);     
    }
    carritoDom.innerHTML = productosCarritoHTML;
    const almacenar = (clave,valor) => { /* <----------Almacenamos el producto ingresado en local storage*/
        localStorage.setItem(clave,valor);
    };
    for (const producto of productos){
        almacenar (producto.codigo, JSON.stringify(producto));
    }

};
/* Definimos una funcion que elimine los productos del carrito (EN CONSTRUCCION, AÚN NO LOS ELIMINA) 

for (const producto of carrito){
    const boton = document.getElementById(`boton-quitar-${producto.idCompra + 1}`);
    boton.addEventListener("click", () => {
        let index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        delete carrito[index];
        carritoDom.innerHTML ="";
    });
}
*/
