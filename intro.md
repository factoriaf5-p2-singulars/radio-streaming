# test-radio-streaming

## Introducción

Vamos a construir una aplicación para seleccionar y buscar emisoras de radio en streaming.
Los datos los podemos obtener de la api: http://95.179.139.106/json/stations/search?name=

## Instrucciones
1. Crea el proyecto: `ng new radio-streaming --package-manager=pnpm`
2. Elimina las dependencias de karma y jasmine: `pnpm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core`
3. Instala dependencias de jest: `pnpm add -D jest @types/jest jest-environment-jsdom`
4. Modifica en el fichero `angular.json` la clave `"builder": "@angular-devkit/build-angular:karma",`, sustituyendo `karma` por `jest`
5. Modifica `tsconfig.spec.json` reemplaza el valor `jasmine` de la propiedad types con `jest`

## Referencias

[Testing Angular: A Guide to Robust Angular Applications](https://testing-angular.com/)
[Guía Oficial](https://angular.dev/guide/testing)


## Tests

### Describe: El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA".
   _Test:_<br>
   - El nombre de la aplicación debe mostrarse en algún lugar => "RADIO SINGULARS" <br>

### Describe: Debemos poder buscar radios por nombre
   _Tests:_<br>
   - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
   - La aplicación debe tener un botón de búsqueda => Texto "Buscar"
   - Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez

### Describe: Listado de emisoras
   _Tests:_
   - Debe existir un listado de emisoras
   - El listado debe inicializar vacío
   - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado
   - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"
