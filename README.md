1. **¿Qué sucedió al usar async y await?**

   Al usar async y await, el programa espera a que se resuelvan las promesas antes de continuar con la siguiente acción. Esto hace que la ejecución del programa sea más secuencial y fácil de leer.

2. **¿Qué sucedió al usar el método then()?**

   Al usar el método `.then()`, también puedes manejar las promesas de manera asincrónica, pero la estructura del código es diferente. En lugar de usar `await`, debes encadenar `.then()` para manejar las promesas una tras otra. Es una forma más antigua de trabajar con promesas y puede resultar en un código más anidado.

3. **¿Qué diferencias encontraste entre async, await y el método then()?**

   - Con async/await, el código parece más sincrónico y es más fácil de leer y entender, ya que no tienes que anidar `.then()` para manejar múltiples promesas.
   - El método `.then()` es útil cuando necesitas más control sobre el flujo de ejecución o cuando estás trabajando con código más antiguo que aún no ha adoptado async/await.
   - Async/await es generalmente preferido en el desarrollo moderno de JavaScript debido a su legibilidad y facilidad de uso.
