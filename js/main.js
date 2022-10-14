document.addEventListener("DOMContentLoaded", () => {
    document.app = {
        blocks: {
            dialogDifficulty: new DialogDifficulty(),
        },
    };

    document.app.blocks.dialogDifficulty.show().then(userAnswer => {
        console.log(userAnswer);
    });
});