package M2S04.ex1;

public class ContaCorrente extends Conta implements Operavel {

    @Override
    protected double obterSaldoAtual() {
        return super.saldo; //super para indicar que veio da super classe
    }

    @Override
    public void depositar(double valor) {
        this.saldo+=valor; //saldo= saldo+valor
    }

    @Override
    public double sacar(double valor) {
        this.saldo -=valor; //saldo= saldo-valor
        return saldo;
    }
}
