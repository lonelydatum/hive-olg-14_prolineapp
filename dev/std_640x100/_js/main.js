

import {dom, rotate} from '../../_common/js/PROLINE.js'
import {tl, start, end} from '../../_common/js/Animation.js'



function bump() {
	tl.add('bump', '+=.2')
	tl.to(dom.phoneMain, .4, {x:333}, 'bump')
	tl.from(["#t5", '#logo-app'], .4, {opacity:0, ease:Power1.easeInOut}, 'bump+=.2')
}

start()
bump()
end()

