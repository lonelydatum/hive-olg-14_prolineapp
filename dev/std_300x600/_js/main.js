



const tl = new TimelineMax()
import {dom, rotate} from '../../_common/js/PROLINE.js'


// TweenLite.defaultEase = Sine.easeOut



function start(){
	tl.set('.frame1', {opacity: 1})


	tl.add('f1')
	tl.from(dom.phoneMain, .5, {y:"+=100", opacity:0}, 'f1')
	tl.from("#t1", .5, {opacity: 0, y:'+=20', ease:Back.easeInOut}, 'f1+=.2')
	
	tl.add('f2', '+=.6')
	tl.from("#t1", .5, {x: 125}, 'f2')
	tl.from("#t1 span", .5, {clip:`rect(0px,0px,51px,0px)`}, 'f2')
	tl.add(rotate(0, 9), 'f2')
	tl.to(dom.phoneMain, .3, {y:'-=15'}, 'f2')
	tl.to(dom.screen, .9, {opacity:1}, '+=.3')
	// tl.to(dom.phoneMain, .3, {y:31}, 'f2')

	tl.add('f3', '+=1')
	tl.to('#t1', .3, {opacity:0}, 'f3')
	tl.from('#t2', .3, {opacity:0, y:'+=20'}, 'f3+=.3')

	// tl.to('#t2', .3, {y:183}, '+=1')
	// tl.add(rotate(5, 9), 'f3+=.3')
	tl.from('#t3', .3, {opacity:0}, '+=1')
	tl.to('#t3', .3, {opacity:0}, '+=1')
	tl.from('#t4', .3, {opacity:0})

	tl.add('end', '+=1')
	tl.to(['#t2', '#t4'], .3, {opacity:0, y:'-=40'}, 'end')
	tl.to(dom.phoneMain, .8, {y:4}, 'end+=.1')
	tl.from([".logos", '#screen p'], .4, {opacity:0}, '+=.5')
	
	

	tl.from(['.end'], .3, {opacity: 0}, '+=.3')


}


start()

