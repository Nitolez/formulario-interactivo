const formulario = document.querySelector("#formulario")
const listaErrores = document.querySelector("#listaErrores")
let errores = ""

let regExp = /^[a-zA-Z]$/i
let validarAño = /^(18|19|20)\d{2}$/;


formulario.addEventListener("submit", (ev) => {
    ev.preventDefault()
    validarForm()
})


const objValidar = {
    titulo: "false",
    director: "false",
    year: "false",
    }

const validarForm = () => {
    const titulo = formulario.titulo.value
    const director = formulario.director.value
    const year = formulario.year.value

//Capturo el value porque es lo que se rellena en el formulario

 

    if(titulo != ""){
        if(regExp.test(titulo)){
            alert("Correo correcto")
            objValidar.titulo="true"
        } else{
            alert("Correo incorrecto")
        }
        objValidar.titulo = "true"
    } else {
        objValidar.titulo = "false"
    }

    if(director != ""){
        objValidar.director = "true"
    } else {
        objValidar.director = "false"
    }

    if(year != ""){
        if(validarAño.test(year)){
            alert("Año correcto")
            objValidar.year="true"
        } else{
            alert("Año incorrecto")
        }
        objValidar.year = "true"
    } else {
        objValidar.year = "false"

    } 

    const valoresObjValidar = Object.values(objValidar)
    console.log(valoresObjValidar)
    const noValidado = valoresObjValidar.find((valor) => valor === "false")
    console.log(noValidado)

    if(noValidado){
        errores += "<li>No valido</li>"
    } else {
        formulario.submit()
    }
    console.log({errores})
    listaErrores.innerHTML = errores
}

/*
const validarForm = () => {
    const titulo = formulario.titulo.value
    const director = formulario.director.value
    const year = formulario.year.value

//Capturo el value porque es lo que se rellena en el formulario

    let errores = ""

    if(titulo == ""){
        errores += "<li>El nombre es obligatorio</li>"
    }
    if(director == ""){
        errores += "<li>El director es obligatorio</li>"
    }
    if(year == ""){
        errores += "<li>El year es obligatorio</li>"
    }

    if(errores !== ""){
        listaErrores.innerHTML = errores
    } else {
        formulario.submit()
    }

    console.log({errores})
}
*/