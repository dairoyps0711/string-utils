# string-utils

Pequeñas utilidades de texto en JavaScript, sin dependencias externas.

## Funciones

- `reverseWords(str)` — invierte el orden de las palabras de una cadena.
- `countVowels(str)` — cuenta las vocales (mayúsculas o minúsculas) de una cadena.
- `isPalindrome(str)` — indica si una cadena es un palíndromo, ignorando mayúsculas, espacios y puntuación.

## Uso

```js
const { reverseWords, countVowels, isPalindrome } = require('./src/stringUtils');

reverseWords('hola mundo');   // 'mundo hola'
countVowels('Hello World');   // 3
isPalindrome('Anita lava la tina'); // true
```

## Tests

Este proyecto usa el runner de pruebas integrado de Node.js (sin dependencias):

```bash
npm test
```
