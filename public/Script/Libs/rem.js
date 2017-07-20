/**
 * Created by pxq on 17-7-11.
 */

;
(function(doc, win, undefined) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (clientWidth === undefined) return;
			//docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; //640是设计稿px大小，100是px大小的小数点向前移动2位
		};
	if (doc.addEventListener === undefined) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);