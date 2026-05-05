Exercício 4 - Sistema de Gestão de Tarefas

Descrição:
Resolução do estudo de caso para o gerenciamento de tarefas e projetos de uma equipe. O código foi desenvolvido em TypeScript e aplica os conceitos de Programação Orientada a Objetos (POO), incluindo a utilização de classes, modificadores de acesso (public e private) e manipulação de arrays com métodos de filtro.

Como executar o programa

Pelo terminal, navegue até a pasta onde o arquivo index.ts está salvo e execute o comando:

ts-node index.ts

Testes Realizados

Para validar o funcionamento do sistema e o tratamento de erros, algumas funções de teste foram criadas no final do código. Ao rodar a aplicação, os seguintes passos são executados automaticamente e os resultados são impressos no terminal:

Teste de Cadastro: Instancia 3 tarefas diferentes e as vincula a dois projetos distintos ("App Mobile" e "Site Institucional"), inserindo-as no sistema de gestão.

Teste de Atualização: Altera o status da tarefa de ID 1 de "Pendente" para "Concluída", com sucesso.

Teste de Erro (Atualização): Tenta atualizar o status de uma tarefa com ID inexistente (99), disparando a validação que acusa que a tarefa não foi encontrada.

Teste de Consulta: Utiliza o método de filtro para buscar apenas as tarefas pertencentes ao projeto "App Mobile", imprimindo uma lista no console com o status e a descrição de cada uma.

Teste de Erro (Consulta): Tenta buscar as tarefas de um projeto fictício ("Projeto X"), disparando a validação de erro que avisa que nenhuma tarefa foi encontrada para o nome informado.
