// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = []
  for(clave in objeto){
    nuevoArray.push([clave, objeto[clave]])
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var caracteres = {};
  for(i=0; i<string.length; i++){
    if(caracteres.hasOwnProperty(string[i])){
      caracteres[string[i]] += 1 ;
    }
    else{
      caracteres[string[i]] = 1;
    }
  }
  return caracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = '';
  var minusculas = '';
for(var i=0; i<s.length; i++){
  if(s[i]=== s[i].toUpperCase()){
    mayusculas += s[i];
  }
  else {
    minusculas += s[i];
  }
}
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // var convertToArray = str.split(' ');//[The, Henry, Challenge, is, close!]
  // var palabraInvertida = '';
  // var nuevaFrase = ''
  // for(i=0; i<convertToArray.length; i++){
  //   for(j=0; j<convertToArray[i].length; j++){
  //     palabraInvertida = convertToArray[i][j] + palabraInvertida;
  //   }
  //   nuevaFrase += palabraInvertida + ' ';
  //   palabraInvertida = '';
  // }
  // return nuevaFrase.trimEnd();

   //["The", "Henry", "Challenge", "is", "close!"]
        const cambios = str.split(" ").map(function (el) {
          //             [T,h,e]->[e,h,T]->"ehT"
              return el.split("").reverse().join("")})
              //cambios = ["ehT","yrneH,"egnellahC","si","!esolc"]
              return cambios.join(" ");//"ehT yrneH egnellahC si !esolc"        
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();// 236 -> "236"
  var numInvertido = num.split('').reverse().join('');//'236'-> ['2','3','6']->['6','3','2']->'632'
  if(numInvertido === num){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // return cadena.replace("a","").replace("b","").replace("c","");
  var sinAbc = '';
  for(var i=0; i<cadena.length; i++){
    if(cadena[i]==="a"||cadena[i]==="b"||cadena[i]==="c"){
      continue;
    }
    else{
      sinAbc += cadena[i];
    }
  }
  return sinAbc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //ORDENAMIENTO BUBBLESORT.
  let swap = true
while(swap){
  swap = false;
  for(let i=0; i<arr.length-1; i++){ //array.length -1 porque en la linea de abajo compara el actual con el siguiente.
    if(arr[i].length> arr[i+1].length){
      let aux = arr[i]  //guardamos el valor actual en una variable aux,
      arr[i] = arr[i+1]   //al valor actual le asignamos el valor del siguiente,
      arr[i+1] = aux    //al valor siguiente le asignamos el valor de actual guardado en aux.
      swap = true //se activa de nuevo el ingreso al while.
    }
  }
}
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  var elementos = [];
   for(var i=0; i<arreglo1.length; i++){
     for(var j=0; j<arreglo2.length; j++){
       if(arreglo1[i]=== arreglo2[j]){
        elementos.push(arreglo1[i]);
       }
     }
   }
   return elementos;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

