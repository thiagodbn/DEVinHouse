package M2S01;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
import java.time.Period;

public class DefinirPossibilidadeDeVoto {
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Digite sua data de nascimento (formato DD/MM/YYYY):");
        String dataniver = teclado.nextLine();

        DateTimeFormatter formatter= DateTimeFormatter.ofPattern("d/M/yyyy");
        System.out.println("data inserida "+dataniver);

        LocalDate dataniverformatada = LocalDate.parse(dataniver, formatter);
        System.out.println("Data inserida formatada: " + dataniverformatada);


        LocalDate hoje = LocalDate.now();
        System.out.println("Data do Dia de Hoje: " + hoje); //2023-10-19

        Period periodo = Period.between(dataniverformatada, hoje);
        int anosDeDiferenca = periodo.getYears();
        System.out.println("Voce tem " + anosDeDiferenca + " anos.");

        if ( anosDeDiferenca>= 59 || anosDeDiferenca == 16 || anosDeDiferenca == 17){
            System.out.println("O voto é Opcional");
        } else if (anosDeDiferenca >= 18){
            System.out.println("Voto é Obrigadorio");
        } else {
            System.out.println("Voto é Proibido");
        }

    }
}
