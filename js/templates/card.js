const cardTemplate = {
    tag: "div",
    cls: "card",
    content: {
        tag: "div",
        cls: "card__container",
        content: [
            {
                tag: "div",
                cls: "card__face",
                content: {
                    tag: "div",
                    cls: "card__face-container",
                    content: [
                        {
                            tag: "div",
                            cls: ["card__letter", "card__letter_left-top"],
                        },
                        {
                            tag: "div",
                            cls: ["card__suit", "card__suit_left-top"],
                        },
                        {
                            tag: "div",
                            cls: ["card__suit", "card__suit_center"],
                        },
                        {
                            tag: "div",
                            cls: ["card__suit", "card__suit_right-bottom"],
                        },
                        {
                            tag: "div",
                            cls: ["card__letter", "card__letter_right-bottom"],
                        },
                    ],
                },
            },
            {
                tag: "div",
                cls: "card__shirt",
            },
        ],
    },
};
