/**
 * template engine
 */

function _templateEngineAddClasses(element: HTMLElement, classes: Array<string> | string) {
    if (!Array.isArray(classes)) {
        element.classList.add(classes);
        return;
    }

    element.classList.add(...classes);
}

function _templateEngineAddAttrs(element: HTMLElement, attrs: Dictionary<string | number | boolean>) {
    if (Array.isArray(attrs) || typeof attrs !== "object") {
        throw "The 'attrs' variable must be an 'object' type.";
    }

    for (const [name, value] of Object.entries(attrs)) {
        element.setAttribute(name, String(value));
    }
}

function _templateEngineArray(templateArray: Array<TTemplateNode>): DocumentFragment {
    const fragment = document.createDocumentFragment();
    templateArray.forEach((element) => {
        fragment.appendChild(templateEngine(element));
    });
    return fragment;
}

function _templateEngineObject(templateObject: TTemplateNode): HTMLElement {
    if (!templateObject.tag) {
        console.dir(templateObject);
        throw "The 'templateObject' variable has no 'tag' attribute";
    }

    let content = undefined;

    if (templateObject.content) {
        content = templateEngine(templateObject.content);
    }

    const element = document.createElement(templateObject.tag);
    if (content) {
        element.appendChild(content);
    }

    if (templateObject.cls) {
        _templateEngineAddClasses(element, templateObject.cls);
    }

    if (templateObject.attrs) {
        _templateEngineAddAttrs(element, templateObject.attrs);
    }

    return element;
}

export function templateEngine(
    template: Array<TTemplateNode> | TTemplateNode | string | number | boolean
): HTMLElement | DocumentFragment | Text {
    if (Array.isArray(template)) {
        return _templateEngineArray(template);
    }

    if (typeof template === "object") {
        return _templateEngineObject(template);
    }

    return document.createTextNode(String(template));
}
