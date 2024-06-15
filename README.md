## RNA Perceptron

A RNA (Rede Neural Artificial) Perceptron é um dos modelos mais simples de rede neural, sendo a base para redes neurais mais complexas. É um classificador linear usado principalmente para problemas de classificação binária. A seguir, descrevemos o funcionamento básico do Perceptron.

### Estrutura

Um Perceptron consiste em um único neurônio com múltiplas entradas e uma única saída. Cada entrada possui um peso associado e o neurônio também possui um bias (viés).

### Funcionamento

1. **Inicialização dos Pesos:** Os pesos (`w`) e o bias (`b`) são inicializados com valores pequenos (geralmente aleatórios).

2. **Cálculo da Entrada Ponderada:** A entrada ponderada é calculada pela soma das multiplicações dos pesos pelas respectivas entradas (`x`), mais o bias:
    \[
    z = \sum_{i=1}^{n} w_i \cdot x_i + b
    \]

3. **Função de Ativação:** O valor da entrada ponderada `z` é passado por uma função de ativação. No caso do Perceptron, a função de ativação é a função degrau (também conhecida como função Heaviside):
    \[
    \text{saída} = \begin{cases} 
    1 & \text{se } z \geq 0 \\
    0 & \text{se } z < 0 
    \end{cases}
    \]

4. **Atualização dos Pesos:** Os pesos são atualizados com base no erro (diferença entre a saída esperada e a saída obtida). O algoritmo de aprendizado é chamado de "regra do Perceptron" e é definido como:
    \[
    w_i = w_i + \Delta w_i
    \]
    onde
    \[
    \Delta w_i = \eta \cdot (d - y) \cdot x_i
    \]
    Aqui, `η` é a taxa de aprendizado, `d` é a saída desejada, `y` é a saída calculada e `x_i` é a entrada correspondente.

### Exemplo

Suponha que tenhamos um Perceptron com duas entradas (`x1` e `x2`) e queremos treinar para reconhecer a porta lógica AND. Os dados de treinamento seriam:

| x1 | x2 | saída esperada |
|----|----|----------------|
| 0  | 0  | 0              |
| 0  | 1  | 0              |
| 1  | 0  | 0              |
| 1  | 1  | 1              |

Inicializamos os pesos e o bias (ex.: `w1 = 0.1`, `w2 = 0.2`, `b = 0.1`). Durante o treinamento, ajustamos os pesos até que o Perceptron consiga classificar corretamente todos os exemplos de treinamento.

### Limitações

- **Linearidade:** O Perceptron só consegue resolver problemas que são linearmente separáveis.
- **Convergência:** O algoritmo de aprendizado do Perceptron garante a convergência apenas se os dados forem linearmente separáveis.

### Conclusão

Embora o Perceptron tenha limitações, ele é fundamental para o entendimento de redes neurais mais avançadas. Ele introduz conceitos importantes como pesos, bias, funções de ativação e aprendizado supervisionado.

