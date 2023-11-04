package M2S04.ex4;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        boolean isIdadeValida = false; //boa pratica colocar is com boolean
        while (!isIdadeValida){

            System.out.println("Informe sua ideade:");
            Scanner sacanner = new Scanner(System.in);
            int idade = sacanner.nextInt();
            try {
                validarIdade(idade);
                //se não quebrar continua
                System.out.println("Olá, sua idade é:" + idade);
                isIdadeValida = true;
            } catch (IdadadeInvalidaException e){
                System.out.println("idade informada invalida!");
                isIdadeValida = false;
            }

        }



    }

    private static void validarIdade(int idade){
        if(idade<=0 || idade> 100){
            //throw new IllegalArgumentException("Idade invalida");
            throw new IdadadeInvalidaException();
        }



    }
}
