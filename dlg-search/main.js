/* exported $dlgAbout */

var $dlgGoto = (function() {
  var DOM = ''
  + '<div class="notepad-dlg-about">'
  + ' <div class="dialogbox">'
  + '   <div class="titlebar">'
  + '     <h3 class="title">转到指定行</h3>'
  + '     <span class="close-btn">✖</span>'
  + '   </div>'
  + '   <div class="main">'
  + '     <h3 class="">行号(L):</h3>'                            
                                 + '     <input class="text" type="text" />'  
                                  + '     <br>'
  + '     <input class="btn-ok" type="button" value="转到">'
  + '     <input class="close-btn"  type="button" value="取消">'                                  
  + '   </div>'                                                                                           
  + ' </div>'                                                                                            
  + '</div>';  
  var $dlg = $(DOM),    
      $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn');
  function show() {
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    $btnOk.click(function() { $dlg.remove();  });
    $btnClose.click(function() { $dlg.remove();  });                     
  }
  return {show: show};
})();
