const dialogDifficulty = {
    ...baseDialog,
    content: {
        ...baseDialog.content,
        content: [
            {
                tag: "fieldset",
                cls: "dialog-difficulty__fieldset",
                content: [
                    {
                        tag: "legend",
                        cls: "dialog-difficulty__legend",
                        content: "Выбери сложность",
                    },
                    {
                        tag: "p",
                        cls: "dialog-difficulty__radio-container",
                        content: [
                            {
                                tag: "input",
                                attrs: {
                                    type: "radio",
                                    name: "difficulty",
                                    value: "1",
                                },
                                cls: "dialog-difficulty__radio",
                                content: "1",
                            },
                            {
                                tag: "input",
                                attrs: {
                                    type: "radio",
                                    name: "difficulty",
                                    value: "2",
                                },
                                cls: "dialog-difficulty__radio",
                                content: "2",
                            },
                            {
                                tag: "input",
                                attrs: {
                                    type: "radio",
                                    name: "difficulty",
                                    value: "3",
                                },
                                cls: "dialog-difficulty__radio",
                                content: "3",
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