# CheckPoint7

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

### ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web. Por ejemplo, al navegar por Internet, en cualquier momento en el que vea un carrusel de imágenes, un menú desplegable “click-to-show” (clic para mostrar), o cambien de manera dinámica los elementos de color en una página web, estará viendo los efectos de JavaScript.

### ¿Para qué se utiliza JavaScript?

Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Por medio de JavaScript, los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.

A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. En las siguientes subsecciones se presentan algunos casos de uso comunes:

Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Por medio de JavaScript, los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.

A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. En las siguientes subsecciones se presentan algunos casos de uso comunes:

### ¿Cómo funciona JavaScript?

Todos los lenguajes de programación funcionan mediante la traducción de sintaxis similar a la del inglés a código de máquina, que posteriormente el sistema operativo se encarga de ejecutar. JavaScript se clasifica principalmente como un lenguaje de scripting o interpretado. El código JavaScript es interpretado, es decir, directamente traducido a código de lenguaje de máquina subyacente mediante un motor de JavaScript. En el caso de otros lenguajes de programación, un compilador se encarga de compilar todo el código en código de máquina en un paso diferente. En consecuencia, todos los lenguajes de scripts son lenguajes de programación, pero no todos los lenguajes de programación son lenguajes de scripts.

### Motor de JavaScript

Un motor JavaScript es un programa de computación que ejecuta código JavaScript. Los primeros motores de JavaScript eran verdaderos intérpretes, pero todos los motores modernos utilizan el método justo a tiempo o la compilación en tiempo de ejecución para mejorar el rendimiento.

### JavaScript del lado del cliente

JavaScript del cliente se refiere a la forma en que JavaScript funciona en el navegador. En este caso, el motor de JavaScript está dentro del código del navegador. Todos los principales navegadores web incluyen sus propios motores de JavaScript incorporados.

Los desarrolladores de aplicaciones web escriben código JavaScript con diferentes funciones asociadas a varios eventos, como hacer clic con el ratón o situar el ratón sobre un elemento. Estas funciones realizan cambios en HTML y CSS.

A continuación, se muestra una perspectiva general del funcionamiento de JavaScript del lado del cliente:

1. El navegador carga una página web cuando recibe una visita.
2. Durante la carga, el navegador convierte la página y todos sus elementos, como los botones, las etiquetas y los cuadros desplegables, en una estructura de datos denominada modelo de objetos del documento (DOM).
3. El motor JavaScript del navegador convierte el código JavaScript en código intermedio. Se trata de un código intermediario entre la sintaxis de JavaScript y la máquina.
4. Diferentes eventos, como hacer clic con el ratón en un botón, desencadenan la ejecución del bloque de código JavaScript asociado. Posteriormente, el motor interpreta el código intermedio y realiza cambios en el DOM.
5. El navegador muestra el nuevo DOM.

### JavaScript del lado del servidor

JavaScript del lado del servidor hace referencia al uso del lenguaje de codificación en la lógica del servidor de backend. En este caso, el motor de JavaScript se encuentra directamente en el servidor. Una función de JavaScript del lado del servidor puede acceder a la base de datos, realizar diferentes operaciones lógicas y responder a varios eventos desencadenados por el sistema operativo del servidor. La ventaja principal del scripting del lado del servidor es que admite un alto nivel de personalización de la respuesta del sitio web según sus requisitos, sus derechos de acceso y las solicitudes de información provenientes del sitio web.

## ¿Cuáles son algunos tipos de datos JS?

### Tipos de datos

Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

Hay ocho tipos de datos básicos en JavaScript. En este capítulo los cubriremos en general y en los próximos hablaremos de cada uno de ellos en detalle.

Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número:

```
// no hay error
let message = "hola";
message = 123456;
```

Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.

#### Number

```
let n = 123;
n = 12.345;
```

El tipo number representa tanto números enteros como de punto flotante.

Hay muchas operaciones para números. Por ejemplo, multiplicación \*, división /, suma +, resta -, y demás.

Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.

Infinity representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número.

Podemos obtenerlo como resultado de la división por cero:

```
alert( 1 / 0 ); // Infinity
```

O simplemente hacer referencia a él directamente:

```
alert( Infinity ); // Infinity
```

NaN representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida, por ejemplo:

```
alert( "no es un número" / 2 ); // NaN, tal división es errónea
```

NaN es “pegajoso”. Cualquier otra operación sobre NaN devuelve NaN:

```
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
```

Por lo tanto, si hay un NaN en alguna parte de una expresión matemática, se propaga a todo el resultado (con una única excepción: NaN \*\* 0 es 1).

> Las operaciones matemáticas son seguras\
> Hacer matemáticas es “seguro” en JavaScript. Podemos hacer cualquier cosa: dividir por cero, tratar las cadenas no numéricas como números, etc.\
> El script nunca se detendrá con un error fatal (y “morir”). En el peor de los casos, obtendremos NaN como resultado.

Los valores numéricos especiales pertenecen formalmente al tipo “número”. Por supuesto que no son números en el sentido estricto de la palabra.

Veremos más sobre el trabajo con números en el capítulo Números.

#### BigInt

En JavaScript, el tipo “number” no puede representar de forma segura valores enteros mayores que (253-1) (eso es 9007199254740991), o menor que -(253-1) para negativos.

Para ser realmente precisos, el tipo de dato “number” puede almacenar enteros muy grandes (hasta 1.7976931348623157 \* 10308), pero fuera del rango de enteros seguros ±(253-1) habrá un error de precisión, porque no todos los dígitos caben en el almacén fijo de 64-bit. Así que es posible que se almacene un valor “aproximado”.

Por ejemplo, estos dos números (justo por encima del rango seguro) son iguales:

```
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

Podemos decir que ningún entero impar mayor que (253-1) puede almacenarse en el tipo de dato “number”.

Para la mayoría de los propósitos, el rango ±(253-1) es suficiente, pero a veces necesitamos números realmente grandes; por ejemplo, para criptografía o marcas de tiempo de precisión de microsegundos.

BigInt se agregó recientemente al lenguaje para representar enteros de longitud arbitraria.

Un valor BigInt se crea agregando n al final de un entero:

```
// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

Como los números BigInt rara vez se necesitan, no los cubrimos aquí sino que les dedicamos un capítulo separado \<info: bigint>. Léelo cuando necesites números tan grandes.

#### String

Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

```
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;
```

En JavaScript, hay 3 tipos de comillas.

Comillas dobles: "Hola".\
Comillas simples: 'Hola'.\
Backticks (comillas invertidas): \`Hola\`.

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.

Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en ${...}, por ejemplo:

```
let name = "John";

// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3
```

La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como name, una expresión aritmética como 1 + 2, o algo más complejo.

Toma en cuenta que esto sólo se puede hacer con los backticks. ¡Las otras comillas no tienen esta capacidad de incrustación!

```
alert( "el resultado es ${1 + 2}" ); // el resultado es ${1 + 2} (las comillas dobles no hacen nada)
```

En el capítulo Strings trataremos más a fondo las cadenas.

> No existe el tipo carácter\
> En algunos lenguajes, hay un tipo especial “carácter” para un solo carácter. Por ejemplo, en el lenguaje C y en Java es char.
>
> En JavaScript no existe tal tipo. Sólo hay un tipo: string. Un string puede estar formado por un solo carácter, por ninguno, o por varios de ellos.

#### Boolean (tipo lógico)

El tipo boolean tiene sólo dos valores posibles: true y false.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.

Por ejemplo:

```
let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado
```

Los valores booleanos también son el resultado de comparaciones:

```
let isGreater = 4 > 1;

alert( isGreater ); // verdadero (el resultado de la comparación es "sí")
```

En el capítulo Operadores Lógicos trataremos más a fondo el tema de los booleanos.

#### El valor “null” (nulo)

El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

Forma un tipo propio separado que contiene sólo el valor null:

```
let age = null;
```

En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.

Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

El código anterior indica que el valor de age es desconocido o está vacío por alguna razón.

#### El valor “undefined” (indefinido)

El valor especial undefined también se distingue. Hace un tipo propio, igual que null.

El significado de undefined es “valor no asignado”.

Si una variable es declarada, pero no asignada, entonces su valor es undefined:

```
let age;

alert(age); // muestra "undefined"
```

Técnicamente, es posible asignar undefined a cualquier variable:

```
let age = 100;

// cambiando el valor a undefined
age = undefined;

alert(age); // "undefined"
```

…Pero no recomendamos hacer eso. Normalmente, usamos null para asignar un valor “vacío” o “desconocido” a una variable, mientras undefined es un valor inicial reservado para cosas que no han sido asignadas.

#### Object y Symbol

El tipo object (objeto) es especial.

Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número, o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

Siendo así de importantes, los objetos merecen un trato especial. Nos ocuparemos de ellos más adelante en el capítulo Objetos después de aprender más sobre los primitivos.

El tipo symbol (símbolo) se utiliza para crear identificadores únicos para los objetos. Tenemos que mencionarlo aquí para una mayor integridad, pero es mejor estudiar este tipo después de los objetos.

#### El operador typeof

El operador typeof devuelve el tipo de dato del operando. Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente queremos hacer una comprobación rápida.

La llamada a typeof x devuelve una cadena con el nombre del tipo:

```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

Las últimas tres líneas pueden necesitar una explicación adicional:

1. Math es un objeto incorporado que proporciona operaciones matemáticas. Lo aprenderemos en el capítulo Números. Aquí sólo sirve como ejemplo de un objeto.
2. El resultado de typeof null es "object". Esto está oficialmente reconocido como un error de comportamiento de typeof que proviene de los primeros días de JavaScript y se mantiene por compatibilidad. Definitivamente null no es un objeto. Es un valor especial con un tipo propio separado.
3. El resultado de typeof alert es "function" porque alert es una función. Estudiaremos las funciones en los próximos capítulos donde veremos que no hay ningún tipo especial “function” en JavaScript. Las funciones pertenecen al tipo objeto. Pero typeof las trata de manera diferente, devolviendo function. Además proviene de los primeros días de JavaScript. Técnicamente dicho comportamiento es incorrecto, pero puede ser conveniente en la práctica.

> Sintaxis de typeof(x)\
> Se puede encontrar otra sintaxis en algún código: typeof(x). Es lo mismo que typeof x.
>
> Para ponerlo en claro: typeof es un operador, no una función. Los paréntesis aquí no son parte del operador typeof. Son del tipo usado en agrupamiento matemático.
>
> Usualmente, tales paréntesis contienen expresiones matemáticas tales como (2 + 2), pero aquí solo tienen un argumento (x). Sintácticamente, permiten evitar el espacio entre el operador typeof y su argumento, y a algunas personas les gusta así.
>
> Algunos prefieren typeof(x), aunque la sintaxis typeof x es mucho más común.

### ¿Cuáles son las tres funciones de String en JS?

#### String — Cadena de caracteres

El objeto String se utiliza para representar y manipular una secuencia de caracteres.

#### Descripción

Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring().

#### Crear cadenas

Las cadenas se pueden crear como primitivas, a partir de cadena literales o como objetos, usando el constructor String():

```
js

const string1 = "Una cadena primitiva";
const string2 = "También una cadena primitiva";
const string3 = `Otra cadena primitiva más`;

const string4 = new String("Un objeto String");
```

Las strings primitivas y los objetos string se pueden usar indistintamente en la mayoría de las situaciones. Consulta "Primitivas String y objetos String" a continuación.

Los cadena literales se pueden especificar usando comillas simples o dobles, que se tratan de manera idéntica, o usando el carácter de comilla invertida \`. Esta última forma especifica una Plantilla literal: con esta forma puedes interpolar expresiones.

#### Acceder a un caracter

Hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método charAt():

```
return "cat".charAt(1); // devuelve "a"
```

La otra forma (introducida en ECMAScript 5) es tratar a la cadena como un objeto similar a un arreglo, donde los caracteres individuales corresponden a un índice numérico:

```
return "cat"[1]; // devuelve "a"
```

Cuando se usa la notación entre corchetes para acceder a los caracteres, no se puede intentar eliminar o asignar un valor a estas propiedades. Las propiedades involucradas no se pueden escribir ni configurar. (Ve Object.defineProperty() para más información).

#### Comparar cadenas

En C, se usa la función strcmp() para comparar cadenas. En JavaScript, solo usas los operadores menor que y mayor que:

```
let a = "a";
let b = "b";
if (a < b) {
  // true
  console.log(a + " es menor que " + b);
} else if (a > b) {
  console.log(a + " es mayor que " + b);
} else {
  console.log(a + " y " + b + " son iguales.");
}
```

Puedes lograr un resultado similar usando el método localeCompare() heredado por las instancias de String.

Ten en cuenta que a == b compara las cadenas en a y b por ser igual en la forma habitual que distingue entre mayúsculas y minúsculas. Si deseas comparar sin tener en cuenta los caracteres en mayúsculas o minúsculas, usa una función similar a esta:

```
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
} // isEqual
```

En esta función se utilizan mayúsculas en lugar de minúsculas, debido a problemas con ciertas conversiones de caracteres UTF-8.

#### Primitivas String y objetos String

Ten en cuenta que JavaScript distingue entre objetos String y valores de primitivas string. (Lo mismo ocurre con Booleanos y Números).

Las cadenas literales (denotadas por comillas simples o dobles) y cadenas devueltas de llamadas a String en un contexto que no es de constructor (es decir, llamado sin usar la palabra clave new) son cadenas primitivas. JavaScript automáticamente convierte las primitivas en objetos String, por lo que es posible utilizar métodos del objeto String en cadenas primitivas. En contextos donde se va a invocar a un método en una cadena primitiva o se produce una búsqueda de propiedad, JavaScript ajustará automáticamente la cadena primitiva y llamará al método o realizará la búsqueda de la propiedad.

```
let s_prim = "foo";
let s_obj = new String(s_prim);

console.log(typeof s_prim); // Registra "string"
console.log(typeof s_obj); // Registra "object"
```

Las primitivas de String y los objetos String también dan diferente resultado cuando se usa eval(). Las primitivas pasadas a eval se tratan como código fuente; Los objetos String se tratan como todos los demás objetos, devuelven el objeto. Por ejemplo:

```
let s1 = "2 + 2"; // crea una string primitiva
let s2 = new String("2 + 2"); // crea un objeto String
console.log(eval(s1)); // devuelve el número 4
console.log(eval(s2)); // devuelve la cadena "2 + 2"
```

Por estas razones, el código se puede romper cuando encuentra objetos String y espera una string primitiva en su lugar, aunque generalmente los autores no necesitan preocuparse por la distinción.

Un objeto String siempre se puede convertir a su contraparte primitiva con el método valueOf().

```
console.log(eval(s2.valueOf())); // devuelve el número 4
```

### ¿Qué es un condicional?

Los condicionales nos permiten tomar decisiones, crear ramificaciones en la lógica del software que estamos construyendo: ¿bajo que condiciones debo ejecutar las instrucciones? ¿qué hago si no se cumple mis requisitios?

```
if (condición) {
// Instrucciones que se ejecutarán si se cumple la condición anterior
}
```

En en caso de solo disponer de una instrucción, puede ir todo en una misma línea sin llavas {}.

```
if (condición) // Instrucción;
```

#### Tipos de condicionales

![Imagen](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjh2a5SGDyuw-1xJaI-IcstfehgwACZpo2rCzVMloY4Nn-GILpBIan_5WvxZMDa-ZQgwwM0Hyq5rKfLy6iWbIjorQr_wetOZx9rR9dVZMTflesp0wS-U0W-gtCIh_Cu3roGIEGmzdgGsc/s1600/operadores-logicos-javascrippt.png)

Un sencillo condicional podría ser:

```
const nombre = "Victoria";

if (nombre == "Victoria") {
console.log("Hola Victoria");
}

// Hola Victoria
```

Podemos concadenar varias condiciones con &&.

```
if (10 > 2 && true && "HBO" != "Netflix") {
console.log("Entro seguro");
}

// Entro seguro
```

Debe cumplirse todas las condicionales para que se entre.

Si quieres también puedes dejarlo en una sola línea.

```
if (10 > 2 && true && "HBO" != "Netflix") console.log("Entro seguro");

// Entro seguro
```

En caso de buscar que entre si solo una sola condición se cumple, puedes utilizar ||.

```
miStreaming = "HBO";

if (miStreaming === "HBO" || miStreaming === "Netflix") {
console.log("Esta noche vemos una serie");
}

// Esta noche vemos una serie
```

#### else

Nos permite realizar otras acciones si no se cumple la condición.

```
if (condición) {
...
} else {
...
}
if (10 < 9) {
console.log("Entro seguro");
} else {
console.log("No entro");
}

// No entro
```

#### else if

Es posible tener varios condicionales, aunque solo se ejecutará uno de ellos.

```
if (condición) {
...
} else if (condición) {
...
} else {
...
}


const nombre = "Juan";

if (nombre == "Victoria") {
console.log("Hola Victoria");
} else if (nombre == "Juan") {
console.log("Hola Juan");
} else {
console.log("Hola desconocido");
}

// Hola Juan
```

#### Operador ternario

Es posible ejecutar en una sola instrucción con if con un else. Si estas empezando no te recomiendo usarla, pero no la olvides.

```
condicional ? "Valor si se cumple" : "Valor si no se cumple";

5 > 10 ? "Es verdad" : "Es mentira";

// Es mentira
```

Posee una particularidad muy interesante: devuelve el valor.

En el siguiente ejemplo guardo en saludo un texto dependiendo de la condición si se cumple o no.

```
const nombre = "Javi";

const saludo = nombre == "María" ? "Hola María" : "Hola desconocido";

console.log(saludo);
// Hola desconocido
```

#### Switch

Se comporta como un condición cuyo valor es igualado en todos los casos.

```
switch (variable) {
case 0:
...
break;
case 1:
...
break;
case 2:
...
break;
default:
...
break;
}
```

Veamos un ejemplo.

```
const edad = 65;

switch (edad) {
case 0:
console.log("Recién nacio");
break;
case 18:
console.log("Ya es un hombre");
break;
case 65:
console.log("Recién jubilado");
break;
default:
console.log("¿Aún estas vivo?");
break;
}

// Recién jubilado
```

#### Operador de coalescencia nulo

En ciertos momentos encontraremos valores nulos. Para evitar problemas, lo idóneo, es dar un valor por defecto. Dentro de JavaScript disponemos de una herramienta que devuelve el lado derecho si el izquierdo es null o undefined.

```
const variable1 = "Agua" || "Alternativa"
// "Agua"

const variable2 = null || "Alternativa"
// "Alternativa"
```

Actualmente se recomiendo utilizar ??, una evolución espiritual de ||, ya que devuelve en ciertas circunstancias falsos negativos con "" o 0.

Veamos un ejemplo. Todo lo presente en el siguiente código será retornado como Alternativa:

```
0 || "Alternativa"
"" || "Alternativa"
false || "Alternativa"
undefined || "Alternativa"
null || "Alternativa"
```

Mientras que si usamos ??:

```
0 ?? "Alternativa" // 0
"" ?? "Alternativa" // ""
false ?? "Alternativa" // false
undefined ?? "Alternativa" // "Alternativa"
null ?? "Alternativa" // "Alternativa"
```

Sin duda, más fiable.

#### Encadenamiento opcional

Si intento acceder a un valor que no existe, obtendremos undefined.

```
const perfil = {
nombre: "Miguel",
edad: 45,
activo: true,
direccion: {
calle: "falsa",
numero: 123
}
};

perfil.edad // 45
perfil.nombre // "Miguel"
perfil.apellidos // undefined
```

No hay ningún impedimento si trabajamos con un solo nivel de profundidad. Pero cuando queremos obtener un valor a más profundidad, y no existe, nos devolverá un error que parará la ejecución.

```
perfil.direccion.calle // "falsa"
perfil.comentarios.nombre // Uncaught TypeError
```

Para resolverlo podemos capturar el error y procesarlo o dar un undefined. Para lograrlo podremos utilizar un interrogante para marcarlo como opcional.

```
perfil.direccion.calle // "falsa"
perfil.comentarios?.nombre // undefined
```

Y, si lo mezclamos con un Operador de coalescencia (??), podemos incluso obtener un valor por defecto.

```
perfil.direccion.calle ?? "Sin calle" // "falsa"
perfil.comentarios?.nombre ?? "Sin comentarios" // "Sin comentarios"
```

### ¿Qué es un operador ternario?

#### Operador condicional (ternario)

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

#### Sintaxis

```
condición ? expr1 : expr2
```

#### Parámetros

condición Una expresión que se evalúa como true o false.

expr1, expr2 Expresión con valores de algún tipo.

#### Descripción

Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:

```
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");
```

También puedes asignar variables dependiendo del resultado de la condición ternaria:

```
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
```

También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):

```
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
? "Acceso Denegado"
: secondCheck
  ? "Acceso Denegado"
  : "Acceso Permitido";

console.log(access); // muestra "Acceso Permitido"
```

También puede usar operaciones ternarias en espacio vacío con el propósito de realizar diferentes operaciones:

```
var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);
```

También puede realizar más de una operación por caso, separándolas con una coma:

```
var stop = false,
  age = 23;

age > 18
  ? (alert("OK, puedes continuar."), location.assign("continue.html"))
  : ((stop = true), alert("Disculpa, eres menor de edad!"));
```

También puede realizar más de una operación durante la asignación de un valor. En este caso, el último valor separado por una coma del paréntesis será el valor asignado.

```
var age = 16;

var url =
  age > 18
? (alert("OK, puedes continuar."),
  // alert devuelve "undefined", pero será ignorado porque
  // no es el último valor separado por comas del paréntesis
  "continue.html") // el valor a ser asignado si age > 18
: (alert("Eres menor de edad!"),
  alert("Disculpa :-("),
  // etc. etc.
  "stop.html"); // el valor a ser asignado si !(age > 18)

location.assign(url); // "stop.html"
```

### ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

#### Empecemos con las Diferencias

1. Las declaraciones de funciones pueden ser ejecutadas antes de su definición.
2. Declaraciones a la derecha, expresiones a la izquierda.
3. Las expresiones son más difíciles de inspeccionar.

#### Las declaraciones de funciones pueden ser ejecutadas antes de su definición

Gracias a que las declaraciones de funciones son ascendidas al momento de ejecución de nuestro programa, nuestra función se puede ejecutar incluso antes de su definición.

```
nuevaFuncion() function nuevaFuncion() { console.log("Hola Mundo!") } //Hola Mundo!
nuevaFuncion()

function nuevaFuncion() {
  console.log("Hola Mundo!")
}

//Hola Mundo!
```

En cambio, esto no es posible con las expresiones de funciones, ya que no se sabe el valor que va a tener nuestra variable previamente declarada.

```
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

```
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

```
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

### ¿Qué es la palabra clave "this" en JS?

This en JavaScript es una palabra clave muy utilizada dentro de funciones y clases, pues tiene un valor flexible. This significa esto en español y, como su nombre indica, hace referencia al objeto en cuestión. Es decir, si estamos creando cualquier función, la palabra clave this se usará para representar o llamar al objeto que dicha función está modificando.

A continuación, te ponemos un ejemplo con una variable llamada ejemplo:

```
const ejemplo = {

color: azul,

func: function ( ) {

return this.color;

},

};
```

Esta variable tiene dos propiedades, function y color. Aquí, this hace referencia a la constante ejemplo, pues es el objeto al que pertenece en este contexto. Entonces, al hacer que la función nos devuelva la propiedad this.color, el programa entiende que lo que hará realmente es devolvernos la propiedad ejemplo.color.

```
console.log (ejemplo.func());

// resultado esperado: azul
```

#### ¿Cómo se utiliza this en JavaScript?

Una de las formas más comunes en las que se utiliza la palabra clave this en JavaScript es en las clases. Al leer nuestro post sobre las clases en JavaScript, podrás ver que utilizamos this para acceder a las distintas propiedades de una clase. Allí, accedemos a ellas utilizando el comando objeto.propiedad. La diferencia es que, en vez de utilizar el nombre del objeto, utilizamos this. Esto es muy útil cuando queremos cambiar el nombre del objeto o este no tiene un nombre específico.

A continuación, te ponemos un ejemplo en el que encontramos dos formas de utilizar la palabra clave this en JavaScript. Puede que reconozcas este ejemplo, pues es la función que hemos usado para crear el método shuffle.

```
Array.prototype.shuffle = function ( ) => {

var i = this.length, j, temp;

if (i == 0) return this;

while ( –i ) {

j = Math.floor (Math.random ( ) * (i + 1) );

temp = this [i]

this [i] = this [j];

this [j] = temp;

}

return this;

}

}
```

En este contexto, cuando nosotros estamos alterando el prototipo del objeto, la palabra clave this hace referencia a un array. Por ello, utilizamos la palabra clave this para poder acceder a sus propiedades. En la segunda línea de código de este método, puedes ver escrito this.length. En este caso, estamos usando this para acceder a la propiedad de longitud del array en cuestión. Además, hemos atribuido esta propiedad a la variable i.

Del mismo modo, estamos utilizando la palabra clave this como resultado de la función, pues la ponemos después de la palabra clave return. En este sentido, estamos diciendo que, después de la función, el programa nos devolverá el array que estamos manipulando.

Ten en cuenta que, cuando utilizamos this fuera de un objeto, clase o función, su valor es igual al objeto global. Para saber más sobre esto, te invitamos a leer el post de la MDN sobre this en el contexto global.

## Fuentes

[https://aws.amazon.com/es/what-is/javascript](https://aws.amazon.com/es/what-is/javascript/)

[https://es.javascript.info/types](https://es.javascript.info/types)

[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global\_Objects/String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)

[https://programadorwebvalencia.com/cursos/javascript/condicionales/#:\~:text=Los%20condicionales%20nos%20permiten%20tomar,condiciones%20debo%20ejecutar%20las%20instrucciones%3F](https://programadorwebvalencia.com/cursos/javascript/condicionales/)

[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional\_operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

[https://www.escuelafrontend.com/declaraciones-de-funciones-y-expresiones-de-funciones](https://www.escuelafrontend.com/declaraciones-de-funciones-y-expresiones-de-funciones)

[https://keepcoding.io/blog/que-es-this-en-javascript/](https://keepcoding.io/blog/que-es-this-en-javascript/)
