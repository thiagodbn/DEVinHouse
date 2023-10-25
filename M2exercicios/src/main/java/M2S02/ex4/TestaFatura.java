package M2S02.ex4;

public class TestaFatura {
    public  static void main(String[] args){
        Fatura novafatura = new Fatura("1","Descrição 1",-10,-2.50);
        Fatura novafaturaoutra = new Fatura("2","Descrição 2",3,5.00);

        System.out.println( novafatura.getValorItem());
        System.out.println( novafaturaoutra.getValorItem());

    }

}
