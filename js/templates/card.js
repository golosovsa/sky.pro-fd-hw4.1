export const cardTemplate = {
    tag: "div",
    cls: "card",
    content: [
        {
            tag: "div",
            cls: "card__face",
            content: [],
        },
        {
            tag: "div",
            cls: "card__shirt",
            content: {
                tag: "img",
                cls: "card__shirt-img",
                attrs: {
                    src: "/static/img/shirt.svg",
                    alt: "card-shirt",
                },
            },
        },
    ],
};
