package M2S03.POOstatic;

public class TestaContador {
    public static void main(String[] args) {
        String frase1 = "O cachorro subiu o muro.";
        int qtdPalavra = Contador.contarPalavras(frase1);
        System.out.println("tem: "+ qtdPalavra);
    }
}
