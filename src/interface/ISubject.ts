import Observer from './Observer';
import Avaliacao from './Avaliacao';

export default interface Subject {
    registerObserver(observer: Observer): void;
    notifyObservers(avaliacao: Avaliacao): void;
}