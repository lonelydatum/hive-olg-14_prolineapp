(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var copy = {
	title: 'WHO YOU GOT?',
	sub: 'NEW NFL TEAM CANS.',
	legal: 'OFFICIAL NFL SPONSOR. ENJOY RESPONSIBLY. Must be legal drinking age. ®/MD Anheuser-Busch, LLC.'
};

var cans = [{ id: 0, bg: '0042b0', color: '149be4' }, { id: 1, bg: 'd32f1e', color: '001532', label: 'DENVER BRONCOS' }, { id: 2, bg: '0076b6', color: 'b0b7bc', label: 'DETROIT LIONS' }, { id: 3, bg: 'af925d', color: 'aa0000', label: 'San Francisco 49ers' }, { id: 4, bg: '012352', color: 'a30d2d', label: 'NY GIANTS' }, { id: 5, bg: '00274d', color: 'd50a0a', label: 'Buffalo Bills' }, { id: 6, bg: '1c2d25', color: 'FFFFFF', label: 'New York Jets' }, { id: 7, bg: '001532', color: 'd50a0a', label: 'NEW ENGLAND PATRIOTS' }, { id: 8, bg: '000000', color: 'a6aeb0', label: 'OAKLAND RAIDERS' }, { id: 9, bg: '000000', color: 'd3bc8d', label: 'New Orleans Saints' }, { id: 10, bg: 'd32f1e', color: 'FFFFFF', label: 'Cincinatti  Bengal' }, { id: 11, bg: '001532', color: '69be28', label: 'SEATTLE SEAHAWKS' }, { id: 12, bg: 'a6aeb0', color: '000000', label: 'Atlanta Falcons' }, { id: 13, bg: '0085ca', color: '000000', label: 'Caroliner Panthers' }, { id: 14, bg: '013369', color: '9ba1a2', label: 'Indianapolis Colts' }];

exports.copy = copy;
exports.cans = cans;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsNFLJs = require('../../_common/js/NFL.js');

var dom = {
	banner: document.getElementById('banner'),
	title: document.getElementById('title'),
	sprite: document.getElementById('sprite')
};

var canWidth = dom.sprite.offsetWidth / 15;
var tl = new TimelineMax();

var canFirst = _commonJsNFLJs.cans[0];
_commonJsNFLJs.cans.shift();

for (var key in _commonJsNFLJs.copy) {
	var id = key;
	var text = _commonJsNFLJs.copy[id];
	var _dom = document.getElementById(id);
	_dom.innerHTML = text;
}

function first(frameName, delay) {
	// const tlFirst = new TimelineMax()
	tl.add(frameName, delay);
	tl.set(dom.banner, { backgroundColor: '#' + canFirst.bg }, frameName);
	tl.set(dom.title, { color: '#' + canFirst.color }, frameName);
	tl.set(dom.sprite, { x: 0 }, frameName);
}

function loop() {
	first('starter', 0);
	var delaySpeed = .4;
	_commonJsNFLJs.cans.forEach(function (item, index) {
		var frameName = 'frame-' + index;
		var delay = index === 0 ? '+=' + 1 : '+=' + delaySpeed;
		tl.add(frameName, delay);
		tl.set(dom.banner, { backgroundColor: '#' + item.bg }, frameName);
		tl.set(dom.title, { color: '#' + item.color }, frameName);
		tl.set(dom.sprite, { x: -(index + 1) * canWidth }, frameName);
	});

	first('ender', '+=' + delaySpeed * 1.5);

	tl.from('#legal', .1, { opacity: 0 }, '-=.1');
}

loop();

},{"../../_common/js/NFL.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
