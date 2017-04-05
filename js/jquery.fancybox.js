(function($){
    $.fn.fancybox = function (options){
        
        var defaults = {
            overlayColor: 'rgba(0,0,0,0.5)',
            font: 'Arial'
        }
        
        var settings = $.extend(defaults, options);
        
        var $link = this;
        var $body = $('body');
        var $modal, $overlay, $cross;
        
        function showModal(e){
            var href = $link.attr('href'); 
            $modal = $('<div class="fancybox-modal"><img src="'+href+'"><span class="fancybox-cross">X</span></div>');
            $overlay = $('<div class="fancybox-overlay"></div>');
            $overlay.css({
                backgroundColor: settings.overlayColor
            })
            e.preventDefault();
            
            
            $body.append($overlay);
            $body.append($modal);
            $overlay.one('click',hideModal);
            $('.fancybox-cross').one('click',hideModal);
        }
        
        function hideModal(){
            $modal.remove();
            $overlay.remove();
        }
        
        $link.on('click', showModal);
        
        
        return this;
    }
})(jQuery);