package M2S01;

import java.util.Scanner;

public class CalculadoraDeMediaFinal {
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite sua primeira nota:");
        double nota1 = teclado.nextDouble();
        System.out.print("Digite sua segunda nota:");
        double nota2 = teclado.nextDouble();
        System.out.print("Digite sua terceira nota:");
        double nota3 = teclado.nextDouble();

        double media = (nota1+nota2+nota3)/3;
        System.out.printf("Sua primeira nota é %.2f%n Segunda Nota %.2f%n terceira nota %.2f%n Sua Media final é: %.2f %n",nota1, nota2 , nota3, media);
    }
}
