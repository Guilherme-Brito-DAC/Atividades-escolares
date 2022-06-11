document.getElementById("btn_calcular").onclick = function()
{
    var resultado = document.getElementById("lbl_resultado")
    var nome = document.getElementById("txt_nome").value
    var peso = document.getElementById("txt_peso").value
    var distancia = document.getElementById("txt_distancia").value 
    var horas =  parseInt(document.getElementById("txt_horas").value)
    var minutos =  parseInt(document.getElementById("txt_minutos").value)
    var segundos =  parseInt(document.getElementById("txt_segundos").value)

    if(nome != "" && peso != "" && distancia != "" && horas != "" && minutos != "" && segundos != "")
    {
        var tempo_em_horas = horas + minutos/60 + segundos/3600
        var tempo_em_minutos = tempo_em_horas*60
        
        var velocidadeMedia = (distancia/tempo_em_horas).toFixed(2)
        var pace = ((60/velocidadeMedia)).toFixed(2)
        var gastoCalorico = Math.round(velocidadeMedia * peso * 0.0175 * tempo_em_minutos)
        
        resultado.innerHTML = `Olá ${nome}! Você percorreu ${distancia} km em ${horas}h, ${minutos} min e ${segundos}s.<br> Isso quer dizer que a sua velocidade média foi de ${velocidadeMedia} km/h, o que o corresponde a um pace de ${pace}min/km.<br> Com ${peso}kg, você gastou cerca de ${gastoCalorico} cal`
    }
    else
    {
        resultado.innerHTML = "Complete todos os campos acima!";
    }
}

document.getElementById("btn_limpar").onclick = function()
{
    document.getElementById("lbl_resultado").innerHTML = ""
}
