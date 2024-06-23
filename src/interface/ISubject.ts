import Observer from '../interface/IObserver';
import Avaliacao from '../model/Avaliacao';

export default interface Subject {
    registerObserver(observer: Observer): void;
    notifyObservers(avaliacao: Avaliacao): void;
}