let correo, contraseña, usuario;

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    LeerDatos()
    ListarDatos(usuario, contraseña);
})

function LeerDatos() {
    usuario = document.getElementById('propietario').value
    contraseña = document.getElementById('modelo').value
}

function ListarDatos(usuario, contraseña) {
    let usuarioUsu = localStorage.getItem('Usuario')
    let correoUsu = localStorage.getItem('Correo')
    let contraseñaUsu = localStorage.getItem('Contraseña')

    if ((usuarioUsu == usuario || correoUsu == usuario) && contraseñaUsu == contraseña) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha iniciado sesión',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout((e) => {
            window.location.href = 'index.html'
        }, 1600)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
        })
    }
}