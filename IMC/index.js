document.getElementById("Calcular").onclick = function () {
    var nome = document.getElementById("txt_nome").value
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value

    if (altura != "" && peso != "" && nome != "") 
    {
        var imc = peso / (altura * altura)
        imc = imc.toFixed(2);

        var pesoMinimo = 18.5 * (altura * altura)
        var pesoMaximo = 27.9 * (altura * altura)

        pesoMinimo = pesoMinimo.toFixed(0);
        pesoMaximo = pesoMaximo.toFixed(0);

        var resultado = document.getElementById("resultado")
        resultado.style.display = "block"

        var txt_situacao = document.getElementById("situacao")
        var txt_imc = document.getElementById("imc")
        var txt_nome = document.getElementById("nome")
        var txt_pesoIdeal = document.getElementById("pesoIdeal")

        if (imc < 20) {
            txt_situacao.innerHTML = "abaixo do peso!"
        }
        else if (imc > 20 && imc <= 25) {
            txt_situacao.innerHTML = "no Peso Ideal!"
        }
        else if (imc > 25 && imc <= 30) {
            txt_situacao.innerHTML = "no Sobrepeso!"
        }
        else if (imc > 30 && imc <= 35) {
            txt_situacao.innerHTML = "em Obesidade Moderada!"
        }
        else if (imc > 35 && imc <= 40) {
            txt_situacao.innerHTML = "em Obesidade Severa!"
        }
        else if (imc > 40 && imc <= 50) {
            txt_situacao.innerHTML = "em Obesidade Morbida!"
        }
        else {
            txt_situacao.innerHTML = "muito Gordo"
        }

        txt_nome.innerHTML = nome
        txt_imc.innerHTML = imc
        txt_pesoIdeal.innerHTML = pesoMinimo + "kg a " + pesoMaximo + "kg"
    }
    else 
    {
        alert("Preencha todos os campos")
    }
};

document.getElementById("Limpar").onclick = function () {
    var resultado = document.getElementById("resultado")
    resultado.style.display = "none"
};