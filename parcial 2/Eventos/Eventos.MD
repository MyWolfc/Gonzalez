# PROGRAMACION WEB #


**NOMBRE DEL ALUMNO:**  JUAN EDUARDO GONZALEZ LEYVA


**NOMBRE DEL PROFESOR:** GERARDO PINEDA ZAPATA 

![Texto de prueba](https://utel.edu.mx/blog/wp-content/uploads/2014/02/shutterstock_148972376.jpg)

**Captura y Propagación de Eventos**

_Primero antes definir que la captura y propagacion de eventos tenemos que entender que son los eventos._

_Los eventos se producen cuando sucede algo determinado (como por ejemplo que el usuario pulse una tecla o mueva el ratón), pudiendo ser detectados por JavaScript para ejecutar un determinado código._

_Disponemos de los siguientes eventos que podemos usar en los Objetos del DOM así como también en el Objeto Window():_

1.onblur(): se pierde el foco.
2.onchange(): al modificar el valor del componente.
3.onbeforeunload(): se lanza al intentar cerrar una ventana.
4.onclick(): al hacer clic en un elemento.
5.ondblclick(): al hacer doble click.
6.onerror(): si se produce un error al cargar la página web o una imagen.
7.onfocus(): cuando un componente obtiene el foco.
8.onkeydown(): al pulsar cualquier tecla.
9.onkeypress(): al pulsar una tecla correspondiente a un carácter.
10.onkeyup(): al leventar cualquier una tecla.
11.onload(): se produce al terminar de cargarse la página web o una imagen.
12.onmousedown(): al presionar un botón del ratón.
13.onmousemove(): se ha movido el ratón.
14.onmouseout(): el cursor del ratón sale del área ocupada por un elemento.
15.onmouseover(): el cursor del ratón entra en el área ocupada por un elemento.
16.onmouseup(): al dejar de presionar un botón del ratón.
17.onresize(): al redimensionar una ventana o frame.
18.onselect(): cuando se selecciona un texto.
19.onunload(): al salir de la página web.

_Ahora que comprendemos mejor que son los eventos continuemos con la propagacion y captura de eventos._

**Evento burbujeante**

_La propagación de eventos es un método de propagación de eventos en la API DOM de HTML cuando un evento está en un elemento dentro de otro elemento, y ambos elementos han registrado un identificador para ese evento. Es un proceso que comienza con el elemento que desencadenó el evento y luego sube a los elementos que lo contienen en la jerarquía. En caso de burbujeo, el evento primero es capturado y manejado por el elemento más interno y luego se propaga a los elementos externos._

_El principio de propagación es simple._

_Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros._

**Captura de eventos**

_Las aplicaciones JavaScript manejan los eventos que el usuario va provocando.  Dada uno de estos eventos, genera la creación de un objeto de tipo event que posee algunas características propias como el tipo de evento del que se trata o la localización del sitio donde ocurrió el evento.  Normalmente el objeto que genera el event oes el encargado de manejarlo.._

_El burbujeo de eventos y la captura de eventos son los dos conceptos interesantes de JavaScript.primero hay qué saber que es un oyente de eventos . Un detector de eventos es básicamente una función que espera a que ocurra un evento. Ese evento puede ser cualquier cosa como un evento de clic del mouse, enviar un formulario, presionar teclas de un teclado, etc._
