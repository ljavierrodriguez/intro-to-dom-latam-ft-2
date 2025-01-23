/* 
BOM = Browser Object Model
*/
/* 
window

alert
confirm
prompt

*/

// alert("Hola Mundo")
// confirm("Desea guardar esto?")
// prompt("Ingresa tu nombre")

/* 
DOM = Document Object Model 
*/
/* 

document // vemos todo el documento o html
document.body // informacion contenida dentro del body

getElementById(id) // Obtener el elemento por el id indicado
getElementsByClassName(class) // Obtener todos los elementos con el atributo class con el valor indicado
getElementsByTagName(tag) // Obtener todos los elementos segun la etiqueta indicada
getElementsByName(name) // Obtener todos los elementos segun el nombre indicado

querySelector(selector)
querySelectorAll(selector)

createElement(tag)
createTextNode(text)

*/

console.log(document)

console.log(document.body)

// accediendo al elemento home
let home = document.getElementById('home')

// mostrando el contenido de home
console.log(home)

// accediendo a los elementos con la clase articulo
let articulos = document.getElementsByClassName('articulo')

// mostrando el contenido de articulos
//console.log(articulos)
for(let i = 0; i < articulos.length; i++){
    console.log(articulos[i])
}

for(let inp of articulos){
    console.log(inp)
    inp.style.color = 'red';
}

// accediendo a los elementos de tipo div
let divs = document.getElementsByTagName('div')

// mostrando el contenido de divs
console.log(divs)

// accediendo a todos los elementos de tipo input
let inputs = document.getElementsByTagName('input')

console.log(inputs)


//let btn = document.getElementsByTagName('button')[0] // []
let btn = document.getElementById('enviar')
console.log(btn)

btn.innerText = "Hola Mundo"
btn.classList.add('btn-success')
btn.classList.remove('btn-primary')

let genero = document.getElementsByName('genero')
console.log(genero)

if(genero[0].checked){
    console.log(genero[0].value)
}
if(genero[1].checked){
    console.log(genero[1].value)
}


let divHome = document.querySelector('#home')
console.log(divHome)

let parrafos = document.querySelectorAll('.articulo')
console.log(parrafos)


let input = document.querySelectorAll('input')

input.forEach((i) => console.log(i))


let div = document.createElement('div')

div.innerHTML = "Hola Mundo"
div.classList.add('alert', 'alert-danger')

console.log(div)

//document.body.appendChild(div)
let divHome2 = document.querySelector('#home')

document.body.insertBefore(div, divHome2)

let message = document.querySelector('#message')

//message.innerHTML = "Hola Mundo desde Javascript"

let p = document.querySelector('#message p')
let newText = document.createTextNode('Javascript')
p.appendChild(newText)