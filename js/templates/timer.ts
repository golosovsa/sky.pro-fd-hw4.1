export const timerTemplate: TTemplateNode = {
    tag: "div",
    cls: "timer",
    content: [
        {
            tag: "p",
            cls: "timer__time",
            content: "00:00",
        },
        {
            tag: "p",
            cls: ["timer__title", "timer__title_minutes"],
            content: "min",
        },
        {
            tag: "p",
            cls: ["timer__title", "timer__title_seconds"],
            content: "sec",
        },
    ],
};
