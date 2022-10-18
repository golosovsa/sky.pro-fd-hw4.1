const pageGameTemplate = {
    tag: "section",
    cls: "game",
    content: [
        {
            tag: "header",
            cls: "game__header",
            content: [
                {
                    tag: "div",
                    cls: "game__timer",
                },
                {
                    tag: "div",
                    cls: ["game__button", "game__button_start"],
                    content: "Начать заново",
                },
            ],
        },
        {
            tag: "main",
            cls: "game__main",
        },
    ],
};
