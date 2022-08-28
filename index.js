class Producto{
    constructor(id, nombre, precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}

class Carrito{
    constructor(){
        this.items=[];
    }
    agregarAlCarrito(producto){
        this.items.push(producto);
        alert("Se agregó " +producto.nombre + " al carrito");
    }

}

function mostrarTotal(){
    let total=0;
    miCarrito.items.forEach(element => {
        total+= element.precio;
        
    });
    alert("Su compra total es de " +total);
    let medioPago = prompt("Para pagar con tarjeta ingrese 1, con transferencia ingrese 2: ")
    pagar(medioPago);

}

function pagar(medioDePago){
    switch(medioDePago){
        case '1':
            alert("Se realizo el pago con tarjeta. ");
            break;
        case '2':
            alert("Se realizo el pago con transferencia. ");
            break;
    }
    
}
/* document.getElementById("contactButton").onclick = function () {
    location.href = "./contact.html";
};
document.getElementById("fbButton").onclick = function () {
    location.href = "www.facebook.com";
};
document.getElementById("twButton").onclick = function () {
    location.href = "www.twitter.com";
};
document.getElementById("igButton").onclick = function () {
    location.href = "https://www.instagram.com/grace.aromas/";
};
 */
miCarrito = new Carrito();

