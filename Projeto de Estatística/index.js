function calcular() {     //Funca
    
    console.log(document.getElementById("nome_da_varialvel").value)


    // Tabelas------------------------------------------------------------------------------------------------------------------
    
    nome_Variavel = document.getElementById("nome_da_varialvel").value
    
    let titulos = document.querySelector(".tituloTabela")
    
    titulos.textContent = "Tabela real"

    document.getElementById("tabela-descritiva").innerHTML = ""
    let tabela = document.getElementById("tabela-descritiva")
    
    function criaElementoTab (elemento) {        //Funçào que cria elementos para ser adicionado na tabela
        return document.createElement(elemento)
    }                                            //Funçào que cria elementos para ser adicionado na tabela

    let thead = criaElementoTab("thead")         //                         ^
    let tbody = criaElementoTab("tbody")         //                         |                                          
    let tfoot = criaElementoTab("tfoot")         //Armazenando elementos criados na função a cima, em variaveis

    let indices_tabela = [nome_Variavel, "Frequência"]
    let tr = criaElementoTab("tr")

    function cria_InsereCelula (tag, text) {     // Função cria a tag desejada e insere o valor dentro da tag
        tag = criaElementoTab(tag)
        tag.textContent = text
        return tag
    }                                            // Função cria a tag desejada e insere o valor dentro da tag
    

    for(i = 0; i < indices_tabela.length; i++) {   //Este "for", faz com que seja criado as colunas referente aos indices

        let td = cria_InsereCelula("td", indices_tabela[i] )
        tr.appendChild(td) 
        
    }                                              //Este "for", faz com que seja criado as colunas referente aos indices
    

    tabela.appendChild(thead)
        thead.appendChild(tr)//  
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)


    var lista_DeDados = []                            //Captura dados inseridos, para coloca-los em linhas
    var x = []  
    
    dados_Utilizados = document.getElementById("dados_inseridos").value

    lista_DeDados = dados_Utilizados.split(";")      //Captura dados inseridos, para coloca-los em linhas
    lista_DeDados.sort()

    // console.log(tbody)

    // console.log(lista_DeDados)

    // dados_Utilizados2 = document.getElementById("dados_inseridos").value

    // x = dados_Utilizados2.split(";") 

    // for (i = 0; i < lista_DeDados.length; i++) {
    //     var x =  lista_DeDados
    //     let contador = 1

    //     for (j = (i + 1); j < x.length; j++){
    //         if (lista_DeDados[i] == x[j]){
    //             contador += 1
            
    //         }
    //         else{
    //             contador = 0
    //         }

    //     // console.log("O i na posicao : " + lista_DeDados[i] + " repete : " + contador)
    //     }

    var fretot = 0
    var x = 0
    var vet_contador = []

    

    for (let i = 0; i < lista_DeDados.length; i = x) {  
        let freqCont = 1
        for (x = i + 1; x < lista_DeDados.length; x++) { 
            if (lista_DeDados[i] == lista_DeDados[x]) {
                freqCont++;
                
            } else {
            break;
            }

        }
        vet_contador.push(freqCont)

    }

    filtra_repeticao = [ ...new Set( lista_DeDados ) ];

    for (i = 0; i < filtra_repeticao.length; i++) {

        // console.log(lista_DeDados[i])

        let linha_Body = criaElementoTab("tr")

        let Celula_Criada = cria_InsereCelula("td", filtra_repeticao[i])
        let coluna_Criada = cria_InsereCelula("td", vet_contador[i])
        
        linha_Body.appendChild(Celula_Criada )
        linha_Body.appendChild(coluna_Criada )

        tbody.appendChild(linha_Body)

    }
    

    // // O que foi inserido no thead esta a cima  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ FIM ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //     }



    
// FIM Tabelas--------------------------------------------------------------------------------------------------------------
}
