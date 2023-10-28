package M2S02.ex5;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
public class FrequenciaCardiaca {

    private String nome;
    private String sobreNome;
    private String dataAniversario;


    public FrequenciaCardiaca (String nome, String sobreNome, String dataAniversario) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.dataAniversario = dataAniversario;

    }


    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setDataAniversario(String dataAniversario) {
        this.dataAniversario = dataAniversario;
    }

    public String getDataAniversario() {
        return dataAniversario;
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

}
