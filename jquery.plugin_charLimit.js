/**
@Author: yu_Wj
@Description：限制字符个数
*/

(function($) {
	$.fn.charLimit = function(n) {
		$(this).each(function() {
			var maxwidth = n;
			charLimitMax(this,maxwidth);
		});
	};
	function charLimitMax(i,o){
		if($(i).text().length > o) {
			$(i).text($(i).text().substring(0, o));
			$(i).html($(i).html() + "...");
		};
	};
})(jQuery);