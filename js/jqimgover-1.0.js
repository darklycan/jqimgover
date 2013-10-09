(function($) {

	$.fn.jQimgOver = function(options) {

    	// default settings
    	var settings = $.extend({
    		jfileurl	: 'http://localhost/~syedahmed/jqimgover/resource/list.json',
    		classname 	: 'minipod'
    	}, options);

    	return this.each( function() {
            // do some thing here 
            var $this = $(this);

            $.getJSON( settings.jfileurl, function(data) {
            	//console.log(data);
            })
            .done(function(data) {
            	//console.log(data.image);

            	$.each(data.image, function(i, item){
            		/// make html code
            		var finalhtml = $("<div>").attr("id", item.id);
            		finalhtml.css('background', 'url('+item.src+') '+item.bgposition );
            		finalhtml.css('width', item.width);
            		finalhtml.css('height', item.height);
            		finalhtml.css('float', item.floatstyle);
            		finalhtml.css('cursor', 'pointer');
            		finalhtml.addClass(settings.classname);
					finalhtml.appendTo($this);
            	});
            	

            	$("."+settings.classname).hover(
            		
            		function(){
            			var idsh = $(this).attr("id");
            			var cbphover = "";
            			var rposition = "";
            			$.each(data.image, function(j, items){
            				if(idsh == items.id){
            					cbphover = items.bgposition; 
            					if(cbphover == "right"){
            						rposition = "left";
            					}else{
            						rposition = "right";
            					}
            				}
            			});
            			$(this).css('background-position', rposition);
            		},

            		function(){
            			var ids = $(this).attr("id");
            			var cbp = "";
            			$.each(data.image, function(j, items){
            				if(ids == items.id){
            					cbp = items.bgposition; 
            				}
            			});
						$(this).css('background-position', cbp);
            		}

            		); /// end of hover function

            		$("."+settings.classname).click(function(){
            			var idsc = $(this).attr("id");
            			var urls = "";
            			$.each(data.image, function(i, item){
            				if(idsc == item.id){
            					urls = item.links; 
            				}
            			});
            			if(urls != "" || urls != "#"){
            				window.open(urls);
            			}
            		});


            });


        });


}

}(jQuery));