package M2S01;

import java.util.Scanner;

public class calculadoraPAePG {
    public static void main (String[] args) {

        Scanner teclado = new Scanner(System.in);
        System.out.print("Calculadora de P.A. e P.G.");

        System.out.print("Insira um valor inicial:");
        int varinicio = teclado.nextInt();

        System.out.print("Insira o valor da raiz:");
        int raiz = teclado.nextInt();

        System.out.print("Digite o numero:%n 1-P.A. (Progressão Aritmética),%n 2-P.G. (Progressão Geométrica)");
        int operacao = teclado.nextInt();

        int valorFinal=11;

        switch (operacao){
            case 1:
                for(int n =1; n<valorFinal; n++) {
                //System.out.println(n+"º");
                int pa= varinicio+(n-1)*raiz;
                System.out.println(pa);
                }
                break;

            case 2:
                for(int n =1; n<valorFinal; n++) {
                    //System.out.println(n+"º");
                    double pg= varinicio* Math.pow(raiz, n-1);
                    System.out.println((int)pg);
                }
                break;

            default:
                System.out.println("Numero não valido de operação!");
        }
    }
}
