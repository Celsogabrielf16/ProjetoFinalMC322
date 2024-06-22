import Observer from './Observer';
import Avaliacao from './Avaliacao';

interface Subject {
    registerObserver(observer: Observer): void;
    notifyObservers(avaliacao: Avaliacao): void;
}