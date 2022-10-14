/**
 * template engine
 */

function _templateAddClasses(element, classes) {
    if (!Array.isArray(classes)) {
        element.classList.add(String(classes));
        return;
    } 

    classes.map(cls => {
        element.classList.add(String(cls));
    })
}

function _templateAddAttrs(element, attrs) {
    if (Array.isArray(attrs) || typeof(attrs) !== 'object') {
        throw "The 'attrs' variable must be an 'object' type.";
    } 

    for (const [name, value] of Object.entries(attrs)) {
        element.setAttribute(String(name), String(value));
    }
}


function _templateEngineArray(templateArray) {
    fragment = document.createDocumentFragment();
    templateArray.forEach(element => {
        fragment.appendChild(templateEngine(element));
    });
    return fragment;
}

function _templateEngineObject(templateObject) {
    if (!"tag" in templateObject) {
        console.dir(templateObject);
        throw "The 'templateObject' variable has no 'tag' attribute";
    }

    element = document.createElement(templateObject.tag);
    console.log("tag =", templateObject.tag);

    if ("cls" in templateObject) {
        _templateAddClasses(element, templateObject.cls);
    }


    if ("attrs" in templateObject) {
        _templateAddAttrs(element, templateObject.attrs);
    }


    if ("content" in templateObject) {
        content = templateEngine(templateObject.content);
        element.appendChild(content);    
    }


    return element;
}

function templateEngine(template) {

    if (Array.isArray(template)) {
        return _templateEngineArray(template);
    }

    if (typeof(template) === 'object') {
        return _templateEngineObject(template);
    }

    return document.createTextNode(String(template));

}