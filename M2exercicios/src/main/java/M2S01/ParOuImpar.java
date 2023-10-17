package M2S01;

import java.util.Scanner;

public class ParOuImpar {
    public static void main (String[] args) {
        System.out.println("Verifica se o numero é Par ou Ímpar!");
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite um numero:");
        int numero = teclado.nextInt();

        if (numero % 2 == 0) {
            System.out.println("O número " + numero + " é Par.");
        } else {
            System.out.println("O número " + numero + " é Ímpar.");
        }
    }
}
