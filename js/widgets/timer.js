/**
 * class timer
 */

class Timer {
    constructor(container = undefined) {
        this.container = container;
        this.element = templateEngine(timerTemplate);
        this.startTime = undefined;
        this.timerID = undefined;
        this.lastResult = "00:00";

        this.timeElement = this.element.querySelector(".timer__time");

        this._updateTime = this._update_time.bind(this);
    }

    setContainer(container) {
        this.container = container;
        this.container.appendChild(this.element);
    }

    start(container) {
        this.startTime = new Date().getTime();
        this.timerID = setInterval(this._updateTime, 1000);
    }

    stop() {
        clearInterval(this.timerID);
        this.lastResult = this._updateTime();
    }

    _updateTime() {
        const timeNow = new Date().getTime();
        const elapsedSeconds = (timeNow - this.startTime) / 1000;
        let minutes = Math.floor(elapsedSeconds / 60);
        let seconds = Math.floor(elapsedSeconds - 60 * minutes);

        if (minutes > 99) {
            minutes = 99;
            seconds = 59;
        }

        const result = `${minutes}:${seconds}`;
        this.timeElement.textContent = result;
        return result;
    }
}
