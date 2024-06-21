import Avaliacao from './Avaliacao'

interface Observer {
    update(avaliacao: Avaliacao): void;
}