function saveData() {
    var valor1 = document.getElementById("input1").value;
    var valor2 = document.getElementById("input2").value;
  
    localStorage.setItem("name", valor1);
    localStorage.setItem("color", valor2);
  
    alert("Se han guardado los datos.");
  }
  function readData() {

    var valor1 = localStorage.getItem("name");
    var valor2 = localStorage.getItem("color");
  
    if (valor1 && valor2) {
      alert("Valores guardado en local storage:\nName: " + valor1 + "\nColor: " + valor2);
    }else if (valor1 ) {
        alert("Valor guardado:\nName: " + valor1 );
    } else if (valor2) {
        alert("Valor guardado:\nColor: " + valor2 );
    } 
    else {
      alert("No se encontraron valores en local storage.");
    }
  }