declare module 'expect' {
    interface Matchers<R> {
        toBeATTemplateNodeRecursive(): R;
    }
}

export function toBeATTemplateNodeRecursive(template: TTemplateNode) {
    let pass = false;
    let message = ""
    try {
        pass = checkNodeTypeRecursive(template);
    } catch (error) {
        message = (error as Error).message;
    }

    if (pass) {
        return {
            message: () => "Ok",
            pass: true,
        };
    }

    return {
        message: () => message,
        pass: false,
    };
}

function checkNodeTypeRecursive(node: any): node is TTemplateNode {

    checkNodeType(node);
    
    const content = (node as TTemplateNode).content;

    if (!content) {
        return true;
    }

    if (Array.isArray(content)) {
        for (const itemContent of content) {
            checkNodeTypeRecursive(itemContent);
        }
        return true;
    }

    if (typeof content === "object") {
        checkNodeTypeRecursive(content);
        return true;
    }

    return true;
}

function checkNodeType(node: any): node is TTemplateNode {
    try {
        const tag = (node as TTemplateNode).tag;
        const isTag = Boolean(tag) && typeof tag === "string";
        if (!isTag) {
            throw new Error("Missing field 'tag' or type of 'tag' is not a string");
        }

        const attrs = (node as TTemplateNode).attrs;
        if (attrs) {
            checkAttrsType(attrs);
        }

        const cls = (node as TTemplateNode).cls;
        if (cls) {
            checkClsType(cls);
        }

        const content = (node as TTemplateNode).content;
        if (content) {
            checkContentType(content);
        }

    } catch (error) {
        throw new Error(`An error has occurred:\n${node}\n${error}`);
    }

    return true;
}

function checkAttrsType(attrs: any) {

    try {
        if (typeof attrs !== "object") {
            throw new Error("must be an object type or undefined");
        }
    
        for (const [key, value] of Object.entries(attrs)) {
            if (typeof key !== "string" || key === "") {
                throw new Error(`and its key = ${key} mustn't be an empty string`);
            }
            if (typeof value !== "string" || value === "") {
                throw new Error(`and its value = ${value} mustn't be an empty string`);
            }
        }        

    } catch (error) {
        throw new Error(`The field attrs = ${attrs} -> ${error}`);
    }

}

function checkClsType(cls: any) {
    try {
        if (typeof cls === "string" && cls === "") {
            throw new Error("mustn't be an empty string when it have type string");
        }
        if (Array.isArray(cls)) {
            if (cls.length === 0) {
                throw new Error("mustn't be an empty array when it have type Array");
            }
            for (const itemCls of cls) {
                if (typeof itemCls !== "string") {
                    throw new Error(`and its item = ${itemCls} must be a string type`);
                }
            }
        }
    } catch (error) {
        throw new Error(`The field cls = ${cls} -> ${error}`);
    }
}

function checkContentType(content: any) {
    try {
        const contentType = typeof content;
        if (contentType === "string" || contentType === "number" || contentType === "boolean" || contentType === "object") {
            return;
        }
        if (!Array.isArray(content)) {
            throw new Error("must be a string, number, boolean, object or Array");
        }

        for (const itemContent of content) {
            const itemContentType = typeof itemContent;
            if (itemContentType === "string" || itemContentType === "number" || itemContentType === "boolean" || itemContentType === "object") {
                continue;
            }
            throw new Error(`and its item = ${itemContent} must be a string, number, boolean or object`);
        }

    } catch (error) {
        throw new Error(`The field content = ${content} -> ${error}`);
    }
}
