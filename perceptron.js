const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count_interaction = 0;

function inputEntradas() {
    return new Promise((resolve) => {
        rl.question('Digite os valores de entrada x1 x2 x3 bias yk separados por espaço: ', (input) => {
            const entradas = input.trim().split(' ').map(Number);
            resolve(entradas);
        });
    });
}

function inputEntradasAposTreinamento() {
    return new Promise((resolve) => {
        rl.question('Digite os valores de entrada x1 x2 x3 bias separados por espaço ou "sair" para cancelar: ', (input) => {
            if (input.trim().toLowerCase() === 'sair') {
                resolve(null);
            } else {
                const entradas = input.trim().split(' ').map(Number);
                resolve(entradas);
            }
        });
    });
}

function inputPesos() {
    return new Promise((resolve) => {
        rl.question('Digite os pesos w1 w2 w3 wBias separados por espaço: ', (input) => {
            const pesos = input.trim().split(' ').map(Number);
            resolve(pesos);
        });
    });
}

function inputTaxaAprendizagem() {
    return new Promise((resolve) => {
        rl.question('Digite a taxa de aprendizagem: ', (taxa) => {
            const taxaFloat = parseFloat(taxa);
            resolve(taxaFloat);
        });
    });
}

function fnet(entrada, pesos) {
    const [x1, x2, x3, bias] = entrada;
    const [w1, w2, w3, wbias] = pesos;
    return x1 * w1 + x2 * w2 + x3 * w3 + bias * wbias;
}

const saida = (result) => (result > 0) ? 1 : 0;

const novosPesos = (entrada, taxa_aprendizagem, saida, pesos) => {
    const [x1, x2, x3, bias, yk] = entrada;
    const deltas = [];
    const newPesos = [];

    if (yk - saida === 0) {
        count_interaction++;
        return pesos;
    }

    deltas.push(x1 * taxa_aprendizagem * (yk - saida)); // Delta W1
    deltas.push(x2 * taxa_aprendizagem * (yk - saida)); // Delta W2
    deltas.push(x3 * taxa_aprendizagem * (yk - saida)); // Delta W3
    deltas.push(bias * taxa_aprendizagem * (yk - saida)); // Delta WBias

    for (let i = 0; i < pesos.length; i++) {
        newPesos.push(parseFloat(pesos[i] + deltas[i]).toFixed(3)); // Arredonda para 2 casas decimais 
    }

    return newPesos.map(parseFloat); // Converte de volta para números
}

async function main() {
    const entradas = [];
    let pesos = [];
    let taxa_aprendizagem = 0;

    // Captura de entradas do usuário
    for (let i = 0; i < 3; i++) {
        const entrada = await inputEntradas();
        entradas.push(entrada);
    }

    pesos = await inputPesos();
    taxa_aprendizagem = await inputTaxaAprendizagem();

    // Mostrando as entradas capturadas
    console.log('Entradas:');
    console.log(entradas);
    console.log('Pesos:');
    console.log(pesos);
    console.log('Taxa de aprendizagem:', taxa_aprendizagem);

    // RNA Perceptron
    let iteracao = 1;
    while (true) {
        count_interaction = 0;

        for (const entrada of entradas) {
            const fnetResult = fnet(entrada, pesos);
            pesos = novosPesos(entrada, taxa_aprendizagem, saida(fnetResult), pesos);
        }

        console.log(`${iteracao++}ª Iteração: ${pesos.join(' ')}`);

        if (count_interaction === 3) {
            break;
        }
    }

    console.log(`Finalizado após ${iteracao - 1} iterações`);
    console.log('Pesos finais:', pesos);

    // Testando com novos valores
    while (true) {
        const entrada = await inputEntradasAposTreinamento();
        if (entrada === null) {
            console.log('Teste cancelado.');
            break;
        }
        const fnetResult = fnet(entrada, pesos);
        const output = saida(fnetResult);
        console.log(`Resultado para a entrada ${entrada.join(' ')}`);
        console.log(`f(net) = ${fnetResult.toFixed(3)}`);
        console.log(`Logo, y = ${output}`);
    }

    rl.close();
}

main();
