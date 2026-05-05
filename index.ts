// 1. CLASSE TAREFA

class Tarefa {
    public id: number;
    public descricao: string;
    public status: string;
    public projeto: string;

    // Cria uma nova tarefa com os dados informados
    constructor(id: number, descricao: string, status: string, projeto: string) {
        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.projeto = projeto;
    }
}

// 2. CLASSE GESTOR DE TAREFAS

class GestorTarefas {
    // Guarda a lista de tarefas. Privado.
    private tarefas: Tarefa[] = [];

    // Adiciona a tarefa à lista do sistema
    public adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.log(`[Sucesso] Tarefa '${tarefa.descricao}' adicionada ao projeto '${tarefa.projeto}'.`);
    }

    // Busca a tarefa pelo ID e altera o status dela
    public atualizarStatus(id: number, novoStatus: string): void {
        const tarefa = this.tarefas.find(t => t.id === id);

        // Tratamento de erro caso a tarefa não exista
        if (!tarefa) {
            console.error(`[Erro] Falha ao atualizar. Tarefa de ID ${id} não encontrada.`);
            return;
        }

        // Atualiza o valor do status
        tarefa.status = novoStatus;
        console.log(`[Sucesso] O status da tarefa ${id} foi atualizado para '${novoStatus}'.`);
    }

    // Retorna uma lista com todas as tarefas do projeto especificado
    public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        // O método filter cria uma nova lista apenas com os itens que passam no teste
        const tarefasDoProjeto = this.tarefas.filter(t => t.projeto === projeto);

        // Tratamento de erro caso o projeto não exista ou não tenha tarefas
        if (tarefasDoProjeto.length === 0) {
            console.error(`[Erro] Nenhuma tarefa encontrada para o projeto '${projeto}'.`);
        }

        return tarefasDoProjeto;
    }
}

// 3. FUNÇÕES DE TESTE

function adicionarTarefasTeste(gestor: GestorTarefas): void {
    // Criando as tarefas para teste (associadas a projetos diferentes)
    const tar1 = new Tarefa(1, "Criar banco de dados", "Pendente", "App Mobile");
    const tar2 = new Tarefa(2, "Desenvolver tela de login", "Em Andamento", "App Mobile");
    const tar3 = new Tarefa(3, "Configurar servidor web", "Pendente", "Site Institucional");

    // Alimentando o sistema
    gestor.adicionarTarefa(tar1);
    gestor.adicionarTarefa(tar2);
    gestor.adicionarTarefa(tar3);
}

function atualizarStatusTeste(gestor: GestorTarefas): void {
    console.log("\n-> Atualizando o status da tarefa 1:");
    gestor.atualizarStatus(1, "Concluída"); // Sucesso

    console.log("\n-> Tentando atualizar uma tarefa que não existe (ID 99):");
    gestor.atualizarStatus(99, "Concluída"); // Vai dar erro
}

function consultarTarefasTeste(gestor: GestorTarefas): void {
    console.log("\n-> Consultando tarefas do projeto 'App Mobile':");
    const tarefasMobile = gestor.consultarTarefasPorProjeto("App Mobile");
    
    // Imprime as tarefas encontradas de forma organizada
    tarefasMobile.forEach(t => {
        console.log(`- [${t.status}] ${t.descricao}`);
    });

    console.log("\n-> Consultando tarefas de um projeto inexistente ('Projeto X'):");
    gestor.consultarTarefasPorProjeto("Projeto X"); // Vai imprimir o erro do método
}

// 4. EXECUTANDO A APLICAÇÃO

console.log("=== INICIANDO SISTEMA DE GESTÃO DE TAREFAS ===");
const meuGestor = new GestorTarefas();

console.log("\n=== ADICIONANDO TAREFAS ===");
adicionarTarefasTeste(meuGestor);

console.log("\n=== ATUALIZANDO STATUS ===");
atualizarStatusTeste(meuGestor);

console.log("\n=== CONSULTANDO TAREFAS POR PROJETO ===");
consultarTarefasTeste(meuGestor);