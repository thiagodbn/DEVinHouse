package M2S01;

import java.util.Scanner;

public class AdivinheONumero {
    public static void main (String[] args) {
        System.out.println("Adivinhe qual numero de 1 a 5 eu estou pensando");
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite um numero:");
        int numero = teclado.nextInt();

        int rand = (int) (Math.random() * 5 + 1);

        if (numero  == rand) {
            System.out.println("VOCE ACERTOU!");
            System.out.println("O número que pensei era "+ rand + " e voce escolheu " + numero);
        } else {
            System.out.println("VOCE ERROU!");
            System.out.println("O número que pensei era "+ rand + " e voce escolheu " + numero);
        }
    }
}
