/**
 * 1 - Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
*/

interface Pessoa {
    nome: string;
    profissao: string;
    idade: number;
    hobbies: string[];
}

/**
* 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
*/

const primeiraPessoa: Pessoa = {
    nome: "João",
    profissao: "Advogado",
    idade: 30,
    hobbies: [
        "Livros",
        "Musicas"
    ]
}

/**
 * 3 e 4 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, e retorne somente a lista de assuntos do objeto.
 * Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 */

function alterarPessoas(pessoa: Pessoa): string[] {
    return pessoa.hobbies;
}

/**
 * 5 - Crie um enum para representar as Matérias do curso (Angular, TypeScript e Git) 
 */

enum Materias {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git",
}

/**
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um. 
 */

interface Professor {
    nome: string;
    materias: Materias[];
}

/**
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos do exercicios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */

const alan: Professor = {
    nome: "Alan",
    materias: [
        Materias.Angular,
        Materias.Git,
        Materias.Typescript
    ]
}

const nathan: Professor = {
    nome: "Nathan",
    materias: [
        Materias.Angular,
        Materias.Git
    ]
}

/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
*/

const professores: Professor[] = [
    alan,
    nathan
]

/**
 * 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 **/

// ---------------------------------------------------------------------------------------------

/**
 * ### Uma forma de resolver:
 * 
 * function alterarProfessores(professores: Professor[]): string[] {
    return professores.map((professor) => professor.nome);
}
 **/

// ---------------------------------------------------------------------------------------------

/**
 * ### Outra forma de resolver:
 */

const alteraNomeProfessor = (professor: Professor) => professor.nome;

function alteraProfessor(professores: Professor[]): string[] {
    return professores.map(alteraNomeProfessor);
}

/**
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 */

function alteraMaterias(professores: Professor[]): Materias[] {
    const materiasDuplicadas = professores.map(p => p.materias).reduce<Materias[]>((acumulador, materias) => {
        return acumulador.concat(materias);
    }, []);

    const materiasSemDuplicadas = new Set(materiasDuplicadas)
    return Array.from(materiasSemDuplicadas);
}

console.log(alteraMaterias(professores));

/**
 * 11 - Faça uma função que receba um argumento de array de Professores e retorne o primeiro Professor encontrado que dê aula de Typescript.
 */

function professorTypescript(professores: Professor[]) {
    return professores.find(professor => professor.materias.includes(Materias.Typescript));
};
