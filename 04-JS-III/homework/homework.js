// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // return array[array.length -1];
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // return array.map(e => e + 1);
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world !'
  // Tu código:
  // return palabras.join(" ");
  var fraseCompleta = "";
  for (i = 0; i < palabras.length; i++) {
    //1er vuelta del for
    fraseCompleta = fraseCompleta + " " + palabras[i]; // '' + ' ' + 'Henry' = ' Henry'
  }
  return fraseCompleta.trimStart();
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // return array.includes(elemento);
  for (i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // return numeros.reduce(function (acc, el){ return acc + el });
  var acumulador = 0;
  for (i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return acumulador;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // var promedio = resultadosTest.reduce(function (acc, el){ return acc + el }) / resultadosTest.length;;
  // return promedio;
  var i = 0;
  var suma = 0;
  while (i < resultadosTest.length) {
    suma += resultadosTest[i];
    i++;
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var elMasGrande = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    if (elMasGrande < numeros[i]) {
      elMasGrande = numeros[i];
    }
  }
  return elMasGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplica = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }
  for (i = 0; i < arguments.length; i++) {
    multiplica *= arguments[i];
  }
  return multiplica;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  // 1= Domingo
  // 2= Lunes
  // 3= Martes
  // 4= Miercoles
  // 5= Jueves
  // 6= Viernes
  // 7= Sabado
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
  else{
    return 'Numero incorrecto';
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // n = 950
  var nString = n.toString();  //'950'
  // if(nString[0] === '9'){
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return nString[0] === '9';
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  // for (var i =0 ; i < arreglo.length - 1; i++) {//-1 es para iterar hasta la anteultima posicion, porque en la condicion de abajo lo va a comparar con el ultimo elemento
  //   if(arreglo[i] !== arreglo[i+1]){//compara el elemento actual con el siguiente
  //     return false
  //   }
  // }
  // return true
  
  for(i= 1; i<arreglo.length; i++){
    if(arreglo[0] !== arreglo[i]){
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for(i=0; i<array.length; i++){
    if(array[i] === 'Enero'||array[i] === 'Marzo'||array[i] === 'Noviembre'){
      meses.push(array[i]);
    }
  }
  if(meses.length === 3){
    return meses
  }
  else{
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresA100 = [];
  for(i=0; i<array.length; i++){
    if(array[i] > 100){
      mayoresA100.push(array[i]);
    }
  }
  return mayoresA100;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoValor = [];
  for(i=0 ; i<10; i++){
    numero +=2;
    if(i === numero){
      nuevoValor = "Se interrumpió la ejecución";
      break;
    }
    else{
      nuevoValor.push(numero);
    }
  }
  return nuevoValor;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i<10; i++){
    if(i === 5){
      continue;
    }
    else{
      numero += 2;
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
