//VARIABLES
let formulario = document.querySelector("#formulario")
let listaErrores = document.querySelector("#listaErrores")
let tabla = document.querySelector("#tabla")
let errores = ""
let validarAño = /^(18|19|20)\d{2}$/;
let arrayPeliculas = []


//EVENTOS 

formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validarForm()
})

//FUNCIONES

const validarForm = () => {
    
    const titulo = document.querySelector("#titulo").value
    const director = document.querySelector("#director").value
    const year = document.querySelector("#year").value



//Capturo el value porque es lo que se rellena en el formulario

    let errores = ''

    if(titulo == ''){
        errores += "<li>El nombre es obligatorio</li>"
    }
    if(director == ''){
        errores += "<li>El director es obligatorio</li>"
    }
    if(year == ''){
        
        errores += "<li>El year es obligatorio</li>"
    } else if(validarAño.test(year) === false){
        errores += "<li>Pon un año entre 1800 y el actual, bitch</li>" 
    }

    if(errores !== ''){
        listaErrores.innerHTML = errores
    } else {
        //formulario.submit()
        arrayPeliculas.push({titulo, director, year})
    }
    console.log(arrayPeliculas)
}


const printGeneros = () => {
    const generos = document.createElement("select")
    generos.id = "generos"
    generos.name = "generos"
    const lista = document.querySelector('#generos')
    const terror = document.createElement("option")
    const romantica = document.createElement("option")
    const accion = document.createElement("option")
    const cienciaFiccion = document.createElement("option")

    formulario.append(generos)
    lista.append(terror)
    lista.append(romantica)
    lista.append(accion)
    lista.append(cienciaFiccion)
}
//HAcerlo con el selet en el html ya directamente porque sino no se puede
printGeneros()




/*
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
*/

