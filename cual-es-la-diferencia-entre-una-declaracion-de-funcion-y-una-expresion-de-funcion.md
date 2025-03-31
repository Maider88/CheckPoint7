# ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

#### Empecemos con las Diferencias

1. Las declaraciones de funciones pueden ser ejecutadas antes de su definición.
2. Declaraciones a la derecha, expresiones a la izquierda.
3. Las expresiones son más difíciles de inspeccionar.

#### Las declaraciones de funciones pueden ser ejecutadas antes de su definición

Gracias a que las declaraciones de funciones son ascendidas al momento de ejecución de nuestro programa, nuestra función se puede ejecutar incluso antes de su definición.

```javascript
nuevaFuncion() function nuevaFuncion() { console.log("Hola Mundo!") } //Hola Mundo!
nuevaFuncion()

function nuevaFuncion() {
  console.log("Hola Mundo!")
}

//Hola Mundo!
```

En cambio, esto no es posible con las expresiones de funciones, ya que no se sabe el valor que va a tener nuestra variable previamente declarada.

```javascript
nuevaFuncion() var nuevaFuncion = function nuevaFuncion() { console.log("Hola Mundo!") } // ➡️ TypeError: nuevaFuncion is not a function
nuevaFuncion()

var nuevaFuncion = function nuevaFuncion() {
  console.log("Hola Mundo!")
}

//TypeError: nuevaFuncion is not a function
```

#### Declaraciones a la Izquierda, Expresiones a la Derecha

La palabra reservada function se puede usar tanto al lado izquierdo como al lado derecho del signo =. Lo interesante de esto es que siguen diferentes reglas dependiendo de dónde la escribimos.

Cuando la usamos al lado izquierdo, estamos creando una declaración de función y es obligatorio asignar un nombre. En cambio, si la usamos a la derecha del símbolo igual, hablamos de una expresión de función.

```javascript
// declaración de función function soyUnaDeclaracion() { // ... } // expresión de función var soyUnaExpresion = function() { // ... }
// declaración de función
function soyUnaDeclaracion() {
  // ...
}

// expresión de función
var soyUnaExpresion = function() {
  // ...
}
```

> Dato Curioso: En las expresiones de funciones darle nombre a la función es opcional. En cambio para las declaraciones es obligatorio.

En este último caso, la función pasa a ser una función anónima, algo conveniente ya que nuestro programa sigue funcionando sin problemas, pero puede tener algunas implicaciones a la hora de inspeccionar la cola de ejecución del programa.

Ahora es bastante habitual ver y usar funciones anónimas, ya que las expresiones de función flecha (=>) no permiten asignarles nombre. Utilizar este tipo de declaraciones no es malo, pero tenemos que tener en cuenta las implicaciones que conlleva usarlas. Por un lado, son más legibles y fáciles de usar, pero por otro, son un poco más complejas de inspeccionar y seguir en la cola de ejecución. ¡No te preocupes!, veremos más adelante con más detalle cómo funcionan este tipo de expresiones de función.

Un caso particular en el que una expresión de función no está a la derecha del símbolo igual, es la famosa IIFE (Immediately Invoked Function Expression o Expresión de función ejecutada inmediatamente). Una IIFE es una expresión de función porque la función está encapsulada en paréntesis (()) y crea un "scope" completamente aislado del global. Era una técnica bastante habitual hace unos años (vaya tiempos!)

```javascript
// la famosa IIFE (function vayaTiemposCuandoEraFamoso() { // ... })()
// la famosa IIFE
(function vayaTiemposCuandoEraFamoso() {
  // ...
})()
```

#### Las expresiones son más difíciles de inspeccionar

Inevitablemente tendremos problemas en nuestros programas. Poder identificar rápidamente los problemas y saber donde están para resolverlos es fundamental. Cuando le asignamos nombres a nuestras funciones, salen en la cola de ejecución y podemos seguir mejor los errores y ver de donde provienen.

![Imagen](https://www.escuelafrontend.com/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fescuela-frontend%2Fimage%2Fupload%2Fv1624321906%2Farticles%2Fdiferencia-entre-declaraciones-de-funciones-y-expresiones-de-funciones%2Fnombre-de-funciones_z87sub.png\&w=1920\&q=100)

Las expresiones son más difíciles de inspeccionar Esto puede ser una opinión no muy popular, pero prefiero utilizar declaraciones de funciones por ser más explícitas y además por las ventajas a la hora de inspeccionar el código. Ésto no quiere decir que no use funciones anónimas o funciones flecha, depende de cada caso, es mejor priorizar la legibilidad o velocidad de análisis e inspección.
