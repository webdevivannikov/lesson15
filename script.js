

const DomElement = function (selector) {
    this.selector = selector;
    this.crElement = function (text, height, width, bg, fontSize) {
        const newEl = document.createElement('div');
        switch (selector[0]) {
            case '.': 
                newEl.classList = selector.slice(1);
                break;
            case '#':
                newEl.setAttribute('id', selector.slice(1));
                break;
        }
        newEl.textContent = text;
        newEl.style.cssText = 'height: ' + height + 'px;' +
        'width: ' + width + 'px;' +
        'background-color: ' + bg + ';' +
        'font-size: ' + fontSize + 'pt;';
        document.body.append(newEl);
         
    }; 

};

const div = new DomElement('#class');
div.crElement('Новый элемент', 100, 100, 'red', 17);
