import Subject from '../interface/ISubject.js';
import Observer from '../interface/IObserver.js';
import Avaliacao from './Avaliacao.js';

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
