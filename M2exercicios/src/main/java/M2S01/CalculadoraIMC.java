package M2S01;

import java.util.Scanner;

public class CalculadoraIMC {
    //Fórmula IMC = peso(Kg) / (altura(m) x altura(m)(2 casas ou mais).
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite seu peso em Kg:");
        double peso = teclado.nextDouble();
        System.out.print("Digite sua altura com 2 casas depois da virgula em metros:");
        double altura = teclado.nextDouble();

        double imc = peso/(altura*altura);
        System.out.printf("Seu peso é %.2f Kg e altura %.2f m, seu IMC é %.2f %n",peso, altura , imc);
    }
}
