function saveCookie() {
    var valor1 = document.getElementById("input1").value;
    var valor2 = document.getElementById("input2").value;
  
    document.cookie = "name=" + valor1;
    document.cookie = "color=" + valor2;
  
    alert("Se ha grabado la cookie correctamente.");
  }
  function readCookie() {
    var cookies = document.cookie.split("; ");
    var valores = {};
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      valores[cookie[0]] = cookie[1];
    }
  
    var valor1 = valores["name"];
    var valor2 = valores["color"];
  
    if (valor1 && valor2) {
      alert("Valores de la cookie:\nNane: " + valor1 + "\nColor: " + valor2);
    }else if (valor1 ) {
        alert("Valores de la cookie:\nNane: " + valor1 );
    } else if (valor2) {
        alert("Valores de la cookie:\nColor: " + valor2 );
    } 
    else {
      alert("No se encontraron valores en la cookie.");
    }
  }