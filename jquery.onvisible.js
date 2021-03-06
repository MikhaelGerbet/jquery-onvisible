/*! jQuery plugin onvisible 1.0.1 - MIT license - Copyright 2015 Mikhael GERBET */
(function($,w){
    $.fn.listenPosition = function(){
        this.each(function(index,element){
            if($(element).data('visibleDone') === true) return;
            $( w ).scroll(function() {
                var algo = ($(element).position().top) - $(w).scrollTop() - ($(w).height()/1.5);
                if(algo<0){
                    $(element).data('visibleDone',true).trigger('visible').unbind('visible');
                }
            }).delay(300).trigger('scroll');
        });
        return this;
    };
})(jQuery,window);