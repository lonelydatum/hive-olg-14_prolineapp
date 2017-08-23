import {copy, cans} from '../../_common/js/NFL.js'

const dom = {
	banner: document.getElementById('banner'),
	title: document.getElementById('title'),
	sprite: document.getElementById('sprite'),
}

const canWidth = dom.sprite.offsetWidth / 15
const tl = new TimelineMax()

const canFirst = cans[0]
cans.shift()



for(let key in copy){
	const id = key
	const text = copy[id]
	const dom = document.getElementById(id)
	dom.innerHTML = text
}

function first(frameName, delay) {
	// const tlFirst = new TimelineMax()
	tl.add(frameName, delay)
	tl.set(dom.banner, {backgroundColor:`#${canFirst.bg}`}, frameName)
	tl.set(dom.title, {color:`#${canFirst.color}`}, frameName)
	tl.set(dom.sprite, {x:0}, frameName)

	
}

function loop() {
	first('starter', 0)
	const delaySpeed = .4
	cans.forEach((item, index)=>{
		const frameName = `frame-${index}`		
		const delay = index===0 ? `+=${1}` : `+=${delaySpeed}`
		tl.add(frameName, delay)
		tl.set(dom.banner, {backgroundColor:`#${item.bg}`}, frameName)
		tl.set(dom.title, {color:`#${item.color}`}, frameName)
		tl.set(dom.sprite, {x:-(index+1)*canWidth}, frameName)		
	})


	first('ender', `+=${delaySpeed*1.5}`)

	tl.from('#legal', .1, {opacity:0}, '-=.1')


}

loop()




