package M2S02.ex1;

public class TesteData {
    public  static void main(String[] args){

        Data minhaData = new Data(3,8,1994);


        System.out.println("Data Original: "+ minhaData.exibirData());

        minhaData.setDia(1);
        System.out.println("Data Dia modificado: "+ minhaData.exibirData());
        minhaData.setMes(1);
        System.out.println("Data Dia/mes modificado: "+ minhaData.exibirData());
        minhaData.setAno(2000);
        System.out.println("Data Dia/mes/ano modificado:: "+ minhaData.exibirData());



    }
}
