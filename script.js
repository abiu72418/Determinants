function calculateDeterminant() {
    var a = parseInt(document.getElementById("value1").value);
    var b = parseInt(document.getElementById("value2").value);
    var c = parseInt(document.getElementById("value3").value);
    var d = parseInt(document.getElementById("value4").value);
    var e = parseInt(document.getElementById("value5").value);
    var f = parseInt(document.getElementById("value6").value);
    var g = parseInt(document.getElementById("value7").value);
    var h = parseInt(document.getElementById("value8").value);
    var i = parseInt(document.getElementById("value9").value);

    var determinant = (a * e * i) + (b * f * g) + (c * d * h) - (g * e * c) - (h * f * a) - (i * d * b);
    document.getElementById("result").innerHTML = "Result: " + determinant;
  }
  function clearValues() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("value3").value = "";
    document.getElementById("value4").value = "";
    document.getElementById("value5").value = "";
    document.getElementById("value6").value = "";
    document.getElementById("value7").value = "";
    document.getElementById("value8").value = "";
    document.getElementById("value9").value = "";
    document.getElementById("a11").value = "";
    document.getElementById("a12").value = "";
    document.getElementById("a21").value = "";
    document.getElementById("a22").value = "";
    document.getElementById("result").innerHTML = "Result: ";
    document.getElementById("result2").innerHTML = "Result: ";
  }
  function calculateDeterminant_2() {
    var a = parseInt(document.getElementById("a11").value);
    var b = parseInt(document.getElementById("a12").value);
    var c = parseInt(document.getElementById("a21").value);
    var d = parseInt(document.getElementById("a22").value);
    var determinant = a * d - b * c;
    document.getElementById("result2").innerHTML = "Result: " + determinant;
  }
