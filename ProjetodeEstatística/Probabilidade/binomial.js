
function calcular(){

    let n = Number(document.getElementById('tam_Amostra').value)   // tam_Amostra
    let p = Number(document.getElementById('sucesso_P').value).toFixed(1) // sucesso
    let q = Number(document.getElementById('fracasso_Q').value).toFixed(1) // fracasso
    let mostra_result = document.getElementById('mostra_result')
    let dadoevento_k = (document.getElementById('evento_k'))   // evento
    let evento_k = dadoevento_k.value
    let vetorevento_k = []
    let k = []


    if(n === '' || p === '' || q === '' || evento_k === ''){
        swal("Ops!", "Digite dados válidos!", "error");
        return
    }

    vetorevento_k.push(evento_k)
    let evento_kNumber = (vetorevento_k.toString().split(';'));

    evento_k = evento_kNumber.map(num => Number(num))
   

    const conta_fatorial = (y) => y === 0 || y === 1 ? 1 : y * conta_fatorial(y - 1)



    let probabi = []
    let analise_Combi = []

    for(let i = 0; i <= evento_k.length - 1; i++){

        analise_Combi[i] = conta_fatorial(n) / (conta_fatorial(n - evento_k[i]) * conta_fatorial(evento_k[i]))

        probabi[i] = analise_Combi[i] * (p**evento_k[i]) * (q**(n - evento_k[i]))

        console.log('Analise Combinatoria: ' + analise_Combi[i])
        console.log('Probabilidade: ' + probabi[i])
    }
    
    let somaprobabi = probabi.reduce((acumula, n) => acumula += n)

    somaprobabi = (somaprobabi * 100).toFixed(2)

    console.log('Soma: ' + somaprobabi)

    let resultado_Probabi = document.createElement('h3')
    resultado_Probabi.innerText = `Probabilidade é de ${somaprobabi} %`

    document.getElementById('mostra_result').innerHTML = ''
    mostra_result.appendChild(resultado_Probabi)


}


