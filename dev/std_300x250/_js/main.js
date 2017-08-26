
function legal() {

	const legalButton = document.getElementById('legal-button');
	const legalCopy = document.getElementById('legal-copy');

	legalButton.addEventListener('mouseover', ()=>{
	    TweenLite.to(legalCopy, .2, {opacity:1})
	})

	legalButton.addEventListener('mouseout', ()=>{
	    TweenLite.to(legalCopy, .2, {opacity:0})
	})

}

legal()

const tl = new TimelineMax()

const width = document.getElementById('phone-mask').offsetWidth

TweenLite.defaultEase = Sine.easeOut

const dom = {
	phone: document.getElementById('phone'),
	phoneMain: document.getElementById('phoneMain'),
	screen: document.getElementById('screen'),
}

function start(){
	tl.set('.frame1', {opacity: 1})

	tl.add('f1')
	tl.from(dom.phoneMain, .5, {y:190}, 'f1')
	tl.from("#t1", .5, {opacity: 0, y:'+=80'}, 'f1')
	
	tl.add('f2', '+=.3')
	tl.from("#t1", .5, {x: 125}, 'f2')
	tl.from("#t1 span", .5, {clip:`rect(0px,0px,51px,0px)`}, 'f2')
	tl.add(rotate(0, 3), 'f2')
	// tl.to(dom.phoneMain, .3, {y:31}, 'f2')

	tl.add('f3', '+=1')
	tl.to('#t1', .3, {opacity:0}, 'f3')
	tl.from('#t2', .3, {opacity:0}, 'f3+=.3')

	tl.add(rotate(3, 7), 'f3+=.3')
	tl.from('#t3', .3, {opacity:0}, '+=1')
	tl.to('#t3', .3, {opacity:0}, '+=1')
	tl.from('#t4', .3, {opacity:0})

	tl.add('end', '+=1')
	tl.to(['#t2', '#t4'], .3, {opacity:0, y:'-=40'}, 'end')
	tl.to(dom.phoneMain, .4, {y:-46}, 'end')
	tl.to(dom.screen, .6, {opacity:1})
	tl.from('#screen p', .3, {opacity:0}, '+=.6')

	tl.from(['.end'], .3, {opacity: 0}, '+=.3')


}

function rotate(from, to){
	const tlRotate = new TimelineMax()

	for(let i=from;i<=to;i++){
		const x = -i*width
		console.log(i)
		tlRotate.set(dom.phone, {x:x}, '+=.09')
	}

	return tlRotate

}

start()

