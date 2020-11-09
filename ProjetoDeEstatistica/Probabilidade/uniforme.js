

function cria_Div(){
    if(intervalos.value === 'entre'){
        let insere_inicio = document.getElementById('insere_inicio')
        let cria_inicio = document.createElement('input')
        cria_inicio.className = 'form-control'
        cria_inicio.placeholder = 'Início'
        cria_inicio.id = 'cria_inicio'

        let insere_fim = document.getElementById('insere_fim')
        let cria_Fim = document.createElement('input')
        cria_Fim.className = 'form-control'
        cria_Fim.placeholder = 'Fim'
        cria_Fim.id = 'cria_Fim'


        insere_inicio.appendChild(cria_inicio)
        insere_fim.appendChild(cria_Fim)

    }else{
        let insere_inicio = document.getElementById('insere_inicio').innerHTML = ''
        let insere_fim = document.getElementById('insere_fim').innerHTML = ''
        
    }

    if(intervalos.value === 'maior' || intervalos.value === 'menor'){
        let insere_quant = document.getElementById('insere_quant')
        let cria_quanti = document.createElement('input')
        cria_quanti.className = 'form-control'
        cria_quanti.placeholder = 'Quantidade'
        cria_quanti.id = 'cria_quanti'

        document.getElementById('insere_quant').innerHTML = ''
        insere_quant.appendChild(cria_quanti)

    }else{
        let insere_quant = document.getElementById('insere_quant').innerHTML = ''
    }

}


// Funçaõ que retorna a criação de um elemento
function criaTag(elemento){
    return document.createElement(elemento)
}

function calcular(){

    let intervalos = document.getElementById('intervalos')
    let valor_Min = Number(document.getElementById('valor_Min').value)
    let valor_Max = Number(document.getElementById('valor_Max').value)
    let media = (valor_Max + valor_Min) / 2


    if (valor_Min == "" || valor_Max == ""){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }

    if (valor_Min === valor_Max){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }

    if (intervalos.value == ""){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }

    if (intervalos.value == "entre" && document.getElementById('cria_inicio').value == ""){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }

    if (intervalos.value == "entre" && document.getElementById('cria_Fim').value == ""){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }
    
    if ((intervalos.value == "menor" || intervalos.value == "maior") && document.getElementById('cria_quanti').value == ""){
        alert("Ops!" + "Digite dados válidos!", "error");
        return
    }
  
    console.log('media '+ media)

    let variancia = ((valor_Max - valor_Min) ** 2) / 12
    let dp = Math.sqrt(variancia)
    let cv = (dp / media) * 100
    var probabi = 0

    //Maior que
    if(intervalos.value === 'maior') {
        let cria_quanti = document.getElementById('cria_quanti').value
        var int = valor_Max - cria_quanti
        probabi = (1 / (valor_Max - valor_Min)) * int * 100
    }
    else if(intervalos.value === 'menor') {
        let cria_quanti = document.getElementById('cria_quanti').value
        var int = cria_quanti - valor_Min
        probabi = (1 / (valor_Max - valor_Min)) * int * 100
    }
    else if(intervalos.value === 'entre') {
        let cria_inicio = document.getElementById('cria_inicio').value
        let cria_Fim = document.getElementById('cria_Fim').value
        var int = cria_Fim - cria_inicio
        probabi = (1 / (valor_Max - valor_Min)) * int * 100
    }
    

    let Prob = probabi.toFixed(2)
    let desvio_Pad = dp.toFixed(2)
    let Coeficiente_Pad = cv.toFixed(2)
   

    console.log('variancia '+ variancia)
    console.log('dp '+ dp)
    console.log('cv '+ cv)





    // Criação da Tabela
    let tabela = document.getElementById('tabela').innerHTML = ""
    tabela = document.getElementById('tabela')

    let thead = criaTag("thead")
    let tbody = criaTag("tbody")
    let tfoot = criaTag("tfoot")

    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)

    let indiceTabela = ["Probabilidade", "Média", "Desvio Padrão", "Coeficiente de Variação"]


    let linhaHead = criaTag("tr")

    function criaCelula(tag, text) {
        tag = criaTag(tag)
        tag.textContent = text
        return tag
    }
    

    for(let i = 0; i <= indiceTabela.length -1 ; i++){
        let th = criaCelula("th" , indiceTabela[i])
        linhaHead.appendChild(th)
    }
   
    thead.appendChild(linhaHead)


    let linhaBody = criaTag("tr")
    let div_Probabi = criaCelula("td", `${Prob} %`)
    let div_Media = criaCelula("td", media)
    let div_DesPad = criaCelula("td", `${desvio_Pad} %`)
    let div_CoeVari = criaCelula("td", `${Coeficiente_Pad} %`)
    linhaBody.appendChild(div_Probabi)
    linhaBody.appendChild(div_Media)
    linhaBody.appendChild(div_DesPad)
    linhaBody.appendChild(div_CoeVari)
    tbody.appendChild(linhaBody)

}
