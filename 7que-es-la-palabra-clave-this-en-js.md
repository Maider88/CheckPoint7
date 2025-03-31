# ¿Qué es la palabra clave "this" en JS?

This en JavaScript es una palabra clave muy utilizada dentro de funciones y clases, pues tiene un valor flexible. This significa esto en español y, como su nombre indica, hace referencia al objeto en cuestión. Es decir, si estamos creando cualquier función, la palabra clave this se usará para representar o llamar al objeto que dicha función está modificando.

A continuación, te ponemos un ejemplo con una variable llamada ejemplo:

```javascript
const ejemplo = {

color: azul,

func: function ( ) {

return this.color;

},

};
```

Esta variable tiene dos propiedades, function y color. Aquí, this hace referencia a la constante ejemplo, pues es el objeto al que pertenece en este contexto. Entonces, al hacer que la función nos devuelva la propiedad this.color, el programa entiende que lo que hará realmente es devolvernos la propiedad ejemplo.color.

```javascript
console.log (ejemplo.func());

// resultado esperado: azul
```

#### ¿Cómo se utiliza this en JavaScript?

Una de las formas más comunes en las que se utiliza la palabra clave this en JavaScript es en las clases. Al leer nuestro post sobre las clases en JavaScript, podrás ver que utilizamos this para acceder a las distintas propiedades de una clase. Allí, accedemos a ellas utilizando el comando objeto.propiedad. La diferencia es que, en vez de utilizar el nombre del objeto, utilizamos this. Esto es muy útil cuando queremos cambiar el nombre del objeto o este no tiene un nombre específico.

A continuación, te ponemos un ejemplo en el que encontramos dos formas de utilizar la palabra clave this en JavaScript. Puede que reconozcas este ejemplo, pues es la función que hemos usado para crear el método shuffle.

```javascript
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
