const host = "http://localhost/ntec/pedidos-app/backend/servicesv1/";
//const host = "";


//Productos
const getProductos  = host + "getproductos.php";
const postProducto  = host + "postproducto.php";
const upProducto    = host + "updateproducto.php";
const delProducto   = host + "deleteproducto.php?Id=";

//pedidos
const postPedido = host + "postpedido.php";
const getPedidos = host + "getpedidos.php";

function getProductosService     (){return getProductos;}
function getNuevoProductoService (){return postProducto;}
function getUpProductoService    (){return upProducto;}
function getDelProductoService   (){return delProducto;}

function getNuevoPedido(){
    return postPedido;
}

function getPedidosService(){
    return getPedidos;
}