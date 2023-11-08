package M2S04.ex5.cli;

import M2S04.ex5.model.Heroi;
import M2S04.ex5.model.Personagem;
import M2S04.ex5.model.Vilao;

import java.util.*;

public class Display {
    public void exibirMenu(){
        System.out.println("**Menu de opções:**");
        System.out.println("");
        System.out.println("1 - Cadastrar Herói");
        System.out.println("2 - Cadastrar Vilão");
        System.out.println("3 - Listar");
        System.out.println("4 - Sair");



    }

    public int obterOpcao() {
        System.out.println("Informe a opção desejada:");
        Scanner scanner = new Scanner(System.in);
        try{
            int op = scanner.nextInt();
            return op;
        } catch (InputMismatchException e){
            return -1;
        }

    }

    public void exibirMensagem(String mensagem) {
        System.out.println();
        System.out.println("-->>"+mensagem);
        System.out.println();
    }

    public Heroi obterDadosHeroi() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Informe o nome: ");
        String nome = scanner.nextLine();
        System.out.println("Informe o super poder: ");
        String superpoder = scanner.nextLine();
        System.out.println("Informe o nome na vida real: ");
        String nomeVidaReal = scanner.nextLine();

        return new Heroi(nome, superpoder, nomeVidaReal);
    }

    public Vilao obterDadosVilao() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Informe o nome: ");
        String nome = scanner.nextLine();
        System.out.println("Informe o super poder: ");
        String superpoder = scanner.nextLine();
        System.out.println("Informe o tempo de prisão: ");
        int tempoDePrisao = scanner.nextInt();

        return new Vilao(nome, superpoder, tempoDePrisao);
    }

    public void listar(List<Personagem> personagens) {
        Collections.sort(personagens);


        System.out.println("Lista");
        personagens.forEach(System.out::println); //System.out::println EQUIVALE p -> System.out.println(p)
        System.out.println();
    }

    //Menu de Oções:
    // 1 - Cadastrar Herói
    //
    // 2 - Cadastrar Vilão
    //
    // 3 - Listar
    // 4 - Sair
    //só encerra se apertar 4
}
