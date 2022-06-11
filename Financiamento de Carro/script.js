document.getElementById("btn_calcular").onclick = function()
{
    var lbl_resultado = document.getElementById("lbl_resultado")
    var renda = parseFloat(document.getElementById("txt_renda").value)
    var bem = parseFloat(document.getElementById("txt_bem").value)
    var entrada = parseFloat(document.getElementById("txt_entrada").value)
    var taxa_juros = parseFloat(document.getElementById("txt_taxa_juros").value)/100
    var numero_prestacoes = parseInt(document.getElementById("txt_prestacoes").value)

    if(renda == 0 || bem == 0 || taxa_juros == 0 || prestacao == 0 || entrada == 0)
    {
        lbl_resultado.innerHTML = "Complete todos os dados!"
        return;
    }
    
    var prestacoes = Math.pow(1 + taxa_juros, numero_prestacoes)
    
    var prestacao = ((bem - entrada)*(prestacoes * (0.0119)) / (prestacoes - 1)).toFixed(2)
    
    var prestacaoMaxima = renda * 0.30
    var resultado = ""

    if(prestacaoMaxima < prestacao)
    {
        resultado = "O seu financiamento foi Reprovado!"
    }
    else
    {
        resultado = `O seu financiamento foi Aprovado! <br> O Valor da prestação é de R$${prestacao}`
    }

    lbl_resultado.innerHTML = resultado
}

document.getElementById("btn_limpar").onclick = function()
{
    lbl_resultado.innerHTML = ""
}
