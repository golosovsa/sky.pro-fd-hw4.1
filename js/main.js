// import { DialogDifficulty } from "./widgets/dialog-difficulty";
// import { Card } from "./widgets/card";
// import { PageDifficulty } from "./pages/page-difficulty";
// import { timeout } from "./common/timeout";

document.addEventListener("DOMContentLoaded", () => {
    document.app = {
        settings: {
            difficulty: localStorage.getItem("difficulty") || "2",
            timeSpentPlaying: Number(
                localStorage.getItem("timeSpentPlaying") || "0"
            ),
            currentGameStartTime: new Date().getTime(),
            currentPage: undefined,
        },
        blocks: {
            pageContainer: document.querySelector(".page"),
            dialogDifficulty: new DialogDifficulty(),
            cardTable: new CardTable(),
            timer: new Timer(),
        },
    };

    document.app.pages = {
        pageSelectDifficulty: new PageDifficulty(
            document.app.blocks.pageContainer,
            document.app.blocks.dialogDifficulty
        ),
        pageGame: new PageGame(
            document.app.blocks.pageContainer,
            document.app.blocks.cardTable,
            document.app.blocks.timer
        ),
    };

    document.app.settings.currentPage = document.app.pages.pageSelectDifficulty;

    document.app.run = async function () {
        const pages = Object.values(document.app.pages);
        const _nextPage = () => {
            const pageIndex =
                (pages.indexOf(document.app.settings.currentPage) + 1) %
                pages.length;
            return pages[pageIndex];
        };

        // eslint-disable-next-line no-constant-condition
        while (true) {
            const action = await document.app.settings.currentPage.run(
                document.app.settings
            );
            if (action === "next") {
                document.app.settings.currentPage = _nextPage();
            }
            await timeout(300);
        }
    };

    document.app.run();
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("difficulty", document.app.settings.difficulty);
    const totalTime =
        document.app.settings.timeSpentPlaying +
        (new Date().getTime() - document.app.settings.currentGameStartTime) /
            1000;
    localStorage.setItem("timeSpentPlaying", totalTime);
});
