package M2S03.EXPOO;

public class Funcionario {
    private String nome;
    private Float salario;
    private Long cpf;

    public Funcionario(){    }

    public Funcionario(String nome) {
        this.nome = nome;
    }

    public Funcionario(String nome, Float salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public void aumentar (Float valor){
    this.salario+=valor;
    }
    public void aumentar(Float valor, Float comissao){
        this.salario = this.salario+valor+comissao;
    }

//    public Funcionario(String nome, Float salario, Long cpf) {
//        this.nome = nome;
//        this.salario = salario;
//        this.cpf = cpf;
//    }

//    public void promover(Float percentual){
//        this.salario *= ( 1 + ( percentual / 100 )) ;
//    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Float getSalario() {
        return salario;
    }

    public void setSalario(Float salario) {
        this.salario = salario;
    }

    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }
}
