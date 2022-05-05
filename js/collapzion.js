(function($) {
    "use strict";
    $.fn.Collapzion = function(options) {
        // Private Functions
        function debug(e) {
            console.log(e);
        }        
        // Global Private Variables
        var _base = this;
        var _settings = $.extend({
            _pos: {
                'width':'100%',
                'min-height':'20%',
                'position':'fixed',
                'right':'0',
                'left': '-15px',
                'bottom': '-95px',
                'text-align':'center',
                'padding': '0px 8px',
                'display':'block',
                'margin-bottom':'34px'
            },
            _child_attribute:[
                {
                'label':'Post',
                'url':'/',
                'icon':'&#xE150;'
                }
            ],
            _main_btn_color: '#2f353e;',
            _child_btn_color: '#2f353e;'
        }, options );

        _base.init = function(){
            _base.css(_settings._pos);
            _base.append('<a style="background-color:'+_settings._main_btn_color+'" href="javascript:void(0)" class="_col_shadow _collapz_parant _close"></a>');
             
            $('#'+this.attr('id')+ ' a._collapz_parant').on('click',function(){
                var ths = $(this);                
                _base.collapz_btn(ths, _settings._child_attribute);
            });
        };
        // toggle button 
        _base.collapz_btn = function(_element, child_attribute){
            if(_element.hasClass('_close')){

                _element.removeClass('_close');
                _element.addClass('_open');
                
                var _child_el = '<ul class="_child_collapzion">';                
                    jQuery.each(child_attribute, function( i, val ) {
                        _child_el += '<li><span class="_title ">'+val.label+'</span><a href="'+val.url+'" class="_col_shadow _collapz_child edit" style="background-color:'+_settings._child_btn_color+'"><i class="material-icons">'+val.icon+'</i></a></li>';            
                    });
                _child_el += '</ul>';
               
                _element.parent().append(_child_el);
                $("._child_collapzion" ).css( {'transform':'translate3d(0, -100%, 0)'} );

            } else {
                $("._child_collapzion" ).css( {'transform':'translate3d(0, 0%, 0)'} );
                $(this).parent().find('ul._child_collapzion').remove();

                _element.removeClass('_open');
                _element.addClass('_close');                
            }          
        }
        _base.clicker = function(e) {
            debug(e);
        };
        _base.init();
    }

}(jQuery));
