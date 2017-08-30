




import {dom, rotate} from '../../_common/js/PROLINE.js'
dom.phoneMain.timeUp = .8







const tl = new TimelineMax()




function start(){
	tl.set('.frame1', {opacity: 1})


	tl.add('f1')
	tl.from(dom.phoneMain, .9, {y:banner.offsetHeight}, 'f1')
	tl.add(rotate(0, 9), 'f1+=.3')
	tl.from("#t1", dom.phoneMain.timeUp || .5, {opacity: 0, y:'+=20', ease:Back.easeInOut}, 'f1+=.8')
	tl.from('#app-screen', .4, {opacity:0}, 'f1+=.9')

	tl.add('f2', '+=0')
	tl.from("#t1", .5, {x: 125}, 'f2')
	tl.from("#t1 span", .5, {clip:`rect(0px,0px,51px,0px)`}, 'f2')
	
	
	// tl.to(dom.phoneMain, .3, {y:31}, 'f2')

	tl.add('f3', '+=1.5')
	tl.to('#t1', .1, {opacity:0}, 'f3')
	tl.from('#t2', .3, {opacity:0}, 'f3+=.3')

	// tl.add(rotate(5, 9), 'f3+=.3')
	tl.from('#t3', .3, {opacity:0}, '+=.5')
	tl.to('#t3', .1, {opacity:0}, '+=1.1')
	tl.from('#t4', .3, {opacity:0})

	tl.add('end', '+=1.1')
	tl.to(['#t2', '#t4'], .3, {opacity:0}, 'end')
	
	


}

function end() {
	
	
	tl.to([".logos", '#screen p'], .4, {opacity:1}, 'end+=.3')

	tl.from(['.end'], .3, {opacity: 0}, '+=.3')
}


start()
tl.to(dom.phoneMain, .5, {y:17, ease:Sine.easeInOut}, 'end')
tl.to('#app-screen', .2, {opacity:0}, 'end')
tl.to(dom.screen, .2, {opacity:1})
end()

// tl.gotoAndPlay('end')
