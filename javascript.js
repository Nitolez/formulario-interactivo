//VARIABLES
let formulario = document.querySelector("#formulario")
let listaErrores = document.querySelector("#listaErrores")
let tabla = document.querySelector("#tabla")
let lista = document.querySelector('#generos')
let filtro = document.querySelector("#filtro")
let errores = ""
let validarAño = /^(18|19|20)\d{2}$/;
let arrayPeliculas = []
const actualDate = new Date();
let actualYear = actualDate.getFullYear();


//EVENTOS 

formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validarForm()
})

//Change es un evento que se dispara por defecto con select
filtro.addEventListener('change', (ev) => {
    ev.preventDefault();
    filtrarPeliculas();
});


//FUNCIONES

const pintarElementos = () => {
    const opciones = ["Selecciona un género", "Terror", "Romántica", "Acción", "Comedia"];
    const filtroTodos = document.createElement("option");
    filtroTodos.innerHTML = "Todos";
    filtro.append(filtroTodos);

    opciones.forEach(opcion => {
        const optionElement = document.createElement("option");
        optionElement.innerHTML = opcion;
        lista.append(optionElement);
        
        if (opcion !== "Selecciona un género") {
            const filtroOption = document.createElement("option");
            filtroOption.innerHTML = opcion;
            filtro.append(filtroOption);
        }
    });
};



const validarForm = () => {
    
    const titulo = document.querySelector("#titulo").value
    const director = document.querySelector("#director").value
    const year = document.querySelector("#year").value
    const genero = document.querySelector("#generos").value
   // const valorFiltro = document.querySelector("#fitro").value


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
    } else if(validarAño.test(year) === false || year > actualYear || year < 1800){
        errores += "<li>Pon un año entre 1800 y el actual, amiga</li>" 
    }
    if(genero == 'Selecciona un género'){
        errores += "<li>El género es obligatorio</li>"   
    }
    if(errores !== ''){
        listaErrores.innerHTML = errores
    } else {
        listaErrores.innerHTML = ''
        arrayPeliculas.push({titulo, director, year, genero})
        localStorage.setItem('peliculas', JSON.stringify(arrayPeliculas))
        agregarFilaTabla(titulo, director, year, genero)
    }
}

const agregarFilaTabla = (titulo, director, year, genero) => {
    const fila = document.createElement("tr")

    const celdaTitulo = document.createElement("td")
    celdaTitulo.textContent = titulo
    fila.append(celdaTitulo)

    const celdaDirector = document.createElement("td")
    celdaDirector.textContent = director
    fila.append(celdaDirector)

    const celdaYear = document.createElement("td")
    celdaYear.textContent = year
    fila.append(celdaYear)

    const celdaGenero = document.createElement("td")
    celdaGenero.textContent = genero
    fila.append(celdaGenero)

    tabla.append(fila)
}
//Creo los filtros

const limpiarTabla = () => {
    //deleteRow() elimina una fila específica de una tabla
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}

const filtrarPeliculas = () => {
    const generoPeli = document.querySelector("#filtro").value
    let peliculasFiltradas = arrayPeliculas

    if(generoPeli !== 'Todos'){
        //filter - crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
       peliculasFiltradas = arrayPeliculas.filter(pelicula => pelicula.genero === generoPeli)
    }

    limpiarTabla()

    peliculasFiltradas.forEach(pelicula => {
        agregarFilaTabla(pelicula.titulo, pelicula.director, pelicula.year, pelicula.genero);
    });

}

//LLAMADA A FUNCIONES

pintarElementos();

