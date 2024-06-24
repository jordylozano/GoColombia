
    function traerProducto(){
        
        const url = '/app/productos'

        
        fetch(url)
            .then(respuesta => respuesta.json())
                .then(datos =>{
                    let datosJson = datos
                    console.log(datosJson)
                    let rutaimg = datosJson[0].imagen
                    let ruta = rutaimg.slice(6)
                    let img = document.getElementById('imgp')
                    img.src = ruta
                    let nombrep = document.getElementById('nombrep')
                    nombrep.textContent = datosJson[0].nombre

                    let descripcionp = document.getElementById('descripcionp')
                    descripcionp.textContent = datosJson[0].descripcion
                })
    }       

    traerProducto()