export const dialogDifficultyTemplate: TTemplateNode = {
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
                tag: "fieldset",
                cls: "dialog-difficulty__fieldset",
                content: [
                    {
                        tag: "p",
                        cls: "dialog-difficulty__legend",
                        content: "Выбери сложность",
                    },
                    {
                        tag: "p",
                        cls: "dialog-difficulty__radio-container",
                        content: [
                            {
                                tag: "label",
                                cls: "dialog-difficulty__radio-label",
                                content: [
                                    {
                                        tag: "input",
                                        attrs: {
                                            type: "radio",
                                            name: "difficulty",
                                            value: "1",
                                        },
                                        cls: "dialog-difficulty__radio",
                                    },
                                    {
                                        tag: "span",
                                        content: "1",
                                    },
                                ],
                            },
                            {
                                tag: "label",
                                cls: "dialog-difficulty__radio-label",
                                content: [
                                    {
                                        tag: "input",
                                        attrs: {
                                            type: "radio",
                                            name: "difficulty",
                                            value: "2",
                                        },
                                        cls: "dialog-difficulty__radio",
                                    },
                                    {
                                        tag: "span",
                                        content: "2",
                                    },
                                ],
                            },
                            {
                                tag: "label",
                                cls: "dialog-difficulty__radio-label",
                                content: [
                                    {
                                        tag: "input",
                                        attrs: {
                                            type: "radio",
                                            name: "difficulty",
                                            value: "3",
                                        },
                                        cls: "dialog-difficulty__radio",
                                    },
                                    {
                                        tag: "span",
                                        content: "3",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                tag: "button",
                attrs: {
                    type: "submit",
                },
                cls: "dialog-difficulty__button",
                content: "Старт",
            },
        ],
    },
};
