function tabuada(){
    let fator1 = Number(prompt('Digite um número para calcúlo de sua tabuada:'));
    let fator2 = Number(prompt('Digite o número total de resultados para essa tabuada:'));
    let resultado = [];

    for(let i = 0; i <= fator2; i++){
        resultado[i] = fator1 * i;

    }

    let resultadoCompleto = [];
    for(let idx = 0; idx <= fator2; idx++){
        resultadoCompleto[idx] = (`${fator1} X ${idx} = ${resultado[idx]}\n`);
    }

    alert(resultadoCompleto.join(''));

    novaTabuada();

    function novaTabuada(){
        let opcao = Number(prompt('Deseja calcular uma nova tabuada?\n1 - Sim\n2 - Não'));
        if(opcao == 1){
            tabuada();
        }else if(opcao == 2){
            alert('Obrigado! Até a próxima.🙋‍♂️');
        }else{
            alert('Opção inválida!');
            novaTabuada();
        }
    }
}

tabuada();