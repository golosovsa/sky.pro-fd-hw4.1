const APP_PAGES = [
    "select-difficulty",
];

document.addEventListener("DOMContentLoaded", () => {
    document.app = {
        settings: {
            difficulty: localStorage.getItem("difficulty") || "2",
            timeSpentPlaying: Number(localStorage.getItem("timeSpentPlaying") || "0"),
            currentGameStartTime: new Date().getTime(),
            currentPage: undefined,
        },
        blocks: {
            pageContainer: document.querySelector(".page"),
            dialogDifficulty: new DialogDifficulty(),
        },
    };

    document.app.pages = {
        pageSelectDifficulty: new PageDifficulty(
            document.app.blocks.pageContainer,
            document.app.blocks.dialogDifficulty,
        ),
    }

    document.app.settings.currentPage = document.app.pages.pageSelectDifficulty;

    document.app.run = async function() {
        
        const pages = Object.values(document.app.pages);

        const _nextPage = () => {
            const pageIndex = (pages.indexOf(document.app.settings.currentPage) + 1) % pages.length;
            return pages[pageIndex];
        }
        
        while (true) {
            const action = await document.app.settings.currentPage.run(document.app.settings);
            
            if (action === "next") {
                document.app.settings.currentPage = _nextPage();
            }

            await timeout(300);
        }
    }

    document.app.run();

});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("difficulty", document.app.settings.difficulty);
    const total_time = document.app.settings.timeSpentPlaying + (new Date().getTime() - document.app.settings.currentGameStartTime) / 1000;
    localStorage.setItem("timeSpentPlaying", total_time);
});
