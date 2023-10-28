package M2S02.ex5;

public class TestaFrequenciaCardiaca {
    public  static void main(String[] args){
        FrequenciaCardiaca novaFrequencia = new FrequenciaCardiaca("Thiago","Noronha","08/03/1994");
        System.out.println("Nome: "+ novaFrequencia.getNome()+" Sobrenome :"+ novaFrequencia.getSobreNome()+" Data de nascimento :"+ novaFrequencia.getDataAniversario());
        System.out.println("Como sua idade é: "+novaFrequencia.calcularIdade());
        System.out.println("frequência cardíaca máxima por minuto é: "+ novaFrequencia.calcularFrequenciaMax());
        System.out.println("A frequência alvo é de "+ novaFrequencia.calcularFrequenciaAlvoMin()+" a "+ novaFrequencia.calcularFrequenciaAlvoMax()+".");
    }


}
