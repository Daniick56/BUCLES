let number;
while (isNaN(number)) {
    number = parseFloat(prompt("Enter the number"));
    if (isNaN(number)) {
        alert("Enter a numerical value.");
    }
}
