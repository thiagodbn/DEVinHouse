package M2S02.ex1;

public class Data {
    private int mes;
    private int dia;
    private int ano;

    public Data(int mes, int dia,int ano){
        this.mes = mes;
        this.dia = dia;
        this.ano = ano;
    }

    //GET E SET MES
    public int getMes(){
     return mes;
    }
    public void setMes(int mes){
        this.mes=mes;
    }

    //GET E SET DIA
    public int getDia(){
        return dia;
    }
    public void setDia(int dia){
        this.dia=dia;
    }

    //GET E SET ANO
    public int getAno(){
        return ano;
    }
    public void setAno(int ano){
        this.ano=ano;
    }

    //Método exibir data formatada dia/mes/ano
    public String exibirData(){
        return dia + "/" + mes + "/" + ano;
    }

}
