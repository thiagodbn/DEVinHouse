package M2S02.ex3;

public class Retangulo {
    private double ladoA = 1;
    private double ladoB = 1;


    public Retangulo (double ladoA, double ladoB ) {
        setLadoA(ladoA);
        setLadoB(ladoB);

    }

    //GET e SET


    public void setLadoA(double ladoA) {
        if (validaA(ladoA)){
            this.ladoA = ladoA;
        } else {
            //System.out.println("CPF INVALIDO");
            System.out.println("Lado A invalido (fora do intervalo 0,00 a 20,00). Usando valor padrão 1. ");
        }
    }

    public double getLadoA() {
        return ladoA;
    }

    //Verfica A
    private boolean validaA(double ladoA) {
        return ladoA > 0 && ladoA <= 20;
    }

    public double getLadoB() {
        return ladoB;
    }

    public void setLadoB(double ladoB) {
        if (validaA(ladoB)){
            this.ladoB = ladoB;
        } else {
            //System.out.println("CPF INVALIDO");
            System.out.println("Lado B invalido (fora do intervalo 0,00 a 20,00). Usando valor padrão 1.");
        }
    }

    //exibir dados retangulo

    public String exibirRetangulo() {return "Lado A:" + String.format("%.2f",ladoA) + " Lado B:" + String.format("%.2f",ladoB);}

// calcula perímetro retângulo p=2*(a+b)

    public String perimetro(){
        double CalcPerimetro = 2 * (ladoA + ladoB);
    return String.format("%.2f", CalcPerimetro);}

    public String area(){
        double CalcArea = (ladoA * ladoB);
        return String.format("%.2f", CalcArea);}
}
