/**
 * Created by Chif on 28.03.2017.
 */
'use strict';

boxes();
filters();

function boxes() {
    var maxHeight = 0;
    var boxes = document.getElementsByClassName('boxes__article');
    for (var i = boxes.length - 1; i >= 0; i--) {
        if (boxes[i].offsetHeight > maxHeight) {
            maxHeight = boxes[i].offsetHeight;
        }
    }
    for (i = boxes.length - 1; i >= 0; i--) {
        boxes[i].style.height = (maxHeight + 'px');
        boxes[i].classList.add('boxes__article-alignment')
    }
}

function filters() {
    var buttons = document.querySelectorAll('.filters__buttons > li');
    var elem = document.querySelectorAll('.filters__pictures > li');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', function () {
            for (var x = 0; x < buttons.length; x++) {
                buttons[x].classList.remove('active');
            }

            this.classList.add('active');

            for (var y = 0; y < elem.length; y++) {
                elem[y].classList.add('del');
                for (var z = 0; z < elem[y].classList.length; z++) {
                    if (this.classList[0] == elem[y].classList[z]) {
                        elem[y].classList.remove('del');
                    }
                }
            }
        })
    }
}
