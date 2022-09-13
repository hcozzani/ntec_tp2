window.onload = function(){
    getData();
};

function getData (){

    var grdDatos = document.getElementById('grdDatos');
    grdDatos.innerHTML  = "";
    var url = getProductosService();
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            grdDatos.insertRow().innerHTML = `
            <td>${element.Id}</td>
            <td>${element.Producto}</td>
            <td>${element.Precio}</td>
            <td>${element.Disponible}</td>
            <td style="text-align:end;">
                <button class="btn btn-outline-primary" onclick="updateRow(${element.Id},'${element.Disponible}');">Actualizar</button>
                <button class="btn btn-danger" onclick="deleteRow(${element.Id});">Eliminar</button>
            </td>
            `;
        }
        
        );
    });
}

function postData (){
    var Producto = document.getElementById("Producto").value;
    var Precio   = document.getElementById("Precio").value;
    var objProd = {};
    objProd.Producto = Producto;
    objProd.Precio = Precio;
    var jsonData = JSON.stringify(objProd);
    const url = getNuevoProductoService();
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

function updateRow (id,estado){
    var objProd = {};
    objProd.Id = id;
    objProd.Estado = estado;
    var jsonData = JSON.stringify(objProd);
    const url = getUpProductoService();
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

function deleteProducto (id){
    var objProd = {};
    objProd.Id = id;
    var jsonData = JSON.stringify(objProd);
    const url = getDelProductoService() + id;
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

function deleteRow (id){
    swal({
        title: "Eliminar producto?",
        text: "Esta acción eliminara el registro de la base de datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
                deleteProducto(id);
        } else {
            swal("Operación cancelada");
        }
    });
}