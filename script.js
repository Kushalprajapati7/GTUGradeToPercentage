function SPI_CPI_CGPA_To_Percentage() {
    var numOne, result;
    numOne = parseFloat(document.getElementById("num").value);
    result = (numOne - 0.5)*10;
    document.getElementById("answer").value = result;
}