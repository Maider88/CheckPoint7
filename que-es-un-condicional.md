# ¿Qué es un condicional?

Los condicionales nos permiten tomar decisiones, crear ramificaciones en la lógica del software que estamos construyendo: ¿bajo que condiciones debo ejecutar las instrucciones? ¿qué hago si no se cumple mis requisitios?

```javascript
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

```javascript
const nombre = "Victoria";

if (nombre == "Victoria") {
console.log("Hola Victoria");
}

// Hola Victoria
```

Podemos concadenar varias condiciones con &&.

```javascript
if (10 > 2 && true && "HBO" != "Netflix") {
console.log("Entro seguro");
}

// Entro seguro
```

Debe cumplirse todas las condicionales para que se entre.

Si quieres también puedes dejarlo en una sola línea.

```javascript
if (10 > 2 && true && "HBO" != "Netflix") console.log("Entro seguro");

// Entro seguro
```

En caso de buscar que entre si solo una sola condición se cumple, puedes utilizar ||.

```javascript
miStreaming = "HBO";

if (miStreaming === "HBO" || miStreaming === "Netflix") {
console.log("Esta noche vemos una serie");
}

// Esta noche vemos una serie
```

#### else

Nos permite realizar otras acciones si no se cumple la condición.

```javascript
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

```javascript
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

```javascript
condicional ? "Valor si se cumple" : "Valor si no se cumple";

5 > 10 ? "Es verdad" : "Es mentira";

// Es mentira
```

Posee una particularidad muy interesante: devuelve el valor.

En el siguiente ejemplo guardo en saludo un texto dependiendo de la condición si se cumple o no.

```javascript
const nombre = "Javi";

const saludo = nombre == "María" ? "Hola María" : "Hola desconocido";

console.log(saludo);
// Hola desconocido
```

#### Switch

Se comporta como un condición cuyo valor es igualado en todos los casos.

```javascript
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

```javascript
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

```javascript
const variable1 = "Agua" || "Alternativa"
// "Agua"

const variable2 = null || "Alternativa"
// "Alternativa"
```

Actualmente se recomiendo utilizar ??, una evolución espiritual de ||, ya que devuelve en ciertas circunstancias falsos negativos con "" o 0.

Veamos un ejemplo. Todo lo presente en el siguiente código será retornado como Alternativa:

```javascript
0 || "Alternativa"
"" || "Alternativa"
false || "Alternativa"
undefined || "Alternativa"
null || "Alternativa"
```

Mientras que si usamos ??:

```javascript
0 ?? "Alternativa" // 0
"" ?? "Alternativa" // ""
false ?? "Alternativa" // false
undefined ?? "Alternativa" // "Alternativa"
null ?? "Alternativa" // "Alternativa"
```

Sin duda, más fiable.

#### Encadenamiento opcional

Si intento acceder a un valor que no existe, obtendremos undefined.

```javascript
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

```javascript
perfil.direccion.calle // "falsa"
perfil.comentarios.nombre // Uncaught TypeError
```

Para resolverlo podemos capturar el error y procesarlo o dar un undefined. Para lograrlo podremos utilizar un interrogante para marcarlo como opcional.

```javascript
perfil.direccion.calle // "falsa"
perfil.comentarios?.nombre // undefined
```

Y, si lo mezclamos con un Operador de coalescencia (??), podemos incluso obtener un valor por defecto.

```javascript
perfil.direccion.calle ?? "Sin calle" // "falsa"
perfil.comentarios?.nombre ?? "Sin comentarios" // "Sin comentarios"
```
