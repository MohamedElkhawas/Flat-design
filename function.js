/* Java script */

$(document).ready(function(){
    $('#slid-toggle').click(function(){
        $('body').toggleClass('toggled');
        $('#main').toggleClass('toggled');    
        $('#slidenav').toggleClass('toggled');
    });
    $('#slide-close').click(function(){
        $('body').removeClass('toggled');
        $('#main').removeClass('toggled');
        $('#slidenav').removeClass('toggled');
    });
   $('#slid-toggle,#slidenav').clickoutside(function(){
        $('body').removeClass('toggled');
        $('#main').removeClass('toggled');    
        $('#slidenav').removeClass('toggled');
   });
    
  
});


(function(jQuery){
    jQuery.fn.clickoutside =  function(callback){
        var outside = 1,self=$(this);
        self.cb = callback;
        this.click(function(){
            outside=0;
        });
        $(document).click(function(){
            outside && self.cb();
            outside=1;
        });
        return $(this);
    }
})(jQuery);