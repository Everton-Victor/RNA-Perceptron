## RNA Perceptron

A RNA (Rede Neural Artificial) Perceptron é um dos modelos mais simples de rede neural, sendo a base para redes neurais mais complexas. É um classificador linear usado principalmente para problemas de classificação binária. A seguir, descrevemos o funcionamento básico do Perceptron.

### Estrutura

Um Perceptron consiste em um único neurônio com múltiplas entradas e uma única saída. Cada entrada possui um peso associado e o neurônio também possui um bias (viés).

### Funcionamento

1. **Inicialização dos Pesos:** Os pesos ($w$) e o bias ($b$) são inicializados com valores pequenos (geralmente aleatórios).

2. **Cálculo da Entrada Ponderada:** A entrada ponderada é calculada pela soma das multiplicações dos pesos pelas respectivas entradas $(x_i)$, mais o bias:

    $$z = \sum_{i=1}^{n} w_i x_i + b$$

3. **Função de Ativação:** O valor da entrada ponderada $z$ é passado por uma função de ativação. No caso do Perceptron, a função de ativação é a função degrau (também conhecida como função Heaviside):

    $$\text{saída} = \begin{cases} 
    1 & \text{se } z \geq 0 \\
    0 & \text{se } z < 0 
    \end{cases}$$

4. **Atualização dos Pesos:** Os pesos são atualizados com base no erro (diferença entre a saída esperada e a saída obtida). O algoritmo de aprendizado é chamado de "regra do Perceptron" e é definido como:

    $$w_i = w_i + \Delta w_i$$
    onde

    $$\Delta w_i = \eta (d - y) x_i$$

    Aqui, $\eta$ é a taxa de aprendizagem, $d$ é a saída desejada, $y$ é a saída calculada e $x_i$ é a entrada correspondente.

### Exemplo 

Suponha que tenhamos um Perceptron com duas entradas $(x_1)$ e $(x_2)$ e queremos treinar para reconhecer a porta lógica AND. Os dados de treinamento seriam:

| $(x_1)$ | $(x_2)$ | saída esperada |
|---------|---------|----------------|
| 0       | 0       | 0              |
| 0       | 1       | 0              |
| 1       | 0       | 0              |
| 1       | 1       | 1              |

Inicializamos os pesos e o bias (ex.: ($w_1$ = 0.1), ($w_2$ = 0.2), ($b$ = 0.1)). Durante o treinamento, ajustamos os pesos até que o Perceptron consiga classificar corretamente todos os exemplos de treinamento.

### Código em JavaScript

O código implementa um Perceptron em JavaScript para treinar e testar um modelo de rede neural artificial para reconhecimento de padrões

### Como Usar

1. **Requisitos**: Certifique-se de ter o Node.js instalado.
2. **Execução**: Execute o código em um ambiente Node.js. Ele guiará você através das entradas necessárias e mostrará os resultados do treinamento e dos testes.

### Explicação do Código

O código implementa um Perceptron em JavaScript utilizando a biblioteca readline para capturar entradas do usuário. Aqui estão as funções principais:

- **`inputEntradas()`**, **`inputEntradasAposTreinamento()`**, **`inputPesos()`**, **`inputTaxaAprendizagem()`**: Funções assíncronas para capturar diferentes tipos de entradas do usuário.
- **`fnet(entrada, pesos)`**: Calcula a entrada ponderada $z$ do Perceptron.
- **`saida(result)`**: Aplica a função de ativação do Perceptron.
- **`novosPesos(entrada, taxa_aprendizagem, saida, pesos)`**: Atualiza os pesos do Perceptron com base no erro.
- **`main()`**: Função principal que coordena o treinamento