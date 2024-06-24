
const parametro = new URLSearchParams(window.location.search)

const usuario = parametro.get('usuario')

if(usuario in sessionStorage === false){
    alert('se requieren credenciales de ingreso')
    window.location = '../index.html'
}

document.getElementById('usuarioreg').textContent = usuario

let btnsalir = document.getElementById('btnsalir')

btnsalir.addEventListener('click', cerrars)

function cerrars(){
    sessionStorage.removeItem(usuario)
    window.location.reload()
}