package M2S01;

import java.util.Scanner;

public class NomeDoUsuario {
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite seu nome:");
        String nome = teclado.nextLine();

        System.out.print("Digite seu Sobrenome:");
        String sobrenome = teclado.nextLine();

        System.out.printf("O seu nome completo é: %s %s%n", nome, sobrenome);


    }
}
