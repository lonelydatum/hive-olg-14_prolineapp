(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var width = document.getElementById('phone-mask').offsetWidth;

TweenLite.defaultEase = Power3.easeInOut;

var dom = {
	phone: document.getElementById('phone'),
	phoneMain: document.getElementById('phoneMain'),
	screen: document.getElementById('screen'),
	banner: document.getElementById('banner')
};

function legal() {

	var legalButton = document.getElementById('legal-button');
	var legalCopy = document.getElementById('legal-copy');

	legalButton.addEventListener('mouseover', function () {
		TweenLite.to(legalCopy, .2, { opacity: 1 });
	});

	legalButton.addEventListener('mouseout', function () {
		TweenLite.to(legalCopy, .2, { opacity: 0 });
	});
}

function rotate(from, to) {
	var tlRotate = new TimelineMax();

	for (var i = from; i <= to; i++) {
		var x = -i * width;
		void 0;
		tlRotate.set(dom.phone, { x: x }, '+=.06');
	}

	return tlRotate;
}

legal();

exports.dom = dom;
exports.rotate = rotate;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsPROLINEJs = require('../../_common/js/PROLINE.js');

_commonJsPROLINEJs.dom.phoneMain.timeUp = .8;

var tl = new TimelineMax();

function start() {
	tl.set('.frame1', { opacity: 1 });

	tl.add('f1');
	tl.from(_commonJsPROLINEJs.dom.phoneMain, .9, { y: banner.offsetHeight }, 'f1');
	tl.add((0, _commonJsPROLINEJs.rotate)(0, 9), 'f1+=.3');
	tl.from("#t1", _commonJsPROLINEJs.dom.phoneMain.timeUp || .5, { opacity: 0, y: '+=20', ease: Back.easeInOut }, 'f1+=.8');
	tl.from('#app-screen', .4, { opacity: 0 }, 'f1+=.9');

	tl.add('f2', '+=0');
	tl.from("#t1", .5, { x: 125 }, 'f2');
	tl.from("#t1 span", .5, { clip: 'rect(0px,0px,51px,0px)' }, 'f2');

	// tl.to(dom.phoneMain, .3, {y:31}, 'f2')

	tl.add('f3', '+=1.5');
	tl.to('#t1', .1, { opacity: 0 }, 'f3');
	tl.from('#t2', .3, { opacity: 0 }, 'f3+=.3');

	// tl.add(rotate(5, 9), 'f3+=.3')
	tl.from('#t3', .3, { opacity: 0 }, '+=.5');
	tl.to('#t3', .1, { opacity: 0 }, '+=1.1');
	tl.from('#t4', .3, { opacity: 0 });

	tl.add('end', '+=1.1');
	tl.to(['#t2', '#t4'], .3, { opacity: 0 }, 'end');
}

function end() {

	tl.to([".logos", '#screen p'], .4, { opacity: 1 }, 'end+=.3');

	tl.from(['.end'], .3, { opacity: 0 }, '+=.3');
}

start();
tl.to(_commonJsPROLINEJs.dom.phoneMain, .5, { y: 17, ease: Sine.easeInOut }, 'end');
tl.to('#app-screen', .2, { opacity: 0 }, 'end');
tl.to(_commonJsPROLINEJs.dom.screen, .2, { opacity: 1 });
end();

// tl.gotoAndPlay('end')

},{"../../_common/js/PROLINE.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
