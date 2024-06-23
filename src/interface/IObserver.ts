import Avaliacao from '../model/Avaliacao'

export default interface Observer {
    update(avaliacao: Avaliacao): void;
}