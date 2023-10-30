package M2S02.ex6;
import java.util.Scanner;
public class TestaPerfilDeSaude {
    public  static void main(String[] args){
        //PerfilDeSaude novoperfil = new PerfilDeSaude("Thiago","Noronha","Masculino","08/03/1994",1.78,92);
        Scanner scanner = new Scanner(System.in);

        PerfilDeSaude novoperfil = new PerfilDeSaude("T","N","Masculino","08/03/1994",1.78,92);

        System.out.print("Digite o seu nome: ");
        novoperfil.setNome(scanner.nextLine());

        System.out.print("Digite o seu sobrenome: ");
        novoperfil.setSobreNome(scanner.nextLine());

        System.out.print("Digite o seu gênero: ");
        novoperfil.setSexo(scanner.nextLine());

        System.out.print("Digite a sua data de nascimento (dd/MM/yyyy): ");
        novoperfil.setDataAniversario(scanner.nextLine());

        System.out.print("Digite a sua altura em metros: ");
        novoperfil.setAltura(scanner.nextDouble());

        System.out.print("Digite o seu peso em quilogramas: ");
        novoperfil.setPeso(scanner.nextDouble());

        scanner.close();

        System.out.println("-nome: " + novoperfil.getNome() + " -Sobrenome: " + novoperfil.getSobreNome());
        System.out.println("-Sexo: "+novoperfil.getSexo() + " -Data de Nascimento: " + novoperfil.getDataAniversario() + " -Idade: " + novoperfil.calcularIdade());
        System.out.println("-Altura: "+ novoperfil.getAltura() + " -Peso:"+ novoperfil.getPeso());
        System.out.println("-Frequência cardíaca máxima por minuto é: " + novoperfil.calcularFrequenciaMax());
        System.out.println("A frequência alvo é de " + novoperfil.calcularFrequenciaAlvoMin() + " a " + novoperfil.calcularFrequenciaAlvoMax());
        System.out.println("IMC é: " + String.format("%.2f", novoperfil.calculoIMC()));

    }
}
