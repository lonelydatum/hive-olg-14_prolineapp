



const tl = new TimelineMax()
import {dom, rotate} from '../../_common/js/PROLINE.js'






function start(){
	tl.set('.frame1', {opacity: 1})


	tl.add('f1')
	tl.from("#t1", .5, {opacity: 0, y:'+=20'}, 'f1')
	tl.from(dom.phoneMain, .5, {y:60}, 'f1+=.3')
	
	
	tl.add('f2', '+=.6')	
	
	tl.to("#t1", .7, {x:127, ease:Sine.easeOut}, 'f2')
	tl.add(rotate(0, 9), 'f2')
	tl.to(dom.phoneMain, .4, {y:-40}, 'f2')

	tl.from("#t1 span", .5, {clip:`rect(0px,0px,51px,0px)`})
	tl.to(dom.screen, .2, {opacity:1})
	

	tl.add('f3', '+=1')
	tl.to('#t1', .3, {opacity:0}, 'f3')
	tl.from('#t2', .3, {opacity:0}, 'f3+=.3')

	tl.to('#t2', .3, {y: 19}, '+=.9')
	tl.from('#t3', .3, {opacity:0}, '+=.1')
	tl.to('#t3', .3, {opacity:0}, '+=1')
	tl.from('#t4', .3, {opacity:0})

	tl.add('end', '+=1')
	tl.to(['#t2', '#t4'], .2, {opacity:0}, 'end')
	
	tl.add('bump', '+=.2')
	tl.from("#t5", .4, {opacity:0, x:'-=10', ease:Power1.easeInOut}, 'bump')
	tl.to(dom.phoneMain, .3, {x:423}, 'bump')


	tl.from(".logos", .4, {opacity:0} )
	
	// tl.from('#screen p', .3, {opacity:0}, '+=.6')

	tl.from(['.end'], .3, {opacity: 0}, '+=.3')


}


start()

