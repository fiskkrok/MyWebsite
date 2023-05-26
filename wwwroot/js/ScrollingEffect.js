// JsFiles/ScrollingEffect.js

window.changeBackgroundOnScroll = function() {
    var scrollPos = window.pageYOffset;
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var offsetTop = section.offsetTop;
        var offsetBottom = offsetTop + section.offsetHeight;
        if (scrollPos > offsetTop && scrollPos < offsetBottom) {
            document.body.style.background = section.dataset.bg;
        }
    }
};

window.addEventListener('scroll', changeBackgroundOnScroll);
