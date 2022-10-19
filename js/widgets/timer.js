/**
 * class timer
 */

import { templateEngine } from "../common/template-engine";
import { timerTemplate } from "../templates/timer";

export class Timer {
    constructor(container = undefined) {
        this.container = undefined;
        this.element = templateEngine(timerTemplate);
        this.startTime = undefined;
        this.timerID = undefined;
        this.lastResult = "00:00";

        this.timeElement = this.element.querySelector(".timer__time");

        this._updateTime = this._updateTime.bind(this);

        if (container) {
            this.setContainer(container);
        }

        this.started = false;
    }

    setContainer(container) {
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

    _updateTime() {
        const timeNow = new Date().getTime();
        const elapsedSeconds = (timeNow - this.startTime) / 1000;
        let minutes = Math.floor(elapsedSeconds / 60);
        let seconds = Math.floor((elapsedSeconds - 60 * minutes) * 10) / 10;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes > 99) {
            minutes = 99;
            seconds = 59;
        }

        const result = `${minutes}:${seconds}`;
        this.timeElement.textContent = result;
        return result;
    }
}
