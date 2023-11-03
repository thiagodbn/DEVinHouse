package M2S03.POOinstancias;

import java.util.StringTokenizer;

public class Contador2 {
//    a) Crie uma classe 'Contador2'.
//    b) Crie um atributo privado 'frase' (String) nesta classe.
//    c) Implemente um construtor que receba uma frase como parâmetro, e inicialize o atributo criado com esta frase.
//    d) Implemente um método (não static desta vez) 'contarPalavras' que retorna a quantidade de palavras da frase indicada no atributo da classe.
//            e) Crie um método main em outra classe para testar a implementação.
//            Dicas:
//
//    Usar método split() da String ou classe StringTokenizer.

    private String frase;

    public Contador2(String frase) {
        this.frase = frase;
    }

    public int contarPalavras() {
        if (this.frase == null)
            return 0;
//        String[] palavras = this.frase.split(" "); //corta os espaços " "
//        return palavras.length;

        StringTokenizer tokenizer = new StringTokenizer(this.frase, " ");
        return tokenizer.countTokens();


    }
}
