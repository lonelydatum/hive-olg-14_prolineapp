
const width = document.getElementById('phone-mask').offsetWidth

const dom = {
	phone: document.getElementById('phone'),
	phoneMain: document.getElementById('phoneMain'),
	screen: document.getElementById('screen'),
	
}


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


function rotate(from, to){
	const tlRotate = new TimelineMax()

	for(let i=from;i<=to;i++){
		const x = -i*width
		console.log(i)
		tlRotate.set(dom.phone, {x:x}, '+=.07')
	}

	return tlRotate

}

legal()

export {dom, rotate}