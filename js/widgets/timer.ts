/**
 * class timer
 */

import { templateEngine } from "../common/template-engine";
import { timerTemplate } from "../templates/timer";

export class Timer {
    container?: HTMLElement;
    element: HTMLElement;
    startTime?: number;
    timerID?: TInterval;
    lastResult: string;
    timeElement: HTMLElement;
    started: boolean;

    constructor(container?: HTMLElement) {
        this.container = undefined;
        this.element = templateEngine(timerTemplate) as HTMLElement;
        this.startTime = undefined;
        this.timerID = undefined;
        this.lastResult = "00:00";

        this.timeElement = this.element.querySelector(".timer__time") as HTMLElement;

        this._updateTime = this._updateTime.bind(this);

        if (container) {
            this.setContainer(container);
        }

        this.started = false;
    }

    setContainer(container: HTMLElement) {
        this.container = container;
        this.container.appendChild(this.element);
    }

    start() {
        this.startTime = new Date().getTime();
        this.timerID = setInterval(this._updateTime, 100);
        this.started = true;
    }

    stop() {
        clearInterval(this.timerID);
        this.lastResult = this._updateTime();
        this.started = false;
    }

    toggle() {
        if (!this.started) {
            this.start();
            return;
        }

        this.stop();
    }

    _updateTime(): string {
        const timeNow = new Date().getTime();
        
        if (!this.startTime) {
            return "";
        }

        const elapsedSeconds = (timeNow - this.startTime) / 1000;
        let minutes: number | string = Math.floor(elapsedSeconds / 60);
        let seconds: number | string = Math.floor((elapsedSeconds - 60 * minutes) * 10) / 10;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        } else if (minutes > 99) {
            minutes = 99;
            seconds = 59;
        }

        const result = `${minutes}:${seconds}`;
        this.timeElement.textContent = result;
        return result;
    }
}
