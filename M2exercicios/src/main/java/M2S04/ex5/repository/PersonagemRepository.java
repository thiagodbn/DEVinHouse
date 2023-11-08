package M2S04.ex5.repository;

import M2S04.ex5.model.Heroi;
import M2S04.ex5.model.Personagem;

import java.util.*;

public class PersonagemRepository {
    private List<Personagem> personagens = new ArrayList<>();

    public void inserir(Personagem personagem){
        personagens.add(personagem);
    }

    public List<Personagem> listar(){
        return personagens;
    }

}
