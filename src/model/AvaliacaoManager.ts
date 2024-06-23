import Subject from '../interface/ISubject';
import Observer from '../interface/IObserver';
import Avaliacao from './Avaliacao';

export default class AvaliacaoManager implements Subject {
    private observers: Observer[] = [];

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(avaliacao: Avaliacao): void {
        for (const observer of this.observers) {
            observer.update(avaliacao);
        }
    }

    addAvaliacao(avaliacao: Avaliacao): void {
        this.notifyObservers(avaliacao);
    }
}
