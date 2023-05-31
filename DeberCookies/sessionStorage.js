function saveData() {
    var valor1 = document.getElementById("input1").value;
    var valor2 = document.getElementById("input2").value;
  
    sessionStorage.setItem("name", valor1);
    sessionStorage.setItem("color", valor2);
  
    alert("Se han guardado los datos.");
  }
  function readData() {

    var valor1 = sessionStorage.getItem("name");
    var valor2 = sessionStorage.getItem("color");
  
    if (valor1 && valor2) {
      alert("Valores guardado en session storage:\nName: " + valor1 + "\nColor: " + valor2);
    }else if (valor1 ) {
        alert("Valor guardado en session storage:\nName: " + valor1 );
    } else if (valor2) {
        alert("Valor guardado en session storage:\nColor: " + valor2 );
    } 
    else {
      alert("No se encontraron valores en session storage.");
    }
  }