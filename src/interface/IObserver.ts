import Avaliacao from './Avaliacao'

export default interface Observer {
    update(avaliacao: Avaliacao): void;
}