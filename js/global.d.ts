interface Dictionary<T> {
    [Key: string]: T;
} 

type TTemplateNode = {
    tag: string,
    cls?: Array<string> | string,
    attrs?: Dictionary<string | number | boolean>,
    content?: Array<TTemplateNode> | TTemplateNode | string | number | boolean,
}

type TAsyncRun = (settings: TSettings) => Promise<string>;
type TAsyncVoidRun = () => Promise<void>;

type TSettings = {
    difficulty: string,
    timeSpentPlaying: number,
    currentGameStartTime: number,
    currentPage?: unknown,
    lastGameStatus?: string,
    lastGameTime?: string,
}

type TCard = {
    suit: string,
    letter: string,
}

type TInterval = ReturnType<typeof setInterval>; 

type TApp = {
    settings: TSettings,
    container: HTMLElement,
    blocks: Dictionary<any>,
    pages: Dictionary<any>,
    run: TAsyncVoidRun,
}
