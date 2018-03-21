document.addEventListener('DOMContentLoaded', function()
{

var li_button_select = document.getElementById('li_button_select')

var atributo_data
var contenido
var input_hidden


// Eventos
//...............................................................
li_button_select.addEventListener('click', obtenerVariables)
li_button_select.addEventListener('click', crear_li)
li_button_select.addEventListener('click', toggle_ul)
li_button_select.addEventListener('click', toggle_li)
li_button_select.addEventListener('click', scroll_ul)
li_button_select.addEventListener('click', borde_li)
li_button_select.addEventListener('click', eventos_li)




// Según el id del botón, obtenemos los 
// atributos data de un objeto u otro
// en la hoja select-datos.js
//...................................
function obtenerVariables()
{
	switch(this.id) 
	{
		case "li_button_select":
		atributo_data = SelectData.data
		contenido = SelectTexto.texto
		input_hidden = document.getElementById('hidden_select')
		break
	}
}






// Crear e insertar los li
//.........................
function crear_li()
{
	var capa_ul = this.parentNode // Localizamos el padre del boton li clicado

	let capas_li = capa_ul.getElementsByTagName('li') // Revisar si el ul tiene o no capas li



	if(capas_li.length == 1)
	{
		for(var i=0; i < atributo_data.length; i++)
		{
			let capas_li = document.createElement('li') // Crear li
			capas_li.classList.add('capas-li') // Asignarle clase

			capa_ul.appendChild(capas_li) // Insertar li

			asignarAtributosData(capas_li, i) // Asignar atributo data
			escribirContenido(capas_li, i) // Escribir contenido
		}
	}
}





// Asignar atributo data
//.......................................................
function asignarAtributosData(capas_li, i)
{
	capas_li.setAttribute('data-value', atributo_data[i]) 
}





// Escribir contenido en el li
//................................................
function escribirContenido(capas_li, i)
{
	capas_li.innerHTML = contenido[i]
}





// Mostrar / ocultar ul
//......................
function toggle_ul()
{
	this.parentNode.classList.toggle('desplegar-ul')	
}




// Mostrar / ocultar li
//......................
function toggle_li()
{
	let capas_li = this.parentNode.getElementsByTagName('li')

	for(var i=1; i < capas_li.length; i++)
	{
		capas_li[i].classList.toggle('desplegar-li')
	}
}




// Poner / quitar scroll
//.......................
function scroll_ul()
{
	var that = this

	setTimeout(function() // Retrasamos el toggle por estética
	{
		that.parentNode.classList.toggle('scroll-ul') 
	}, 200)
}





// Poner y quitar borde
// al botón li
//.................
function borde_li()
{
	li_button_select.classList.toggle('borde-li')
}





// Asignar eventos click a los li
//................................
function eventos_li()
{
	let capas_li = this.parentNode.getElementsByTagName('li')

	for(var i=1; i < capas_li.length; i++)
	{
		capas_li[i].addEventListener('click', changeButtonValue)
		capas_li[i].addEventListener('click', inputHiddenValue)
		capas_li[i].addEventListener('click', toggle_ul)
		capas_li[i].addEventListener('click', toggle_li)
		capas_li[i].addEventListener('click', scroll_ul)
		capas_li[i].addEventListener('click', borde_li)
	}
}




// Inserta el valor del option clicado
//.....................................
function changeButtonValue()
{
	// La ruta busca el <p> que hay dentro del <li>
	this.parentNode.children[0].children[0].innerHTML = this.innerHTML
}




// ASIGNAR VALOR AL INPUT HIDDEN
//...............................
function inputHiddenValue()
{
	input_hidden.value = this.dataset.value // Atributo data del li clicado
}



















})