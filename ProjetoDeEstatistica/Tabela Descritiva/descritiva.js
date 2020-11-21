


//Esta Variavel pega o ID de uma div que recebera mais tags HTML com conteudos após a funcão Calcular ser chamada
var div_ordinal = document.getElementById("ordinal_principal")

//Esta Variavel pega o ID de uma div que contem as opções do tipo de variavel
var tipo_ordenal = document.getElementById("tipo_variavel")

//Esta Variavel pega o ID de uma div que recebera mais tags HTML com conteudos após a funcão Calcular ser chamada
var medidas_separatrizes = document.getElementById("seleciona_Valor")
//___________________________________________________________________________________________________________________________


//Variavel que recebe os dados captados e acumulados da opçao Qualitativa Ordenal na linha 359
var objeto_ordinal = function (dado, quantidade, freqporcent, freacumulada, freqAcumuPorcent) {

    this.dado = dado
    this.quantidade = quantidade
    this.freqporcent = freqporcent
    this.freacumulada = freacumulada
    this.freqAcumuPorcent = freqAcumuPorcent
    
}
//____________________________________________________________________________________________________________________________

//Vetor que recebe dados de valores acumulados da opçao Qualitativa Ordenal
array_ordinal = []

//Vetor que recebe dados de valores acumulados da opçao Quantitativa Continua
array_Continua = []

//Vetor que recebe dados de valores inseridos de um input que sera inserido no HTML na opção Quarilativa Ordinal
array_input = []
//____________________________________________________________________________________________________________________________

//Função que executa sua função de inserir um input na opção Quarilativa Ordinal
function verifica_ordinal() {

    if (tipo_ordenal.value === "ordinal") {

        insere_input = document.createElement("input")
        insere_input.setAttribute("type", "text" )
        insere_input.setAttribute("class", "form-control mt-2" )
        insere_input.setAttribute("placeholder", "Digite a ordem dos dados" )
        insere_input.setAttribute("id", "ordena_ordinal" )

        div_ordinal.appendChild(insere_input)
        console.log(div_ordinal)
    }
}
console.log(div_ordinal)
//____________________________________________________________________________________________________________________________

//Função que ao selecionar uma medida separatriz no HTML insere no id(seleciona_Valor) os respectivos valores para o usuario escolher
function funcMedidas_separa() {
    if(seleciona_Medida.value === 'selecione') {
        document.getElementById('seleciona_Valor').innerHTML = ''
        let opcao = document.createElement("option")
        opcao.textContent = "Escolha o valor"
        medidas_separatrizes.appendChild(opcao)
    }

    if(seleciona_Medida.value === 'quartil') {
        document.getElementById('seleciona_Valor').innerHTML = ''
        for(let i = 1; i <= 4; i++){
        let opcao = document.createElement("option")
        opcao.setAttribute("value", i)
        opcao.textContent = i
        medidas_separatrizes.appendChild(opcao)
        }
        
    }
    console.log(medidas_separatrizes)

    if(seleciona_Medida.value === 'quintil') {
        document.getElementById('seleciona_Valor').innerHTML = ''
        for(let i = 1; i <= 5; i++){
        let opcao = document.createElement("option")
        opcao.setAttribute("value", i)
        opcao.textContent = i
        medidas_separatrizes.appendChild(opcao)
        }
    }

    if(seleciona_Medida.value === 'decil') {
        document.getElementById('seleciona_Valor').innerHTML = ''
        for(let i = 1; i <= 10; i++){
        let opcao = document.createElement("option")
        opcao.setAttribute("value", i)
        opcao.textContent = i
        medidas_separatrizes.appendChild(opcao)
        }
    }

    if(seleciona_Medida.value === 'porcentil') {
        document.getElementById('seleciona_Valor').innerHTML = ''
        for(let i = 1; i <= 100; i++){
        let opcao = document.createElement("option")
        opcao.setAttribute("value", i)
        opcao.textContent = i
        medidas_separatrizes.appendChild(opcao)
        }
    }

}
//____________________________________________________________________________________________________________________________

// Inicio Tabelas------------------------------------------------------------------------------------------------------------

//Função principal do código, que realiza todos os calculos e chama e ultiliza o valor de todas as outras funções dispoiveis
function calcular() {     
    

    // Tabelas------------------------------------------------------------------------------------------------------------------
    
    nome_Variavel = document.getElementById("nome_da_varialvel").value
    let titulos = document.querySelector(".tituloTabela")
    document.getElementById("tabela-descritiva").innerHTML = ""  // Linha limpa tabela toda vez que calculamos 
    let tabela = document.getElementById("tabela-descritiva")
    
    
    //Função que cria botão com o respectivo atributo e valor 
    function cria_Btn(botão, atributo, valor){

        botão = document.createElement(botão)

        botão.setAttribute(atributo, valor)

        return botão
    }
    //_______________________________________________________________________________________________________________________
    
    //Funçào que cria elementos HTML para ser adicionado na criação das tabelas
    function criaElementoTab (elemento) {        
        return document.createElement(elemento)
    }                 
    //_______________________________________________________________________________________________________________________                          

    let thead = criaElementoTab("thead")         //                         ^
    let tbody = criaElementoTab("tbody")         //                         |                                          
    let tfoot = criaElementoTab("tfoot")         //Armazenando elementos criados na função a cima, em variaveis

        tabela.appendChild(thead)
        tabela.appendChild(tbody)                //Inserido elementos
        tabela.appendChild(tfoot)

    //Indices de todas as tabelas 
    let indices_tabela = [nome_Variavel, "Frequência", "Frequência (%)", "Frequência Acumulada", "FAC (%)"]  

      
    //Função cria a tag desejada e insere o valor dentro da tag
    function cria_InsereCelula (tag, text) {     
        tag = criaElementoTab(tag)
        tag.textContent = text
        return tag
    }              
    //_________________________________________________________________________________________________________________________

    //Função que cria a tag desejada e insere o valor dentro da tag
    function criaIntervalo_Insere (tag, tag_2) {     
        tag = criaElementoTab(tag)
        tag.textContent = tag_2
        return tag
    }
    //_________________________________________________________________________________________________________________________  

    //É criado a linha para que o elementos a baixo sejam inderidos
    let tr = criaElementoTab("tr")            
                                                      
    
    // Este "for", faz com que seja criado as colunas referente aos indices
    for(i = 0; i < indices_tabela.length; i++) {   

        let td = cria_InsereCelula("td", indices_tabela[i] )
        tr.appendChild(td) 
    }
    //_________________________________________________________________________________________________________________________  
               
    
    
    var lista_DeDados = []   
    
    //Variavel que recebe todos os dados inseridos pelo usuario para calculos da Estatistica Descritiva
    dados_Utilizados = document.getElementById("dados_inseridos").value

    //Linha que faz a quebra de dos dados inseridos pelo usuario
    lista_DeDados = dados_Utilizados.split(";")      
   
  //BLOCO DE CÒDIGO REFERENTE A FUNÇÂO DE OEDENAÇÂO (SELECTION SORT)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
    function encontraMenor_val (vetor, inicio) {
        ponto_inicial = inicio
        for(let i = inicio + 1; i < vetor.length; i ++){
            if(vetor[ponto_inicial] > vetor[i]){
                ponto_inicial = [i]
            }
        }
        return ponto_inicial
    }



    function selection_Sort (vetor) {
        for(let i = 0; i < vetor.length - 1; i++){
            let Val_menor = (encontraMenor_val(vetor, i + 1))
            if(vetor[Val_menor] < vetor[i]){
                [vetor[i], vetor[Val_menor]] = [vetor[Val_menor], vetor[i]]

                
            }

        }
    }
    selection_Sort (lista_DeDados)
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //Variaveis que serão usadas para armazenar Frequências
    var x = 0                                                
    var vet_contador = []
    var porcent_Simples = [] 
    var total_Freq = 0
    var freq_Acumulada = []
    var freq_Fac = []
    //--------------------------------------------
    //linha para calculos do desvios padroes e CVs
    var total_dasFi = 0 
    //_______________________________________________________________________________________________________________________

    
    //-----------------Validação dos tipos  de Variaveis------------------------------------------------------------------------
    var tipo_variavel = document.getElementById("tipo_variavel")
        
    if((tipo_variavel.value === 'nominal' || tipo_variavel.value === 'ordinal')  && !isNaN(lista_DeDados[0])){
        alert("Ops! Esta variável só aceita palavras");
        document.getElementById("tabela-descritiva").innerHTML = ""
    }

    if((tipo_variavel.value === 'discreta' || tipo_variavel.value === 'continua')  && isNaN(lista_DeDados[0])){
        alert("Ops! Esta variável só aceita palavras");
        document.getElementById("tabela-descritiva").innerHTML = ""
    }
    //_______________________________________________________________________________________________________________________

//\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/  INICIO CRIAÇÃO DE TABELAS  \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\

    // (1) Se a tabela for Nominal________________________________________________________________________________________________
    
    if (tipo_variavel.value === "nominal") {

    //------------------------------------------------------------Bloco de códigos que acham as Frequências Nominal    

        for (let i = 0; i < lista_DeDados.length; i = x) {  
                let freqCont = 1
                let frequi_porcent = 0
        
                for (x = i + 1; x < lista_DeDados.length; x++) { 
                    if (lista_DeDados[i] == lista_DeDados[x]) {
                        freqCont++;
                        
                    } else {
                    break; 
                    } 
                }

            vet_contador.push(freqCont)
            total_Freq += freqCont 
            freq_Acumulada.push(total_Freq)
            
        
        }
        var freqAcuPorcent = 0
        console.log(lista_DeDados)
        
        for(let i = 0; i < vet_contador.length; i++) {
            let vazia = 0
        
            vazia = (vet_contador[i] * 100) / total_Freq
            freqAcuPorcent += vazia

            porcent_Simples.push(vazia)
            freq_Fac.push(freqAcuPorcent)

        }
        
    //---------------------------------------------------------------Bloco de códigos que acham as Frequências Ordinal
        
        var filtra_repeticao = [ ...new Set( lista_DeDados ) ];  //Filtra as repetições deixando apena um item de cada//
    
    //---------------------------------------------------------------------------Insere a tabela no DOM   

        thead.appendChild(tr)   //Linha universal dos indices da tabela //

        for (i = 0; i < filtra_repeticao.length; i++) {


            // console.log(lista_DeDados[i])

            let linha_Body = criaElementoTab("tr")
            

            let Celula_Criada = cria_InsereCelula("td", filtra_repeticao[i])
            let coluna_Criada = cria_InsereCelula("td", vet_contador[i])
            let indice_PorcSimples = cria_InsereCelula("td", porcent_Simples[i].toFixed(0) + "%")
            let indice_freqAcumu = cria_InsereCelula("td", freq_Acumulada[i])
            let indice_Fac = cria_InsereCelula("td", freq_Fac[i].toFixed(0) + "%")
        
            linha_Body.appendChild(Celula_Criada )
            linha_Body.appendChild(coluna_Criada )
            linha_Body.appendChild(indice_PorcSimples)
            linha_Body.appendChild(indice_freqAcumu)
            linha_Body.appendChild(indice_Fac)
            
            

            tbody.appendChild(linha_Body) // 10-    Calcula a quantidade de repeticoes  e insere na linha e na coluna
            var x = 0      
        
        //---------------------------------------------------------------------------Insere a tabela no DOM  
        }
        
        
    }

    // (1) Se a tabela for Nominal________________________________________________________________________________________________



    // (2) Se a tabela for Ordinal________________________________________________________________________________________________
    
    
    
    if (tipo_variavel.value === "ordinal") {
    
    //------------------------------------------------------------Bloco de códigos que acham as Frequências Ordinal

        for (let i = 0; i < lista_DeDados.length; i = x) {  
                let freqCont = 1
                let frequi_porcent = 0
        
                for (x = i + 1; x < lista_DeDados.length; x++) { 
                    if (lista_DeDados[i] == lista_DeDados[x]) {
                        freqCont++;
                        
                    } else {
                    break; 
                    } 
                }

            vet_contador.push(freqCont)
            total_Freq += freqCont 
            freq_Acumulada.push(total_Freq)
            
            
        }

       
        var freqAcuPorcent = 0 
        
        for(let i = 0; i < vet_contador.length; i++) {
            let vazia = 0
        
            vazia = (vet_contador[i] * 100) / total_Freq
            freqAcuPorcent += vazia

            porcent_Simples.push(vazia)
            freq_Fac.push(freqAcuPorcent)

        }
        //---------------------------------------------------------Bloco de códigos que acham as Frequências Ordinal
        
        
        filtra_repeticao = [ ...new Set( lista_DeDados ) ];  //Filtra as repetições deixando apenas um item de cada//

        let pega_valor = document.getElementById("ordena_ordinal").value

        array_input = pega_valor.split(";")  

        for (i = 0; i < array_input.length; i++) {
            array_ordinal.push(new objeto_ordinal(filtra_repeticao[i] ,vet_contador[i], porcent_Simples[i], freq_Acumulada[i], freq_Fac[i]))

            console.log(array_ordinal[i])
        }

        var freqAcumu_tendenciaOrdi = []
        var nome_tendenciaOrdi = []

        

        console.log("aqui esta - " + freqAcumu_tendenciaOrdi )
        console.log("aqui esta - " + nome_tendenciaOrdi )
        
    //----------------------------------------------Bloco de códigos que acham as Frequências Ordinal    
    var freq_ord = []
    var freqNome_ordenado = []
    var t = 0
    
    for (i = 0; i < array_input.length; i++) {

        for (let j = 0; j < array_input.length; j++) {
            if (array_input[i] === array_ordinal[j].dado){

                
                t += array_ordinal[j].quantidade
                freq_ord.push(t)
            }
            
            
        }
    }
    //----------------------------------------------Bloco de códigos que acham as Frequências Ordinal 

    //---------------------------------------------------------------------------Insere a tabela no DOM
        thead.appendChild(tr)   //Linha universal dos indices da tabela //

        var ordenaPorcent_grafic = []

        for (i = 0; i < array_input.length; i++) {

            console.log(array_ordinal[i].dado === array_input[i])

            linha_Body = criaElementoTab("tr")

            for (let j = 0; j < array_input.length; j++) {
                if (array_input[i] === array_ordinal[j].dado){

                    let Celula_Criada = cria_InsereCelula("td", array_ordinal[j].dado)
                    freqNome_ordenado.push(array_ordinal[j].dado)
                    let coluna_Criada = cria_InsereCelula("td", array_ordinal[j].quantidade)
                    let indice_PorcSimples = cria_InsereCelula("td", porcent_Simples[j].toFixed(0) + "%")
                    ordenaPorcent_grafic.push(porcent_Simples[j]) // linha de c]ódigo que ordena a porcentagem no grafico da ordinal
                    let indice_freqAcumu = cria_InsereCelula("td", freq_ord[i])
                    let indice_Fac = cria_InsereCelula("td", freq_Fac[i].toFixed(0) + "%")
                    linha_Body.appendChild(Celula_Criada )
                    linha_Body.appendChild(coluna_Criada )
                    linha_Body.appendChild(indice_PorcSimples)
                    linha_Body.appendChild(indice_freqAcumu)
                    linha_Body.appendChild(indice_Fac)
                }
                
                
            }
            
            tbody.appendChild(linha_Body)
            console.log("oooooaajshhshs : " + ordenaPorcent_grafic)

        //---------------------------------------------------------------------------Insere a tabela no DOM 
        }
        

    }
    //(2) Se a tabela for Ordinal________________________________________________________________________________________________



    //(3) Se a tabela for Discreta________________________________________________________________________________________________
    
    if (tipo_variavel.value === "discreta") {

        let lista_dadosDiscreta = []

        let dados_Discreta = document.getElementById("dados_inseridos").value

        lista_dadosDiscreta = dados_Discreta.split(";")

      //BLOCO DE CÒDIGO REFERENTE A FUNÇÂO DE OEDENAÇÂO (SELECTION SORT)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function encontraMelor_val (vetor, inicio) {
            ponto_inicial = inicio
            for(let i = inicio + 1; i < vetor.length; i ++){
                if(vetor[ponto_inicial] > vetor[i]){
                    ponto_inicial = [i]
                }
            }
            return ponto_inicial
        }
    
    
    
        function selecton_Sort (vetor) {
            for(let i = 0; i < vetor.length - 1; i++){
                let Val_menor = (encontraMelor_val(vetor, i + 1))
                if(vetor[Val_menor] < vetor[i]){
                    [vetor[i], vetor[Val_menor]] = [vetor[Val_menor], vetor[i]]
    
                    
                }
    
            }
        }
        selecton_Sort (lista_dadosDiscreta)

      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //----------------------------------------------------------------Bloco de códigos que acham as Frequências Discreta

        for (let i = 0; i < lista_dadosDiscreta.length; i = x) {  
                let freqCont = 1
                let frequi_porcent = 0
        
                for (x = i + 1; x < lista_dadosDiscreta.length; x++) { 
                    if (lista_dadosDiscreta[i] == lista_dadosDiscreta[x]) {
                        freqCont++;
                        
                    } else {
                    break; 
                    } 
                }

            vet_contador.push(freqCont)
            total_Freq += freqCont 
            freq_Acumulada.push(total_Freq)
            
        
        }
        

    //linha de código referente ao calculo do desvio padrão
        var fre_simples = []

        total_dasFi = total_Freq

        for(let i = 0; i < vet_contador.length; i++) {
            fre_simples.push(vet_contador[i])
        }
    //_______________________________________________________________________________________________________________________

        var freqAcuPorcent = 0 
        
        for(let i = 0; i < vet_contador.length; i++) {
            let vazia = 0
        
            vazia = (vet_contador[i] * 100) / total_Freq
            freqAcuPorcent += vazia

            porcent_Simples.push(vazia)
            freq_Fac.push(freqAcuPorcent)

        }

    //----------------------------------------------Bloco de códigos que acham as Frequências Discreta
        
        
        filtra_repeticao = [ ...new Set( lista_dadosDiscreta ) ];  //Filtra as repetições deixando apena um item de cada//

    //----------------------------------------------Insere a tabela no DOM    

         thead.appendChild(tr)   //Linha universal dos indices da tabela //

        for (i = 0; i < filtra_repeticao.length; i++) {

            // console.log(lista_DeDados[i])

            let linha_Body = criaElementoTab("tr")

            let Celula_Criada = cria_InsereCelula("td", filtra_repeticao[i])
            let coluna_Criada = cria_InsereCelula("td", vet_contador[i])
            let indice_PorcSimples = cria_InsereCelula("td", porcent_Simples[i].toFixed(0) + "%")
            let indice_freqAcumu = cria_InsereCelula("td", freq_Acumulada[i])
            let indice_Fac = cria_InsereCelula("td", freq_Fac[i].toFixed(0) + "%")
        
            linha_Body.appendChild(Celula_Criada )
            linha_Body.appendChild(coluna_Criada )
            linha_Body.appendChild(indice_PorcSimples)
            linha_Body.appendChild(indice_freqAcumu)
            linha_Body.appendChild(indice_Fac)

            tbody.appendChild(linha_Body)                  //Calcula a quantidade de repeticoes  e // insere na linha e na coluna
               
        //----------------------------------------------Insere a tabela no DOM
        }
        
    }
    //(3) Se a tabela for Discreta________________________________________________________________________________________________


    //(4) Se a tabela for Continua________________________________________________________________________________________________
    if (tipo_variavel.value === "continua") {
    
    //-------------------------------------------Achando o maior e o menor numero      
        let lista_dadosContinua = []
        let lista_NumeContinua = []
        var cria_intervalo = []

        let dados_Ordinal = document.getElementById("dados_inseridos").value

        lista_dadosContinua = dados_Ordinal.split(";")

        // console.log(lista_dadosContinua)

        

        for (let i = 0; i < lista_dadosContinua.length; i++) {
            lista_NumeContinua.push(Number(lista_dadosContinua[i]))
        }
        
        
        // console.log(lista_NumeContinua)
        console.log(lista_NumeContinua)

        var maior_Numero 
        var menor_Numero 

        //BLOCO DE CÒDIGO REFERENTE A FUNÇÂO BUSCA SEQUÊNCIAL ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function encontra_Maior (vetor, inicio) {
            ponto_inicial = inicio
            for(let i = inicio + 1; i < vetor.length; i ++){
                if(vetor[ponto_inicial] < vetor[i]){
                    ponto_inicial = [i]
                }
            }
            return ponto_inicial
        }

        function encontra_Menor (vetor, inicio) {
            ponto_inicial = inicio
            for(let i = inicio + 1; i < vetor.length; i ++){
                if(vetor[ponto_inicial] > vetor[i]){
                    ponto_inicial = [i]
                }
            }
            return ponto_inicial
        }
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
        let indice_maior = (encontra_Maior(lista_NumeContinua, 0))
        let indice_menor = (encontra_Menor(lista_NumeContinua, 0))

        maior_Numero = lista_NumeContinua[indice_maior]
        menor_Numero = lista_NumeContinua[indice_menor]

        console.log(maior_Numero)
        console.log(menor_Numero)
        
    //_______________________________________________________________________________Achando o maior e o menor numero    

    //-------------------------------------------Amplitude total

        let amplitude_total = (maior_Numero - menor_Numero)

        console.log("Amplitude" + amplitude_total)
        
    //___________________________________________Amplitude total  
        
    //-------------------------------------------Quantidade de classe(linha)
        var k = Math.round(Math.sqrt(lista_NumeContinua.length)) - 1

        console.log("esta é a linha" + k)
        
        for (let i = 0; i < lista_NumeContinua.length; i++){
            if ((amplitude_total % k) != 0) {

                amplitude_total += 1
            }
        }
    //_______________________________________________________________________    
            

    //------------------------------------------Intervalo    

        var intervalo = (amplitude_total / k)

    //___________________________________________________    

    
    //-----------------------------------Cria intervalo entre os valores
        
        cria_intervalo.push(menor_Numero)
        
            let b = menor_Numero

        k = k + 1

        for (let i = 0; i < k ; i++){
            

            num_inter = b + intervalo

            cria_intervalo.push(num_inter)

            b = num_inter

        }

    //__________________________________________________________________

    //----------------------------------------------Bloco de códigos que acham as Frequências da tabela Continua
        var Contfrequi_Conti = []
        var frequi_Continua = []

        for(i = 1; i < cria_intervalo.length; i++){
            max = cria_intervalo[i]
            min = cria_intervalo[i - 1]
            cont = 0
            for(x = 0; x < lista_NumeContinua.length; x++){
                if((lista_NumeContinua[x] >= min) && (lista_NumeContinua[x] < max)){
                    cont = cont + 1  
                }
            }
            Contfrequi_Conti.push(cont)
            total_Freq += cont 
            freq_Acumulada.push(total_Freq)
            
        }

        total_dasFi = total_Freq

        console.log("upa : " + Contfrequi_Conti)
        
        var freqAcuPorcent = 0 
        
        for(let i = 0; i < Contfrequi_Conti.length; i++) {
            let vazia = 0
        
            vazia = (Contfrequi_Conti[i] * 100) / total_Freq
            freqAcuPorcent += vazia

            porcent_Simples.push(vazia)
            freq_Fac.push(freqAcuPorcent)

        }
    //__________________________________________________________Bloco de códigos que acham as Frequências da tabela Continua

    //----------------------------------------------Insere a tabela no DOM

        thead.appendChild(tr)   //Linha universal dos indices da tabela //

        for (let i = 0; i < k; i++){

            let linha_Body = criaElementoTab("tr")

            let Celula_Criada = cria_InsereCelula("td", (cria_intervalo[i] + "|--" + cria_intervalo[i + 1]))
            let coluna_Criada = cria_InsereCelula("td", Contfrequi_Conti[i])
                let indice_PorcSimples = cria_InsereCelula("td", porcent_Simples[i].toFixed(0) + "%")
                let indice_freqAcumu = cria_InsereCelula("td", freq_Acumulada[i])
                let indice_Fac = cria_InsereCelula("td", freq_Fac[i].toFixed(0) + "%")
            
            linha_Body.appendChild(Celula_Criada )
            linha_Body.appendChild(coluna_Criada )
            linha_Body.appendChild(indice_PorcSimples)
            linha_Body.appendChild(indice_freqAcumu)
            linha_Body.appendChild(indice_Fac)
            
            tbody.appendChild(linha_Body)  
        }
        console.log("piiiiiiiii : " + cria_intervalo)

        var aux_graficContinua = []
        for(let i = 0; i < cria_intervalo.length - 1; i++){
            aux_graficContinua.push(`${cria_intervalo[i]} |--- ${cria_intervalo[i+1]}`)
        }

        console.log(aux_graficContinua)
    //----------------------------------------------Insere a tabela no DOM
    }
    
    //(4) Se a tabela for Continua________________________________________________________________________________________________

//\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/  FIM CRIAÇÃO DE TABELAS  \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\


//############################################# INICIO CRIAÇÃO DAS MEDIDAS DE TENDÊNCIA #############################################################################    

    //(1.1) Se a tendencias for Nominal________________________________________________________________________________________________
    
    if (tipo_variavel.value === "nominal"){

        let titulo_Medidas = document.querySelector(".titulo_tabela2")
        titulo_Medidas.textContent = "Medidas de Tendência"
        titulo_Medidas.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela2_tendencias").innerHTML = ""  
        let tabela2_tendencias = document.getElementById("tabela2_tendencias")

        let tipo_tendencia = ["Média", "Móda", "Mediana"] //linha que apresenta as tendencias

        let thead_tendencia = criaElementoTab("thead")

        tabela2_tendencias.appendChild(thead_tendencia)

        let tr_2 = criaElementoTab("tr")        //Linha universal das tendencias da tabela 
        tr_2.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td = cria_InsereCelula("td", tipo_tendencia[i] )
        tr_2.appendChild(td) 

        } 
        
        console.log(thead_tendencia)
        //____________________________________________________________________

    //--------------------------------------------Média nào tem
    //--------------------------------------------Média nào tem
    
    
    //-------------------------------------------- Moda

        let moda = []
        let maiores_moda = []
        let posicao_moda = []
        let resultado_moda = []
        let armazena_modas = [] 

        var mediana = 0
        //.................................escolhe o maior valor e coloca no vetor "moda"
        var maior = vet_contador[0]

        for (let i = 0; i < vet_contador.length; i++) {

            if (vet_contador[i] >= maior){
                maior = vet_contador[i]
            }
        }
        moda.push(maior)
        //_______________________________________________________________________________

        //.................................se houver repeticoes a colocamos em outro vetor sera para a posicao
        let total_frequencia = 0

        for (let i = 0; i < vet_contador.length; i++) {
            

            if(moda[0] === vet_contador[i]) {
                maiores_moda.push(vet_contador[i])
            }

            total_frequencia += vet_contador[i] //linha para achar o total das frequencias
        }
        //_____________________________________________________________________________________________________


        //.................................................... Achar a posição das modas
        console.log("antes : " + total_frequencia)

        for (let i = 0; i < maiores_moda.length; i++) {

            for (let x = 0; x < vet_contador.length; x++){
                
                if (maiores_moda[i] === vet_contador[x]) {

                    posicao_moda.push(vet_contador.indexOf(vet_contador[x]))

                    vet_contador.splice(x, 1, "")

                    break
                }

            }
            
        }
        console.log(vet_contador)
        
        console.log(posicao_moda)
    
    //____________________________________________________________________________________
        
    //.....................................................Pegar o valor das posicoes Moda

        for (i = 0; i < posicao_moda.length; i++) {

            let a = posicao_moda[i]

            for (let x = i; x < vet_contador.length; x++) {
                armazena_modas.push(filtra_repeticao[a])

                break
            }
        }


    //____________________________________________________________________________________

    //......................................................mediana
    
        meio = (total_frequencia / 2).toFixed(0)

        
        for(let i = 0; i < freq_Acumulada.length; i++){
            if(meio > freq_Acumulada[i] && meio <= freq_Acumulada[i + 1]){
                mediana = filtra_repeticao[i + 1]
            }
        }
        
        console.log("Moda : " + armazena_modas)
        console.log("Médiana : " + mediana)

    //_____________________________________________________________    


        let valores = ["Nào existe", armazena_modas, mediana]
        
        thead_tendencia.appendChild(tr_2)
        let tr_valores = criaElementoTab("tr")
        
        // Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td_valores = cria_InsereCelula("td", valores[i] )
        tr_valores.appendChild(td_valores) 
        } 
        //_____________________________________________________________________

        tr_valores.setAttribute("style", "text-align: center;")

        thead_tendencia.appendChild(tr_valores)


    }    

    //(1.1) Se as tendencias for Nominal________________________________________________________________________________________________
    
     
    //(1.2) Se as tendencias for Ordinal________________________________________________________________________________________________
    if (tipo_variavel.value === "ordinal"){

        let titulo_Medidas = document.querySelector(".titulo_tabela2")
        titulo_Medidas.textContent = "Medidas de Tendência"
        titulo_Medidas.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela2_tendencias").innerHTML = ""  
        let tabela2_tendencias = document.getElementById("tabela2_tendencias")

        let tipo_tendencia = ["Média", "Móda", "Mediana"]

        let thead_tendencia = criaElementoTab("thead")

        tabela2_tendencias.appendChild(thead_tendencia)
        

        let tr_2 = criaElementoTab("tr")        //Linha universal das tendencias da tabela 
        tr_2.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td = cria_InsereCelula("td", tipo_tendencia[i] )
        tr_2.appendChild(td) 

        } 
        //____________________________________________________________________

    //--------------------------------------------Média nào tem
    //--------------------------------------------Média nào tem

        let moda = []
        let maiores_moda = []
        let posicao_moda = []
        let resultado_moda = []
        let armazena_modas = [] 

        var mediana = 0
    //.................................escolhe o maior valor e coloca no vetor "moda"
        var maior = vet_contador[0]

        for (let i = 0; i < vet_contador.length; i++) {

            if (vet_contador[i] >= maior){
                maior = vet_contador[i]
            }
        }
        moda.push(maior)

        console.log(moda)
    //_______________________________________________________________________________

    //.................................se houver repeticoes a colocamos em outro vetor sera para a posicao
        let total_frequencia = 0

        for (let i = 0; i < vet_contador.length; i++) {
            

            if(moda[0] === vet_contador[i]) {
                maiores_moda.push(vet_contador[i])
            }

            total_frequencia += vet_contador[i] //linha para achar o total das frequencias
        }

        console.log(maiores_moda)
        //________________________________________________________________________________________________
        
        //.................................................... Achar a posição das modas
        console.log("antes : " + total_frequencia)

        for (let i = 0; i < maiores_moda.length; i++) {

            for (let x = 0; x < vet_contador.length; x++){
                
                if (maiores_moda[i] === vet_contador[x]) {

                    posicao_moda.push(vet_contador.indexOf(vet_contador[x]))

                    vet_contador.splice(x, 1, "")

                    break
                }

            }
            
        }
        console.log(vet_contador)
        
        console.log("Posicoes : " + posicao_moda)
    
    //__________________________________________________________________________________

    //.....................................................Pegar o valor das posicoes Moda

        for (i = 0; i < posicao_moda.length; i++) {

            let a = posicao_moda[i]

            for (let x = i; x < vet_contador.length; x++) {
                armazena_modas.push(filtra_repeticao[a])

                break
            }
        }

    console.log("Moda : " + armazena_modas)
    //_____________________________________________________________________________________
    
    //......................................................mediana
    
        meio = (total_frequencia / 2).toFixed(0)
        console.log("meio : " + meio)
            
        for(let i = 0; i < freq_ord.length; i++){
            if(meio > freq_ord[i] && meio <= freq_ord[i + 1]){
                let b = freq_ord.indexOf(freq_ord[i + 1])
                console.log("posiction : " + b)
                mediana = freqNome_ordenado[b]
            }
        }

        
        
        console.log("Moda : " + armazena_modas)
        console.log("Médiana : " + mediana)

    //_____________________________________________________________
    
        let valores = ["Nào existe", armazena_modas, mediana]


        thead_tendencia.appendChild(tr_2)
        let tr_valores = criaElementoTab("tr")
        
        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td_valores = cria_InsereCelula("td", valores[i] )
        tr_valores.appendChild(td_valores) 
        } 
        //____________________________________________________________________

        tr_valores.setAttribute("style", "text-align: center;")

        thead_tendencia.appendChild(tr_valores)
    
     
    }
    //(1.2) Se as tendencias for Ordinal________________________________________________________________________________________________


    //(1.3) Se as tendencias for Discreta________________________________________________________________________________________________
    
    if (tipo_variavel.value === "discreta"){

        let titulo_Medidas = document.querySelector(".titulo_tabela2")
        titulo_Medidas.textContent = "Medidas de Tendência"
        titulo_Medidas.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela2_tendencias").innerHTML = ""  
        let tabela2_tendencias = document.getElementById("tabela2_tendencias")

        let tipo_tendencia = ["Média", "Móda", "Mediana"]

        let thead_tendencia = criaElementoTab("thead")

        tabela2_tendencias.appendChild(thead_tendencia)
        
        

        let tr_2 = criaElementoTab("tr")        //Linha universal das tendencias da tabela
        tr_2.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td = cria_InsereCelula("td", tipo_tendencia[i] )
        tr_2.appendChild(td) 

        }
        //_____________________________________________________________________
        

        //--------------------------------------------Média
        var transforma_numero = []
        var armazena_SomaDasMulti = []

        for(let i = 0; i < filtra_repeticao.length; i++){
            transforma_numero.push(Number(filtra_repeticao[i]))
        }

        var tot_emCima = 0
        var armazena = 0

        for(let i = 0; i < transforma_numero.length; i++){

            tot_emCima = (transforma_numero[i] * vet_contador[i])

            armazena_SomaDasMulti.push(tot_emCima)
        }

        for(let i = 0; i < armazena_SomaDasMulti.length; i++){

            armazena += armazena_SomaDasMulti[i]
        }
        
        console.log("tete : " + transforma_numero)

        //__________________________________________________
        
        
        //-------------------------------------------- Moda

            let moda = []
            let maiores_moda = []
            let posicao_moda = []
            let resultado_moda = []
            let armazena_modas = [] 

            var mediana = 0
            //.................................escolhe o maior valor e coloca no vetor "moda"
            var maior = vet_contador[0]

            for (let i = 0; i < vet_contador.length; i++) {

                if (vet_contador[i] >= maior){
                    maior = vet_contador[i]
                }
            }
            moda.push(maior)
            //________________________________________________________________________________

            //.................................se houver repeticoes a colocamos em outro vetor sera para a posicao
            var total_frequencia = 0

            for (let i = 0; i < vet_contador.length; i++) {
                

                if(moda[0] === vet_contador[i]) {
                    maiores_moda.push(vet_contador[i])
                }

                total_frequencia += vet_contador[i] //linha para achar o total das frequencias
            }
            //_____________________________________________________________________________________________________


            //.................................................... Achar a posição das modas
            console.log("antes : " + total_frequencia)

            for (let i = 0; i < maiores_moda.length; i++) {

                for (let x = 0; x < vet_contador.length; x++){
                    
                    if (maiores_moda[i] === vet_contador[x]) {

                        posicao_moda.push(vet_contador.indexOf(vet_contador[x]))

                        vet_contador.splice(x, 1, "")

                        break
                    }

                }
                
            }
            console.log(vet_contador)
            
            console.log(posicao_moda)
        
        //_________________________________________________________________________________
            
        //.....................................................Pegar o valor das posicoes Moda

            for (i = 0; i < posicao_moda.length; i++) {

                let a = posicao_moda[i]

                for (let x = i; x < vet_contador.length; x++) {
                    armazena_modas.push(filtra_repeticao[a])

                    break
                }
            }
        //____________________________________________________________________________________

        var media = (armazena / total_frequencia).toFixed(2) //========== Linha que acha a Média da descritiva

        //......................................................mediana
        
            meio = (total_frequencia / 2).toFixed(0)

            
            for(let i = 0; i < freq_Acumulada.length; i++){
                if(meio > freq_Acumulada[i] && meio <= freq_Acumulada[i + 1]){
                    mediana = filtra_repeticao[i + 1]
                }
            }

            
            
            console.log("Média : " + media)
            console.log("Moda : " + armazena_modas)
            console.log("Médiana : " + mediana)
            // console.log(transforma_numero)
            // console.log(armazena_SomaDasMulti)
            // console.log(total_frequencia)
        //______________________________________________________________

        let valores = [media, armazena_modas, mediana]
            
        thead_tendencia.appendChild(tr_2)
        let tr_valores = criaElementoTab("tr")
        
        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td_valores = cria_InsereCelula("td", valores[i] )
        tr_valores.appendChild(td_valores) 
        } 
        //____________________________________________________________________

        tr_valores.setAttribute("style", "text-align: center;")

        thead_tendencia.appendChild(tr_valores)


    }

    //(1.3) Se as tendencias for Discreta________________________________________________________________________________________________


     //(1.4) Se as tendencias for Continua________________________________________________________________________________________________
    
     if (tipo_variavel.value === "continua"){

        let titulo_Medidas = document.querySelector(".titulo_tabela2")
        titulo_Medidas.textContent = "Medidas de Tendência"
        titulo_Medidas.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela2_tendencias").innerHTML = ""  
        let tabela2_tendencias = document.getElementById("tabela2_tendencias")

        let tipo_tendencia = ["Média", "Móda", "Mediana"]

        let thead_tendencia = criaElementoTab("thead")

        tabela2_tendencias.appendChild(thead_tendencia)
        
        let tr_2 = criaElementoTab("tr")        //Linha universal das tendencias da tabela
        tr_2.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td = cria_InsereCelula("td", tipo_tendencia[i] )
        tr_2.appendChild(td) 

        }
        //____________________________________________________________________
        
        console.log(tr_2)
        // console.log(vet_contador)

    //--------------------------------------------Média 
        var divisor_Intervalos = []
        var soma_DasMulti = []
        var total_dasFreqSi = 0
        var total_dasMulti = 0

        

        for(let i = 0; i < freq_Acumulada.length; i++){                         //
                                                                                //
            let salvaDivisor = ((cria_intervalo[i] + cria_intervalo[i + 1]) / 2)// Acha o ponto médio dos dintervalo de cada linha
                                                                                //
            divisor_Intervalos.push(salvaDivisor)                               //
        }

        console.log("pontos medios : " + divisor_Intervalos)
                                
        for(let i = 0; i < Contfrequi_Conti.length; i++){                       //
                                                                                //
            let tot_emCima = (divisor_Intervalos[i] * Contfrequi_Conti[i])      // Vetor que recebe as multiplicacoes das linhas
                                                                                //
            soma_DasMulti.push(tot_emCima)                                      //
        }

        for(let i = 0; i < soma_DasMulti.length; i++){                          //
                                                                                //    
            total_dasMulti += soma_DasMulti[i]                                  // Linha que acha a soma de todas as multiplicacoes
        }                                                                       //
        

        for(let i = 0; i < Contfrequi_Conti.length; i++){                       //       
                                                                                //    
            total_dasFreqSi += Contfrequi_Conti[i]                              //Linha que acha a soma total das frequências
        }                                                                       //            

        var media_continua = (total_dasMulti / (total_dasFreqSi)).toFixed(2) //========== Linha que acha a Média da Continua

        console.log("Média : " + media_continua)
        // console.log(total_dasMulti)
        // console.log(total_dasFreqSi)
        // console.log(soma_DasMulti)
    //________________________________________________

    
    //--------------------------------------------Moda
        let freq_maior = 0
        let armazena_PontoMaior = []
        let armazena_intervalModa = []
        var aux_i = 0
        var fant = 0 
        var fimd = 0
        let mediana = 0

        for(let i = 0; i < Contfrequi_Conti.length; i++){
            
            if (freq_maior < Contfrequi_Conti[i]){
                
                freq_maior = Contfrequi_Conti[i]
            }

        }    

        for(let i = 0; i < Contfrequi_Conti.length; i++){
            
            if (freq_maior === Contfrequi_Conti[i]){
                armazena_PontoMaior.push(divisor_Intervalos[i])
            }
                
            
        }    

        for(i = 0; i < Contfrequi_Conti.length; i++){
            if (freq_maior === Contfrequi_Conti[i]){
                armazena_intervalModa.push(cria_intervalo[i] + "--" + cria_intervalo[i + 1])
            }
        }

        for(i = 0; i < armazena_PontoMaior.length; i++){
            console.log("o intervalo de tempo com maior frequencia : " + armazena_intervalModa[i] + " tem como moda : " + armazena_PontoMaior[i])
        }

    //___________________________________________________


    //--------------------------------------------Mediana
        meio = (total_dasFreqSi / 2).toFixed(0)

    
        
        
                
        for(let i = 0; i < freq_Acumulada.length; i++){
            

            if((meio > freq_Acumulada[i]) && (meio <= freq_Acumulada[i + 1])){
                fimd = Contfrequi_Conti[i + 1]
                fant = freq_Acumulada[i]

                
            }

            if (fant == 0) {
                fant = 0
                fimd = Contfrequi_Conti[0]
            }
        }
        for(let i = 0; i < Contfrequi_Conti.length; i++){
            
            if(fimd == Contfrequi_Conti[i]){
                aux_i = cria_intervalo[i]
            }
        }

        console.log("meio : " + meio)
        console.log("fant : " + fant)
        console.log("fimd : " + fimd)

        //............................................Calculo Mediana
            mediana = (aux_i + (((meio - fant) / fimd) * intervalo) )
        //___________________________________________________________

        //______________________________________________________
        
        console.log("Mediana : " + mediana)

        let valores = [media_continua, (armazena_intervalModa + " tem como moda : " + armazena_PontoMaior), mediana]

        thead_tendencia.appendChild(tr_2)
        let tr_valores = criaElementoTab("tr")
        
        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_tendencia.length; i++) {   

        let td_valores = cria_InsereCelula("td", valores[i] )
        tr_valores.appendChild(td_valores) 
        } 
        //____________________________________________________________________

        tr_valores.setAttribute("style", "text-align: center;")

        thead_tendencia.appendChild(tr_valores)
    }
    //(1.4) Se as tendencias for Continua________________________________________________________________________________________________



//############################################# FIM CRIAÇÃO DAS MEDIDAS DE TENDÊNCIA #############################################################################



//############################################# INICIO CRIAÇÃO DAS MEDIDAS SEPATATRIZES #############################################################################

    if(tipo_variavel.value === 'nominal' || tipo_variavel.value === 'ordinal' || tipo_variavel.value === 'discreta'){

        let titulo_Separatrizes = document.querySelector(".titulo_tabela3")
        titulo_Separatrizes.textContent = "Medida Separatriz"
        titulo_Separatrizes.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela3_separatrizes").innerHTML = ""  
        let tabela3_separatrizes = document.getElementById("tabela3_separatrizes")

        let tipo_Separatriz = ["Medida Separatriz"]

        let thead_Separatriz = criaElementoTab("thead")

        tabela3_separatrizes.appendChild(thead_Separatriz)

        let tr_3 = criaElementoTab("tr")        //Linha universal das separatrizes da tabela
        tr_3.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_Separatriz.length; i++) {   

        let td = cria_InsereCelula("td", tipo_Separatriz[i] )
        tr_3.appendChild(td) 

        }
        //____________________________________________________________________
        console.log(tr_3)

        var posicao_separatriz = 0 
        var A_Separatriz = 0

        if (seleciona_Medida.value === "quartil") {

            for(let i = 1; i <= 4; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*25)/100))
                    
                    
                }
            }

            for(let i = 0; i < freq_Acumulada.length; i++){
                if(posicao_separatriz > freq_Acumulada[i] && posicao_separatriz <= freq_Acumulada[i + 1]){
                    A_Separatriz = filtra_repeticao[i + 1]
                }
            }
            console.log(A_Separatriz)
        }

        else if (seleciona_Medida.value === 'quintil'){

            for(let i = 1; i <= 5; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*20)/100))
                }
            }

            console.log(posicao_separatriz)

            for(let i = 0; i < freq_Acumulada.length; i++){
                if ((posicao_separatriz > freq_Acumulada[i]) && (posicao_separatriz <= freq_Acumulada[i + 1])){
                    A_Separatriz = filtra_repeticao[i + 1]
                    
                } 
            }

            if ( A_Separatriz === 0) {
                A_Separatriz = filtra_repeticao[0]
            }
                
            
            console.log(A_Separatriz)

        } 

        else if (seleciona_Medida.value === 'decil'){

            for(let i = 1; i <= 10; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*10)/100))
                }
            }

            console.log(posicao_separatriz)

            for(let i = 0; i < freq_Acumulada.length; i++){
                if(posicao_separatriz > freq_Acumulada[i] && posicao_separatriz <= freq_Acumulada[i + 1]){
                    A_Separatriz = filtra_repeticao[i + 1]
                }
            }

            if ( A_Separatriz <= 1) {
                A_Separatriz = filtra_repeticao[0]
            }
                
            
            console.log(A_Separatriz)
        }


        else if (seleciona_Medida.value === 'porcentil'){
            for(let i = 1; i <= 100; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * (i/100))
                }
            }

            for(let i = 0; i < freq_Acumulada.length; i++){
                if(posicao_separatriz > freq_Acumulada[i] && posicao_separatriz <= freq_Acumulada[i + 1]){
                    A_Separatriz = filtra_repeticao[i + 1]
                }
            }

            if ( A_Separatriz <= 1) {
                A_Separatriz = filtra_repeticao[0]
            }

            console.log(posicao_separatriz)
            console.log(A_Separatriz)
        }

        else{
            A_Separatriz = "Valor não informado"
        }

        let valores = [A_Separatriz]

        thead_Separatriz.appendChild(tr_3)

        let tr_valores = criaElementoTab("tr")
        
        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < valores.length; i++) {   

        let td_valores = cria_InsereCelula("td", valores[i] )
        tr_valores.appendChild(td_valores) 
        } 
        //____________________________________________________________________

        tr_valores.setAttribute("style", "text-align: center;")

        thead_Separatriz.appendChild(tr_valores)


    }

    else if (tipo_variavel.value === 'continua') {


        let titulo_Separatrizes = document.querySelector(".titulo_tabela3")
        titulo_Separatrizes.textContent = "Medida Separatriz"
        titulo_Separatrizes.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela3_separatrizes").innerHTML = ""  
        let tabela3_separatrizes = document.getElementById("tabela3_separatrizes")

        let tipo_Separatriz = ["Medida Separatriz"]

        let thead_Separatriz = criaElementoTab("thead")

        tabela3_separatrizes.appendChild(thead_Separatriz)

        let tr_3 = criaElementoTab("tr")        //Linha universal das separatrizes da tabela
        tr_3.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_Separatriz.length; i++) {   

        let td = cria_InsereCelula("td", tipo_Separatriz[i] )
        tr_3.appendChild(td) 

        }
        //____________________________________________________________________




        let intervalo_I = 0
        let resultado = 0 

        if (seleciona_Medida.value === "quartil") {

            for(let i = 1; i <= 4; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*25)/100))   
                    
                }
            }
           

            console.log(posicao_separatriz) 

            for(let i = 0; i < freq_Acumulada.length; i++){
                if((posicao_separatriz > freq_Acumulada[i]) && (posicao_separatriz <= freq_Acumulada[i + 1])) {
                    intervalo_I = cria_intervalo[i + 1]
                    break
                }
            }  
            
            resultado = (intervalo_I + (((posicao_separatriz - fant) / fimd) * intervalo) )

            console.log(intervalo_I) 
            
        }    

        if (seleciona_Medida.value === "quintil") {

            for(let i = 1; i <= 5; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*20)/100))   
                    
                }
            }
           

            console.log(posicao_separatriz) 

            for(let i = 0; i < freq_Acumulada.length; i++){
                if((posicao_separatriz > freq_Acumulada[i]) && (posicao_separatriz <= freq_Acumulada[i + 1])) {
                    intervalo_I = cria_intervalo[i + 1]
                    break
                }
            }  

            if ( intervalo_I === 0) {
                intervalo_I = cria_intervalo[0]
                fant = 0
            }
            
            resultado = (intervalo_I + (((posicao_separatriz - fant) / fimd) * intervalo) )

            console.log(resultado) 
            
        }

        if (seleciona_Medida.value === "decil") {

            for(let i = 1; i <= 10; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * ((i*10)/100))   
                    
                }
            }

            for(let i = 0; i < freq_Acumulada.length; i++){
                if((posicao_separatriz > freq_Acumulada[i]) && (posicao_separatriz <= freq_Acumulada[i + 1])) {
                    intervalo_I = cria_intervalo[i + 1]
                    fant = freq_Acumulada[i]
                    fimd = Contfrequi_Conti[i + 1]
                    break
                }
            }  

            if (posicao_separatriz < freq_Acumulada[i]) {
                intervalo_I = cria_intervalo[0]
                fant = 0
                fimd = Contfrequi_Conti[0]
            }

            resultado = (intervalo_I + (((posicao_separatriz - fant) / fimd) * intervalo) )

            console.log("meio : " + posicao_separatriz)
            console.log("i : " + intervalo_I)
            console.log("fant : " + fant)
            console.log("fimd : " + fimd)
            
            
        }

        else if (seleciona_Medida.value === 'porcentil'){

            for(let i = 1; i <= 100; i++){
                if(medidas_separatrizes.value == i){
                    posicao_separatriz = Math.round(total_Freq * (i/100))  
                    
                }
            }

            for(let i = 0; i < freq_Acumulada.length; i++){
                if((posicao_separatriz > freq_Acumulada[i]) && (posicao_separatriz <= freq_Acumulada[i + 1])) {
                    intervalo_I = cria_intervalo[i + 1]
                    break
                }
            }  

            resultado = (intervalo_I + (((posicao_separatriz - fant) / fimd) * intervalo) )
            
            console.log("ihul : " + resultado) 
            

        }

        let valores = [resultado]

        thead_Separatriz.appendChild(tr_3)

        let tr_valores = criaElementoTab("tr")

        let td_valores = cria_InsereCelula("td", valores )
        tr_valores.appendChild(td_valores) 
         

        tr_valores.setAttribute("style", "text-align: center;")

        thead_Separatriz.appendChild(tr_valores)

    }

//############################################# FIM CRIAÇÃO DAS MEDIDAS SEPATATRIZES #############################################################################


//############################################# INICIO DESVIO PADRÃO E COEFIcIENTE DE VARIAÇÃO#############################################################################


    if (tipo_variavel.value === "discreta") {
        

        let titulo_Desvio = document.querySelector(".titulo_tabela4")
        titulo_Desvio.textContent = "Desvio padrão e Coeficiente de Variação"
        titulo_Desvio.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela4_desvio").innerHTML = ""  
        let tabela4_desvio = document.getElementById("tabela4_desvio")

        let tipo_Desvio = ["Desvio padrão e Coeficiente de Variação"]

        let thead_Desvio = criaElementoTab("thead")

        tabela4_desvio.appendChild(thead_Desvio)

        let tr_4 = criaElementoTab("tr")        //Linha universal dos desvios da tabela
        tr_4.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_Desvio.length; i++) {   

        let td = cria_InsereCelula("td", tipo_Desvio[i] )
        tr_4.appendChild(td) 

        }
        //____________________________________________________________________

        var Amos_Popu = document.getElementById("Amos_Popu")

        var radios = document.getElementsByName("amostra ou populacao")

        var vars_pesquisadas = []
        let total_cima = 0
        var desvio_Pad = 0 

        for (i = 0; i < filtra_repeticao.length; i++) {
            let faz_conta = Math.pow((filtra_repeticao[i] - media), 2)
            vars_pesquisadas.push(faz_conta * fre_simples[i])
        }

        console.log("1 : " + vars_pesquisadas)

        for (i = 0; i < vars_pesquisadas.length; i++) {
            total_cima += vars_pesquisadas[i]
        }

        if(radios[0].checked){

            desvio_Pad = Math.sqrt(total_cima / (total_dasFi - 1) ).toFixed(2)
            
            console.log("DP : " + desvio_Pad)
        }

        if(radios[1].checked){

            desvio_Pad = Math.sqrt( total_cima / total_dasFi).toFixed(2)
            
            console.log("DP : " + desvio_Pad)
        }

        var coeficient_vari = 0

        coeficient_vari = ((desvio_Pad / media) * 100).toFixed(2)
        console.log('CV: ' + coeficient_vari)


        let valores = [("Desvio Padrão : " + desvio_Pad +  " ") , ('----------, Coeficiente de variação: ' + coeficient_vari)]

        thead_Desvio.appendChild(tr_4)

        let tr_valores = criaElementoTab("tr")

        let td_valores = cria_InsereCelula("td", valores )
        tr_valores.appendChild(td_valores) 
         

        tr_valores.setAttribute("style", "text-align: center;")

        thead_Desvio.appendChild(tr_valores)
        
        
    }

    if (tipo_variavel.value === "continua") {


        let titulo_Desvio = document.querySelector(".titulo_tabela4")
        titulo_Desvio.textContent = "Desvio padrão e Coeficiente de Variação"
        titulo_Desvio.setAttribute("style", "text-align: center;") 
        document.getElementById("tabela4_desvio").innerHTML = ""  
        let tabela4_desvio = document.getElementById("tabela4_desvio")

        let tipo_Desvio = ["Desvio padrão e Coeficiente de Variação"]

        let thead_Desvio = criaElementoTab("thead")

        tabela4_desvio.appendChild(thead_Desvio)

        let tr_4 = criaElementoTab("tr")        //Linha universal dos desvios da tabela
        tr_4.setAttribute("style", "text-align: center;")

        //Este "for", faz com que seja criado as colunas referente aos indices
        for(i = 0; i < tipo_Desvio.length; i++) {   

        let td = cria_InsereCelula("td", tipo_Desvio[i] )
        tr_4.appendChild(td) 

        }
        //____________________________________________________________________

        var Amos_Popu = document.getElementById("Amos_Popu")

        var radios = document.getElementsByName("amostra ou populacao")

        var vars_pesquisadas = []
        let total_cima = 0
        var desvio_Pad = 0 

        for (i = 0; i < freq_Acumulada.length; i++) {
            let faz_conta = Math.pow((divisor_Intervalos[i] - media_continua), 2)
            vars_pesquisadas.push(faz_conta * Contfrequi_Conti[i])
            
        }

        for (i = 0; i < vars_pesquisadas.length; i++) {
            total_cima += vars_pesquisadas[i]
        }

        if(radios[0].checked){

            desvio_Pad = Math.sqrt(total_cima / (total_dasFi - 1) ).toFixed(2)
            
            console.log("DP : " + desvio_Pad)
        }

        if(radios[1].checked){

            desvio_Pad = Math.sqrt( total_cima / total_dasFi).toFixed(2)
            
            console.log("DP : " + desvio_Pad)
        }

        var coeficient_vari = 0

        coeficient_vari = ((desvio_Pad / media_continua) * 100).toFixed(2)
        console.log('CV: ' + coeficient_vari)

        let valores = [("Desvio Padrão : " + desvio_Pad +  " ") , ('----------, Coeficiente de variação: ' + coeficient_vari)]

        thead_Desvio.appendChild(tr_4)

        let tr_valores = criaElementoTab("tr")

        let td_valores = cria_InsereCelula("td", valores )
        tr_valores.appendChild(td_valores) 
         

        tr_valores.setAttribute("style", "text-align: center;")

        thead_Desvio.appendChild(tr_valores)
    }


// FIM Tabelas------------------------------------------------------------------------------------------------------------

//############################################# FIM DESVIO PADRÃO E COEFIcIENTE DE VARIAÇÃO#############################################################################

//############################################# INICIO CRIAÇÂO GRAFICO #############################################################################
    
    var chart_atributos =  document.getElementById("chart_atributos")
    var myChart_atributos = document.getElementById("myChart")

    chart_atributos.setAttribute("style", "width: 100%; height: 300px; background-color: antiquewhite;")
    myChart_atributos.setAttribute("style", "width: 100%; height: 100%;")

    if (tipo_variavel.value === "nominal") {

        document.getElementById('myChart').innerHTML = ''

        let ctx = document.getElementById("myChart")
        

        let meu_grafico = new Chart (ctx, {
            type : "pie",
            data : {
                labels : filtra_repeticao,
                datasets: [
                    {
                        label : "",
                        data : porcent_Simples,
                        backgroundColor : [
                            '#1d3557',
                            '#457b9d',
                            '#f4a261',
                            '#e9c46a',
                            '#02c39a',
                            '#c44536',
                            '#011627',
                            '#283618',
                            '#540b0e',
                            '#c9ada7',
                            '#e36414',
                            '#ce4257'
                        ],
                        borderWidth : 2,
                        width : 5


                    }
                ]
            },
            options : {
                title : {
                    text : "Grafico do Dados",
                    display : true,
                    fontSize : 25
                },
                
                scales : {
                    yAxes : [
                        {
                            ticks : {
                                beginAtZero : true
                            }
                        }
                    ]
                }
            }
        })
    }

    if (tipo_variavel.value === "ordinal") {

        document.getElementById('myChart').innerHTML = ''

        let ctx = document.getElementById("myChart")
        

        let meu_grafico = new Chart (ctx, {
            type : "pie",
            data : {
                labels : array_input,
                datasets: [
                    {
                        label : "",
                        data : ordenaPorcent_grafic,
                        backgroundColor : [
                            '#1d3557',
                            '#457b9d',
                            '#f4a261',
                            '#e9c46a',
                            '#02c39a',
                            '#c44536',
                            '#011627',
                            '#283618',
                            '#540b0e',
                            '#c9ada7',
                            '#e36414',
                            '#ce4257'
                        ],
                        borderWidth : 2,
                        width : 5


                    }
                ]
            },
            options : {
                title : {
                    text : "Grafico do Dados",
                    display : true,
                    fontSize : 25
                },
                
                scales : {
                    yAxes : [
                        {
                            ticks : {
                                beginAtZero : true
                            }
                        }
                    ]
                }
            }
        })
    }

    if (tipo_variavel.value === "discreta") {

        document.getElementById('myChart').innerHTML = ''

        let ctx = document.getElementById("myChart")
        

        let meu_grafico = new Chart (ctx, {
            type : "bar",
            data : {
                labels : filtra_repeticao,
                datasets: [
                    {
                        label : "",
                        data : porcent_Simples,
                        backgroundColor : [
                            '#1d3557',
                            '#457b9d',
                            '#f4a261',
                            '#e9c46a',
                            '#02c39a',
                            '#c44536',
                            '#011627',
                            '#283618',
                            '#540b0e',
                            '#c9ada7',
                            '#e36414',
                            '#ce4257'
                        ],
                        borderWidth : 2,
                        width : 5


                    }
                ]
            },
            options : {
                title : {
                    text : "Grafico do Dados",
                    display : true,
                    fontSize : 25
                },
                
                scales : {
                    yAxes : [
                        {
                            ticks : {
                                beginAtZero : true
                            }
                        }
                    ]
                }
            }
        })
    }


    if (tipo_variavel.value === "continua") {

        document.getElementById('myChart').innerHTML = ''

        let ctx = document.getElementById("myChart")
        

        let meu_grafico = new Chart (ctx, {
            type : "bar",
            data : {
                labels : aux_graficContinua,
                datasets: [
                    {
                        label : "",
                        data : porcent_Simples,
                        backgroundColor : [
                            '#1d3557',
                            '#457b9d',
                            '#f4a261',
                            '#e9c46a',
                            '#02c39a',
                            '#c44536',
                            '#011627',
                            '#283618',
                            '#540b0e',
                            '#c9ada7',
                            '#e36414',
                            '#ce4257'
                        ],
                        borderWidth : 2,
                        
                        width : 5 ,

                        
                        


                    }
                ]
            },
            options : {
                title : {
                    text : "Grafico do Dados",
                    display : true,
                    fontSize : 25,
                    
                },
                
                scales : {
                    xAxes : [
                        {
                            barPercentage: 1.25,
                            
                        }
                    ],
                    yAxes : [
                        {
                            ticks : {
                                beginAtZero : true
                            }
                        }
                    ]
                }
            }
        })
    }

    
}

//############################################# FIM CRIAÇÂO GRAFICO #############################################################################