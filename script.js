//Ejercicio 1
function parOImpar(numero) {
    if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }

  parOImpar(7);


//Ejercicio 2
function mayorOMenor(num1, num2) {
    if (num1 > num2) {
      console.log("El primer número es mayor");
    } else if (num2 > num1) {
      console.log("El segundo número es mayor");
    } else {
      console.log("Ambos números son iguales");
    }
  }

  mayorOMenor(10, 5);


//Ejercicio 3
function multiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log("El número es múltiplo de 5");
    } else {
      console.log("El número no es múltiplo de 5");
    }
  }

  multiploDeCinco(15);


//Ejercicio 4
function numerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  numerosHasta(5);


//Ejercicio 5
function palabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }

  palabraNVeces("Hola", 3);


//Ejercicio 6
function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  const miArrayUno = [1, 2, 3, 4, 5];
  imprimirArray(miArrayUno);


//Ejercicio 7
function arraySinPosicionCinco(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }

  const miArrayDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arraySinPosicionCinco(miArrayDos);


//Ejercicio 8
function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }

  const miArrayTres = [1, 2, 3, 4, 5];
  multiplicarArrayPorNumero(miArrayTres, 2);