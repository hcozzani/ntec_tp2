function crearPedido(){
    var nombre=document.getElementById("Nombre").value; 
    var direccion=document.getElementById("Direccion").value;
    var pedido=document.getElementById("Pedido").value;  
    var telefono=document.getElementById("Telefono").value; 

    var nuevoProducto = {};
    nuevoProducto.nombre = nombre;
    nuevoProducto.direccion = direccion;
    nuevoProducto.pedido = pedido;
    nuevoProducto.telefono = telefono;

    var jsonData = JSON.stringify(nuevoProducto);
    const url = getNuevoPedido();
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(jsonData);
    xhr.onload = function () {
        if(xhr.status === 200) {
            getData();
        }
    }  
}

window.onload = function(){
    getData();
};

function getData (){

    var grdDatos = document.getElementById('grdDatos');
    grdDatos.innerHTML  = "";
    var url = getPedidosService();
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            grdDatos.insertRow().innerHTML = `
            <tr>
            <th>${element.Id}</th>
            <th>${element.Nombre}</th>
            <th>${element.Direccion}</th>
            <th>${element.Telefono}</th>
            <th>${element.Pedido}</th>
            <td style="text-align:end ;">
              <button class="btn btn-outline-primary">Iniciar</button>
              <button class="btn btn-outline-primary">Modificar</button>
              <button class="btn btn-danger">Cancelar</button>
            </td>
          </tr> `;
        }
        
        );
    });
}