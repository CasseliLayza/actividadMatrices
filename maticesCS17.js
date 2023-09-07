// clase17 Matrices

//1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro de una matriz.

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matrizCincoXCinco = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [2, 4, 5, 3, 1],
  [1, 3, 5, 4, 2],
  [1, 2, 3, 4, 5],
];

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

function sumatoriaM(Mtz) {
  let suma = 0;
  for (let i = 0; i < Mtz.length; i++) {
    for (let j = 0; j < Mtz[i].length; j++) {
      suma += Mtz[i][j];
    }
  }
  return suma;
}

console.log(sumatoriaM(matrizCincoXCinco));

// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

function generarMatriz() {
  let matriz = [];
  let valor = 1;

  for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
      fila.push(valor);
      valor++;
    }
    matriz.push(fila);
  }

  return matriz;
}

console.table(generarMatriz());

// 3) Por último, vamos a generar dos funciones:
// Una va a sumar los valores en la diagonal marcada en rojo.
// La otra va a sumar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.

function sumaDiagonalesR(matriz) {
  let sumaDiagonalR = 0;

  for (let i = 0; i < matriz.length; i++) {
    sumaDiagonalR += matriz[i][i];
  }

  return "Rojo: " + sumaDiagonalR;
}

let matrizGenerada = generarMatriz();

console.log(sumaDiagonalesR(matrizGenerada));

function sumaDiagonalesV(matriz) {
  let sumaDiagonalV = 0;

  for (let i = 0; i < matriz.length; i++) {
    sumaDiagonalV += matriz[i][matriz.length - 1 - i];
  }

  return "Verde: " + sumaDiagonalV;
}

console.log(sumaDiagonalesV(matrizGenerada));
