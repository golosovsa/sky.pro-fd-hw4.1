document.addEventListener("DOMContentLoaded", () => {
    document.app = {
        settings: {
            difficulty: localStorage.getItem("difficulty") || "2",
        },
        blocks: {
            dialogDifficulty: new DialogDifficulty(),
        },
    };

    document.app.blocks.dialogDifficulty.show(document.app.settings.difficulty).then(userAnswer => {
        console.log(userAnswer);
        if (userAnswer) {
            document.app.settings.difficulty = userAnswer.difficulty;
            localStorage.setItem("difficulty", userAnswer.difficulty);
        }
    });
});