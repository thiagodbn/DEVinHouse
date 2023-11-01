package M2S03;

public class TesteFuncionario {
    public static void main(String[] args) {
        Funcionario funcionario1 = new Funcionario("Thaigo",1000_00F); //,11122233345L
        //ou
        Funcionario funcionario2 = new Funcionario("Dark Huk",2000_00F); //,66677788899L
        Funcionario fun = new Funcionario("Duda");
        fun.setSalario(100F);

        fun.aumentar(500F);

        System.out.println(fun.getSalario());
    }
}
