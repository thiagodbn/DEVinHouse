package M2S02.ex3;

public class TesteRetangulo {
    public  static void main(String[] args){
        try {

        Retangulo novoRetangulo = new Retangulo(2,4);

        System.out.println("As dimensões do Retângulo são: "+ novoRetangulo.exibirRetangulo());
        System.out.println("O perímetro é: "+ novoRetangulo.perimetro());
            System.out.println("A area é: "+ novoRetangulo.area());


        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }

}
