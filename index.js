const perguntas = [
    {
      Pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas:[
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é a maneira correta de comentar código em JavaScript?",
      respostas:[
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é o operador usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas:[
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas:[
        "parseInt()",
        "stringToInt()",
        "parseString()",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas:[
        "32",
        "5",
        "5",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas:[
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é a maneira correta de selecionar um elemento HTML com o id 'myElement' em JavaScript?",
      respostas:[
        "getElementById('myElement')",
        "selectElementById('myElement')",
        "select('myElement')",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o resultado da expressão 10 > 9 em JavaScript?",
      respostas:[
        "true",
        "false",
        "null",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas:[
        "+",
        "&",
        "concat()",
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas:[
        "function",
        "def",
        "função",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
        corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  
  
  