package M2S02.ex6;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class PerfilDeSaude{
    private String nome;
    private String sobreNome;
    private String sexo;
    private String dataAniversario;
    private double altura;
    private double peso;

    public PerfilDeSaude(String nome, String sobreNome, String sexo, String dataAniversario, double altura, double peso){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.sexo = sexo;
        this.dataAniversario = dataAniversario;
        this.altura = altura;
        this.peso = peso;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getDataAniversario() {
        return dataAniversario;
    }

    public void setDataAniversario(String dataAniversario) {
        this.dataAniversario = dataAniversario;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public int calcularIdade() {
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate dataNascimento = LocalDate.parse(dataAniversario, formato);
        LocalDate hoje = LocalDate.now();
        int idade = hoje.getYear() - dataNascimento.getYear();
        return idade;
    }


    public double calcularFrequenciaMax() {
        return 220 - calcularIdade();
    }

    public double calcularFrequenciaAlvoMin() {
        return calcularFrequenciaMax() * 0.5;
    }

    public double calcularFrequenciaAlvoMax() {
        return calcularFrequenciaMax() * 0.85;
    }

    //Fórmula IMC = peso(Kg) / (altura(m) x altura(m)(2 casas ou mais).
    public double calculoIMC(){
        return peso/(altura*altura);
    }


}
