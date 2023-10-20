package M2S01;

import java.util.Scanner;

public class ReajusteDeSalario {
    public static void main (String[] args) {

        Scanner teclado = new Scanner(System.in);
        System.out.println("Reajuste de salário empresa X");

        System.out.print("Insira o salário:");
        double salario = teclado.nextDouble();

        double fatorajuste;
        if (salario>2500){
            fatorajuste= 1.05;
            //System.out.print("maior que 2500");
    } else if (salario>1700) {
            fatorajuste= 1.1;
            //System.out.print("entre 2500 e 1700");
        }else if (salario>1200) {
            fatorajuste= 1.15;
            //System.out.print("entre 1200 e 1700");
        } else{
            fatorajuste= 1.2;
            //System.out.print("menor que 1200");
        }

    double salariocorigido = fatorajuste * salario;
    double aumento = salariocorigido - salario;

        System.out.println("---------------------RESUMO---------------------");
        System.out.printf("O salário antes do reajuste: R$%.2f\n", salario);
        System.out.printf("O percentual de aumento aplicado: %.0f%%\n", ((fatorajuste*100)-100) );
        System.out.printf("O valor do aumento: R$%.2f\n", aumento);
        System.out.printf("O novo salário, após o aumento: R$%.2f\n", salariocorigido);

}}
