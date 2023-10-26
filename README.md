# Prueba tecnica Lisit

La empresa Manosos SPA nos ha solicitado realizar un landing page en el cual podamos visualizar
diferente información de Starwars que ellos han recolectado mediante su API
(https://swapi.dev/api/).

Para ello se requiere realizar peticiones mediante axios y luego generar una visual
desktop responsive con la información de las siguientes categorías:

* Personas
* Planetas
* Naves

El landing debe contener:

* Filtro de Busqueda.
    * Por nombre.
    * Paginado.

Por cada categoría se debe mostrar: 

* Información preliminar - (Information Card)
* Informacion detallada - (Detail View on click on Card)

Adicionalmente:
* En la categoria de Planetas, redireccionar al detalle de un residente al hacer click.

Funcionalidades Añadidas: 
* Cache de información - Debido a que los datos relacionados entre categorias deben obtenerse de manera individual, de esta manera se evita la sobrecarga de peticiones

## Instrucciones para levantar el projecto en local.

Se debe primero instalar las dependencias con el comando:

### `npm install`

Finalmente iniciar el proyecto con el comando.

### `npm start`

