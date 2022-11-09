//---- VARIABLES DEL INICIO DE SESION ----

let nombre, usuario, contraseña, correo, telefono

// ------------ BOTONES (PERDON ISMA :C)--------------
function change_animales() {
    document.querySelector(".animales_boton").classList.remove("aumentar_animales");
}

function change2_animales() {
    document.querySelector(".animales_boton").classList.add("aumentar_animales");
}
function change_plantas() {
    document.querySelector(".plantas_boton").classList.remove("aumentar_plantas");
}

function change2_plantas() {
    document.querySelector(".plantas_boton").classList.add("aumentar_plantas");
}
function change_hongos() {
    document.querySelector(".hongos_boton").classList.remove("aumentar_hongos");
}

function change2_hongos() {
    document.querySelector(".hongos_boton").classList.add("aumentar_hongos");
}

// ----------CARRUSEL--------

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carrusel__indicadores',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 1200,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    },
    )
}
)
// --------- GUARDAMOS NUESTRO FORMULARIO E INPUTS EN CONSTANTES ---------------
const $formulario = document.getElementById("formu");
const $inputs = document.querySelectorAll("#formu input")


// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // AQUI LE ESTAMOS DICIENDO QUE EN EL CAMPO USUARIO ACEPTE LETRAS MINUSCULAS Y MAYUSCULAS DE LA A HASTA LA Z, NÚMEROS DEL 0 HASTA EL 9, GUIONES BAJOS, GUIONES MEDIO Y UNA CANTIDAD MINIMA DE 4 CARACTERES Y MAXIMA DE 16 CARACTERES
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    password: /^.{4,12}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 12 DIGITOS
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/ // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
}


// -------------- OBJETO CON NUESTROS CAMPOS ----------------------
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}


// --------- SWITCH PARA SELECCIONAR EL INPUT DONDE ÉSTE HACIENDO FOCO EL USUARIO  ---------------
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
            break;
    }
}


// -------------- VALIDAMOS NUESTROS INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
}


// --------- VALIDAMOS NUESTRAS PASSWORD'S ---------------
const validarPassword2 = () => {
    let inputPassword1 = document.getElementById("password");
    let inptPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inptPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[password] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[password] = true;
    }
}


// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});



// --------- VALIDAMOS TODO NUESTRO FORMULARIO Y GUARDAMOS LOS DATOS---------------
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    LeerDatos()

    setTimeout(() => {
        window.location.href = 'inicio_sesion.html'
    }, 3000);

    const $terminos = document.getElementById("terminos");
    if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && $terminos.checked) {
        // formulario.reset();

        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";

        }, 3000);

        document.querySelectorAll(".formulario__grupo--correcto").forEach((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });

    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    usuario = document.getElementById('usuario').value
    contraseña = document.getElementById('password').value
    correo = document.getElementById('correo').value
    telefono = document.getElementById('telefono').value

    guardarLocalStorage(nombre, usuario, correo, contraseña, telefono)
}

function guardarLocalStorage(nombre, usuario, correo, contraseña, telefono) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Usuario', usuario)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Contraseña', contraseña)
    localStorage.setItem('Telefono', telefono)
}