package M2S02.ex2;

public class TestePF {
    public  static void main(String[] args) {
        try {
        PessoaFisica usuario1 = new PessoaFisica("1234567891", "Thaigo", "Noronha", "10/10/22", "thi@t.com", "190");

        System.out.println("Data Usuario1: " + usuario1.exibirDados());

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }

    }

}
