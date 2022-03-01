// JavaScript Document
jQuery(document).ready(function() {
	
	

	
	jQuery(".startStop").click(function(){
		jQuery("#c1").css("display","none"); jQuery("#c2").css("display","none"); jQuery("#c3").css("display","none");
		jQuery("#pushToStart").html("INHALE");
		jQuery(this).html("STOP");
		jQuery("#pushToStart").removeClass("blinking").addClass("noBlink");
		
		setTimeout(function () { jQuery("#c1").attr("stroke-opacity", "1"); }, 500);
		setTimeout(function () { jQuery("#c2").attr("stroke-opacity", "1"); }, 1000);
		setTimeout(function () { jQuery("#c3").attr("stroke-opacity", "1"); }, 1500);
		setTimeout(function () { jQuery("#c4").attr("stroke-opacity", "1"); }, 1000);
		setTimeout(function () { jQuery("#c5").attr("stroke-opacity", "1"); }, 2000);
		setTimeout(function () { jQuery("#c6").attr("stroke-opacity", "1"); }, 3000);
		setTimeout(function () { jQuery("#c7").attr("stroke-opacity", "1"); }, 4000);
		
		setTimeout(function () { jQuery("#counterValue").html("4"); }, 1000);
		setTimeout(function () { jQuery("#counterValue").html("3"); }, 2000);
		setTimeout(function () { jQuery("#counterValue").html("2"); }, 3000);
		setTimeout(function () { jQuery("#counterValue").html("1"); }, 4000);
		setTimeout(function () { jQuery("#counterValue").html("0"); }, 4500);
		
		setTimeout(function () { jQuery("#pushToStart").html("HOLD"); }, 4500);
		
		setTimeout(function () { jQuery("#counterValue").html("4"); }, 5000);
		setTimeout(function () { jQuery("#counterValue").html("3"); }, 6000);
		setTimeout(function () { jQuery("#counterValue").html("2"); }, 7000);
		setTimeout(function () { jQuery("#counterValue").html("1"); }, 8000);
		setTimeout(function () { jQuery("#counterValue").html("0"); }, 8500);
		
		setTimeout(function () { jQuery("#pushToStart").html("EXHALE"); }, 10000);
		setTimeout(function () { jQuery("#counterValue").html("4"); }, 11000);
		setTimeout(function () { jQuery("#counterValue").html("3"); }, 12000);
		setTimeout(function () { jQuery("#counterValue").html("2"); }, 13000);
		setTimeout(function () { jQuery("#counterValue").html("1"); }, 14000);
		setTimeout(function () { jQuery("#counterValue").html("0"); }, 15000);
		
	
		setTimeout(function () { jQuery("#c1").attr("stroke-opacity", "0.3"); }, 17000);
		setTimeout(function () { jQuery("#c2").attr("stroke-opacity", "0.3"); }, 16000);
		setTimeout(function () { jQuery("#c3").attr("stroke-opacity", "0.3"); }, 15000);
		setTimeout(function () { jQuery("#c4").attr("stroke-opacity", "0.3"); }, 14000);
		setTimeout(function () { jQuery("#c5").attr("stroke-opacity", "0.3"); }, 13000);
		setTimeout(function () { jQuery("#c6").attr("stroke-opacity", "0.3"); }, 12000);
		setTimeout(function () { jQuery("#c7").attr("stroke-opacity", "0.3"); }, 11000);
		
		setTimeout(function () { $("#pushToStart").html("HOLD");},15000);
		setTimeout(function () { jQuery("#counterValue").html("4"); }, 16000);
		setTimeout(function () { jQuery("#counterValue").html("3"); }, 17000);
		setTimeout(function () { jQuery("#counterValue").html("2"); }, 18000);
		setTimeout(function () { jQuery("#counterValue").html("1"); }, 19000);
		setTimeout(function () { jQuery("#counterValue").html("0"); }, 20000);
	 //$("#pushToStart").removeClass("noBlink").addClass("blinking");}, 15000);
	});
	
	

	  


/***************************************************************************************/
 

(function(jQuery) {
    jQuery.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = jQuery(this).data();
            var tc = data.toggleclicked;
            jQuery.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));



/***************************************************************************************/


   

});





	
















