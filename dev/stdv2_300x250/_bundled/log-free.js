(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

legal();

var tl = new TimelineMax();

var width = document.getElementById('phone-mask').offsetWidth;

TweenLite.defaultEase = Sine.easeOut;

var dom = {
	phone: document.getElementById('phone'),
	phoneMain: document.getElementById('phoneMain'),
	screen: document.getElementById('screen')
};

function start() {
	tl.set('.frame1', { opacity: 1 });

	tl.add('f1');
	tl.from(dom.phoneMain, .5, { y: 190 }, 'f1');
	tl.from("#t1", .5, { opacity: 0, y: '+=130' }, 'f1');

	tl.add('f2', '+=.6');
	tl.from("#t1", .5, { x: 125 }, 'f2');
	tl.from("#t1 span", .5, { clip: 'rect(0px,0px,51px,0px)' }, 'f2');
	tl.add(rotate(0, 9), 'f2');
	tl.to(dom.screen, .9, { opacity: 1 });
	// tl.to(dom.phoneMain, .3, {y:31}, 'f2')

	tl.add('f3', '+=1');
	tl.to('#t1', .3, { opacity: 0 }, 'f3');
	tl.from('#t2', .3, { opacity: 0, y: '+=35' }, 'f3+=.3');

	// tl.add(rotate(5, 9), 'f3+=.3')
	tl.from('#t3', .3, { opacity: 0 }, '+=1');
	tl.to('#t3', .3, { opacity: 0 }, '+=1');
	tl.from('#t4', .3, { opacity: 0 });

	tl.add('end', '+=1');
	tl.to(['#t2', '#t4'], .3, { opacity: 0, y: '-=40' }, 'end');
	tl.to(dom.phoneMain, .4, { y: -46 }, 'end');

	tl.from('#screen p', .3, { opacity: 0 }, '+=.6');

	tl.from(['.end'], .3, { opacity: 0 }, '+=.3');
}

function rotate(from, to) {
	var tlRotate = new TimelineMax();

	for (var i = from; i <= to; i++) {
		var x = -i * width;
		void 0;
		tlRotate.set(dom.phone, { x: x }, '+=.07');
	}

	return tlRotate;
}

start();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
