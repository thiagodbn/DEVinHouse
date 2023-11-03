package M2S03.POOinstancias;

public class TestaContador2 {
    public static void main(String[] args) {
        Contador2 contador = new Contador2("Olá, hoje é dia de apreender mais.");

        int qtdPalavras = contador.contarPalavras();
        System.out.println(qtdPalavras);

    }
}
