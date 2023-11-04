package M2S04.ex3;

public class Produto implements Tributavel {
    private double valor;
    private double valorImposto;

    @Override
    public double calcularValorImposto() {
        return valor+ valorImposto;
    }
}
