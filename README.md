# Solución Práctica V - Ex Aula 



Andrea Álvarez - 00073824

## Preguntas de Guía (Página 13)

1. *¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props?*

- ClassName en React es la forma en la que maneja las clases en CSS. Se utiliza está palabra para que no haya conflicto o confusion con la palabra reservada *class* en JS.
- Según tengo entendido, las props no tienen un límite, pero no es una buena práctica o recomendable pasar más de 7 props a un solo componenete, en ese caso es mejor utilizar objetos.
- Las props son definidas por nosotros, así como definimos cualquier otro componenete u objeto en algún lenguaje de programación. Nosotros somos quienes les asignamos el valor, su funcionalidad y en donde lo vamos a utilizar. 


#### Aclaraciones del ejercicio 04-05 y final
 Para no volver a invocar a VITE para el ejercicio final, lo que decidí hacer fue reciclar la estructura del ejercicio 04-05 para el ejercicio final. Por lo que, cree otra nueva carpeta en la que guarde los archivos .jpx del ejercicio 04-05 y final, y afuera de está en el archivo predeterminado app.jpx importé a cada archivo para ejecutarlo.
Resultando en que para poder ejecutar uno de los dos ejercicios solo se debe cambiar a quién se llama de la siguiente manera: 
```bash
function App() {
  return <EjercicioFinal />;
} 
```

O para el ejercicio 5:
```bash
function App() {
  return <Ejercicio05 />;
}  
