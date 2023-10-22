package M2S02.ex2;

public class PessoaFisica {
    private String cpf;
    private String nome;
    private String sobrenome;

    private String data;
    private  String email;
    private String telefone;


            public PessoaFisica(String cpf,String nome, String sobrenome, String data, String email, String telefone){
            setCpf(cpf);
            this.nome = nome;
            this. sobrenome = sobrenome;
            this.data = data;
            this.email = email;
            this.telefone = telefone;
            }

    //SET GET CPF
    public void setCpf(String cpf) {
                if (validaCPF(cpf)){
                    this.cpf = cpf; //ok
                }else{
                    //System.out.println("CPF INVALIDO");
                    throw new IllegalArgumentException("CPF INVALIDO");
                }

    }

    public String getCpf() {
        return cpf;
    }

    //SET GET NOME
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    //SET GET SOBRENOME
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    //SET GET DATA
    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    //SET GET EMAIL
    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    //SET GET TELEFONE
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getTelefone() {
        return telefone;
    }

    //Verifica CPF tamanho só
    private boolean validaCPF(String cpf) {
        return cpf.length() == 11;
    }

    //exibir dados
    public String exibirDados(){
        return "CPF:"+cpf + "Nome:" + nome + "Sobrenome:" + sobrenome + "Data:" + data+ "email:"+ email + "Telefone:"+telefone;
    }

}
