// Набор функций
var base = {
  // Поиск элементов по классу
  findClass: function(str, node) {
     if(document.getElementsByClassName) return (node || document).getElementsByClassName(str);
     else {
        var node = node || document, list = node.getElementsByTagName('*'), length = list.length, Class = str.split(/\s+/), classes = Class.length, array = [], i, j, key;
        for(i = 0; i < length; i++) {
          key = true;
          for(j = 0; j < classes; j++) if(list[i].className.search('\\b' + Class[j] + '\\b') == -1) key = false;
          if(key) array.push(list[i]);
        }
        return array;
     }
  },
  // Добавление обработчиков событий
  bind: function(node, type, listener) {
    if(node.addEventListener) node.addEventListener(type, listener, false);
    //@cc_on node.attachEvent('on' + type, function() { listener.call(node); });
  },
  // Реализация DOMContentLoaded
  init: [],
  ready: function() {
    if(!arguments.callee.done) {
      arguments.callee.done = true;
      if(this.timer) clearInterval(this.timer);
      var i, length = this.init.length;
      for(i = 0; i < length; i++) this.init[i]();
      this.init = [];
    }
  },
  check: function() {
    var _this = this, listener = function() {
      _this.ready();
    };
    if(document.addEventListener) document.addEventListener('DOMContentLoaded', listener, false);
    if(/KHTML|WebKit/i.test(navigator.userAgent)) this.timer = setInterval(function() {
      if(/loaded|complete/.test(document.readyState)) base.ready();
    }, 10);
   this.bind(window, 'load', listener);
  }
};

// Функции для работы с панельками
var toggler = {
  process: function() {
    var i, list = base.findClass('toggler'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle);
    list = base.findClass('content');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  toggle: function() {
    var content = base.findClass('content', this.parentNode)[0], e = arguments[0] || window.event;
    if(content.style.display == 'block') {
      content.style.display = 'none';
      this.innerHTML = 'Открыть';
    }
    else {
      content.style.display = 'block';
      this.innerHTML = 'Закрыть';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded
base.init.push(function() {
  toggler.process();
});

// Функции для работы с панельками 1
var toggler1 = {
  process: function() {
    var i, list = base.findClass('toggler1'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggler1);
    list = base.findClass('content6');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  toggler1: function() {
    var content6 = base.findClass('content6', this.parentNode)[0], e = arguments[0] || window.event;
    if(content6.style.display == 'block') {
      content6.style.display = 'none';
      this.innerHTML = 'Signal ploter';
    }
    else {
      content6.style.display = 'block';
      this.innerHTML = 'Close';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 1
base.init.push(function() {
  toggler1.process();
});

// Функции для работы с панельками 2
var toggler2 = {
  process: function() {
    var i, list = base.findClass('toggler2'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle2);
    list = base.findClass('content2');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  toggle2: function() {
    var content2 = base.findClass('content2', this.parentNode)[0], e = arguments[0] || window.event;
    if(content2.style.display == 'block') {
      content2.style.display = 'none';
      this.innerHTML = 'Открыть';
    }
    else {
      content2.style.display = 'block';
      this.innerHTML = 'Закрыть';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 2
base.init.push(function() {
  toggler2.process();
});

// Функции для работы с панельками 3
var toggler3 = {
  process: function() {
    var i, list = base.findClass('toggler3'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle3);
    list = base.findClass('content3');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  toggle3: function() {
    var content3 = base.findClass('content3', this.parentNode)[0], e = arguments[0] || window.event;
    if(content3.style.display == 'block') {
      content3.style.display = 'none';
      this.innerHTML = 'Открыть';
    }
    else {
      content3.style.display = 'block';
      this.innerHTML = 'Закрыть';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 3
base.init.push(function() {
  toggler3.process();
});

// Функции для работы с панельками 4
var toggler4 = {
  process: function() {
    var i, list = base.findClass('toggler4'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle4);
    list = base.findClass('content4');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  toggle4: function() {
    var content4 = base.findClass('content4', this.parentNode)[0], e = arguments[0] || window.event;
    if(content4.style.display == 'block') {
      content4.style.display = 'none';
      this.innerHTML = 'Открыть';
    }
    else {
      content4.style.display = 'block';
      this.innerHTML = 'Закрыть';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 4
base.init.push(function() {
  toggler4.process();
});

// Функции для работы с панельками 5
var toggler5 = {
  process: function() {
    var i, list = base.findClass('toggler5'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle5);
    list = base.findClass('content5');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'block';
  },
  toggle5: function() {
    var content5 = base.findClass('content5', this.parentNode)[0], e = arguments[0] || window.event;
    if(content5.style.display == 'none') {
      content5.style.display = 'block';
      this.innerHTML = 'Свернуть майнер';
    }
    else {
      content5.style.display = 'none';
      this.innerHTML = 'Развернуть майнер';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 5
base.init.push(function() {
  toggler5.process();
});



// Функции для работы с памятью
var mem = {
  process: function() {
    var i, list = base.findClass('mem'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.mem);
    list = base.findClass('content3');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
  mem: function() {
    var content3 = base.findClass('content3', this.parentNode)[0], e = arguments[0] || window.event;
    if(content3.style.display == 'block') {
      content3.style.display = 'none';
      this.innerHTML = 'Memories';
    }
    else {
      content3.style.display = 'block';
      this.innerHTML = '&nbsp;&nbsp;&nbsp;Close &nbsp;&nbsp;';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 3
base.init.push(function() {
  mem.process();
});

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 3
base.init.push(function() {
  mem.process();
});

// Функции для работы с записью
var ploter = {
  process: function() {
    var i, list = base.findClass('ploter'), length = list.length;
    for(i = 0; i < length; i++) base.bind(list[i], 'click', this.ploter);
    list = base.findClass('content6');
    length = list.length;
    for(i = 0; i < length; i++) list[i].style.display = 'none';
  },
 ploter: function() {
    var content6 = base.findClass('content6', this.parentNode)[0], e = arguments[0] || window.event;
    if(content6.style.display == 'block') {
      content6.style.display = 'none';
      this.innerHTML = 'Ploter';
    }
    else {
      content6.style.display = 'block';
      this.innerHTML = 'Close';
    }
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded 3
base.init.push(function() {
  record.process();
});








// Запускаем проверку готовности DOM
base.check();
