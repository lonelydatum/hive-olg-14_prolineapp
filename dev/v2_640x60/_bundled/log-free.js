(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _PROLINEJs = require('./PROLINE.js');

var tl = new TimelineMax();

function start() {
	tl.set('.frame1', { opacity: 1 });

	tl.add('f1');
	tl.add((0, _PROLINEJs.rotate)(0, 12), 'f1');
	tl.from("#t1", .3, { opacity: 0, y: '+=20' }, 'f1');
	tl.from(_PROLINEJs.dom.phoneMain, .4, { y: 60 }, 'f1');
	tl.from("#t1 span", .5, { clip: 'rect(0px,0px,51px,0px)' }, 'f1+=.2');
	tl.to(_PROLINEJs.dom.screen, .2, { opacity: 1 });

	tl.add('f3', '+=1');
	tl.to('#t1', .1, { opacity: 0 }, 'f3');
	tl.from('#t2', .3, { opacity: 0 }, 'f3+=.3');

	tl.from('#t3', .3, { opacity: 0 }, '+=.1');
	tl.to('#t3', .1, { opacity: 0 }, '+=1');
	tl.from('#t4', .3, { opacity: 0 });

	tl.add('end', '+=1');
	tl.to(['#t2', '#t4'], .1, { opacity: 0 }, 'end');
}

function end() {
	tl.from(".logos", .4, { opacity: 0 });
	tl.from(['.end'], .3, { opacity: 0 }, '+=.3');
}

exports.tl = tl;
exports.start = start;
exports.end = end;

},{"./PROLINE.js":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsPROLINEJs = require('../../_common/js/PROLINE.js');

var _commonJsAnimationJs = require('../../_common/js/Animation.js');

function bump() {
	_commonJsAnimationJs.tl.add('bump', '+=.2');
	// tl.to(dom.phoneMain, .4, {x:333}, 'bump')
	_commonJsAnimationJs.tl.from(["#t5", '#logo-app'], .4, { opacity: 0, ease: Power1.easeInOut }, 'bump+=.2');
}

(0, _commonJsAnimationJs.start)();
bump();
(0, _commonJsAnimationJs.end)();

},{"../../_common/js/Animation.js":1,"../../_common/js/PROLINE.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
