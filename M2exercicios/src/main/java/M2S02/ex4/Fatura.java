package M2S02.ex4;

public class Fatura {
    private String numero;
    private String descricao;
    private int quantidade = 0;
    private double preco = 0;

    public Fatura(String numero, String descricao, int quantidade, double preco){
        this.numero = numero;
        this.descricao = descricao;
        setQuantidade(quantidade);
        setPreco(preco);
    }

    private boolean validaQuantidade(int quantidade) {
        return quantidade > 0;
    }
    private boolean validaPreco(double preco) {
        return preco > 0;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getNumero() {
        return numero;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setQuantidade(int quantidade) {
        if (validaQuantidade(quantidade)){
            this.quantidade = quantidade;
        } else {
            System.out.println("Valor Quantidade negativo. Usando valor padrão 0.");
        }
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setPreco(double preco) {
        if (validaPreco(preco)) {
            this.preco = preco;
        } else {
            System.out.println("Valor Preço negativo. Usando valor padrão 0.");
        }
    }

    public double getPreco() {
        return preco;
    }

    public String getValorItem(){
        return  "Item " + getNumero()+" -Quantidade " +getQuantidade() +" -Preço "+getPreco()+" - Total de " + getValorFatura();
    }

    public String getValorFatura(){
        double totalPorItem = quantidade * preco;
        return String.format("%.2f", totalPorItem);
    }
}
