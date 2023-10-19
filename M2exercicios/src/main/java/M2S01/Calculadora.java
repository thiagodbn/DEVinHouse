package M2S01;

import java.util.Scanner;

public class Calculadora {
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Digite o primeiro numero:");
        double num1 = teclado.nextDouble();
        System.out.print("Digite o segundo numero:");
        double num2 = teclado.nextDouble();
        System.out.print("Digite o numero:%n 1-Somar,%n 2-Subtrair,%n 3-Multiplicar,%n 4-Dividir");
        int operacao = teclado.nextInt();

        double resultado;

        switch (operacao){
            case 1:
                System.out.printf("a Soma de %.2f + %.2f%n", num1, num2);
                resultado = num1 + num2;
                System.out.println("O resultado é:"+ resultado);
                break;

            case 2:
                System.out.printf("a Subtração de %.2f - %.2f%n", num1, num2);
                resultado = num1 - num2;
                System.out.println("O resultado é:"+ resultado);
                break;

            case 3:
                System.out.printf("a Multiplicação de %.2f * %.2f%n", num1, num2);
                resultado = num1 * num2;
                System.out.println("O resultado é:"+ resultado);
                break;

            case 4:
                System.out.printf("a Divisão de %.2f / %.2f%n", num1, num2);
                resultado = num1 / num2;
                System.out.println("Resultado é:"+ resultado);
                break;

            default:
                System.out.println("Numero de operação não é valido");
        }
    }
}
