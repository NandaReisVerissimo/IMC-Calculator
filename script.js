function calculate () {
    let height = document.getElementById ("height").value/100
    let weight = document.getElementById ("weight").value
    let imc = weight/(height**2)
    let text = ""

    if (imc<18.6) {
        text = "underweight"
    } else if (imc<25.0) {
        text = "Normal"
    } else if (imc<30.0) {
        text = "Overweight"
    } else if (imc>29.9) {
        text = "Obesity"
    } else if (imc>39.9) {
        text = "Severe Obesity"
    }
    document.getElementById ("text-area").innerText = text
}
