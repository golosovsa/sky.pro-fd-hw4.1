import { baseDialogTemplate } from "./base-dialog";

export const dialogResultsTemplate: TTemplateNode = {
    tag: "dialog",
    cls: "dialog",
    content: {
        tag: "form",
        attrs: {
            method: "dialog",
        },
        cls: "dialog__form",
        content: [
            {
                tag: "div",
                cls: "dialog-results",
                content: [
                    {
                        tag: "header",
                        cls: "dialog-results__header",
                        content: [
                            {
                                tag: "div",
                                cls: "dialog-results__image",
                            },
                            {
                                tag: "h2",
                                cls: "dialog-results__title",
                            }
                        ],
                    },
                    {
                        tag: "main",
                        cls: "dialog-results__main",
                        content: [
                            {
                                tag: "h3",
                                cls: "dialog-results__subtitle",
                                content: "Затраченное время:"
                            },
                            {
                                tag: "p",
                                cls: "dialog-results__time",
                            },
                        ],
                    },
                    {
                        tag: "footer",
                        cls: "dialog-results__footer",
                        content: {
                            tag: "button",
                            attrs: {
                                type: "submit",
                            },
                            cls: "dialog-results__button",
                            content: "Играть снова",
                        },
                    },
                ],
            },
        ],
    },
};
