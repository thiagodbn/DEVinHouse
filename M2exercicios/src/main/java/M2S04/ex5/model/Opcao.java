package M2S04.ex5.model;

import M2S04.ex5.exeption.OpcaoInvalidaException;

public enum Opcao {
    CADASTRAR_HEROI,
    CADASTRAR_VILAO,
    LISTAR,
    SAIR;

    public static Opcao converter(int codigo) throws OpcaoInvalidaException {
        if(codigo == 0 || codigo > 4)
            throw new OpcaoInvalidaException("Opção invalida!");
        return Opcao.values()[codigo-1];
    }
}
