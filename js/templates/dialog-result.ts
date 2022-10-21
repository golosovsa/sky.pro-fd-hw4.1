import { baseDialogTemplate } from "./base-dialog";
import { timerTemplate } from "./timer";

export const dialogResultsTemplate: TTemplateNode = {
    ...baseDialogTemplate,
};

((dialogResultsTemplate.content as TTemplateNode).content as Array<TTemplateNode>) = [

];
