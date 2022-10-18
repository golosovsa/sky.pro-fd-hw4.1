const timerTemplate = {
    tag: "div",
    cls: "timer",
    content: [
        {
            tag: "p",
            class: "timer__time",
            content: "00:00",
        },
        {
            tag: "p",
            cls: ["timer__title", "timer__title_minutes"],
            content: "min",
        },
        {
            tag: "p",
            cls: ["timer__title", "timer__title_minutes"],
            content: "sec",
        },
    ],
};
