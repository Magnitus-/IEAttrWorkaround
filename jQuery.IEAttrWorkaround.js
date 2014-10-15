(function() {
"use strict";
	jQuery.SetupIEAttrWorkaround = function(CustomIEDetector) {
		var IE;
		if(CustomIEDetector)
		{
			IE = CustomIEDetector();
		}
		else
		{
			IE = true;
		}
		jQuery.fn.SetAttr = function(Key, Value) {
			this.attr(Key, Value);
			if(IE)
			{
				this.addClass('IEAttrWorkAround').removeClass('IEAttrWorkAround');
			}
			return(this);
		};
	};
})();
