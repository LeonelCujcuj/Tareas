var mes
var carnet
var nombreCompleto

mes = 10
carnet = 22001302
nombreCompleto = "Jorge Leonel Cujcuj de León"


if ((mes => 1) && (mes <= 2)){
  console.log("es invierno");
} else {
  if ((mes => 3) && (mes <= 5)) {
    console.log("es primavera");
  } else {
    if ((mes => 6) && (mes <= 8)) {
      console.log("es verano");
    } else {
      if ((mes => 9) && (mes <= 11)) {
        console.log("es otoño");
      } else {
        if (mes = 12) {
          console.log("es invierno");
        } else {
          if (mes > 12) {
          console.log(mes + " es numero invalido");
        } else {
            console.log("número invalido");
          }
		}
      }
	}
  }
} 
console.log(carnet)
console.log(nombreCompleto)