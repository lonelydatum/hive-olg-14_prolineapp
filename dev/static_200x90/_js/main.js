



import {dom, rotate} from '../../_common/js/PROLINE.js'
import {tl, start, end} from '../../_common/js/Animation.js'



function bump() {
	tl.add('bump', '+=.2')
	tl.from("#t5", .4, {opacity:0, ease:Power1.easeInOut}, 'bump')
}

// start()
// bump()
// end()


