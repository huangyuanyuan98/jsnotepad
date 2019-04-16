/* exported $dlgAbout */

var $dlgAbout = (function() {
  var DOM = ''
  + '<div class="notepad-dlg-about">'
  + ' <div class="dialogbox">'
  + '   <div class="titlebar">'
  + '     <p class="title">关于“记事本“</p>'
  + '     <span class="close-btn">✖</span>'
  + '   </div>'
  + '   <div class="main">'
  + '     <h1 class="">JSNotepad</h1>'                            
  + '     <hr>'  
  + '     <div class="info">'
  + '       <p>作者：黄媛媛</p>'
  + '       <p>仓库地址：<a href="https://github.com/wangding/jsnotepad/" target="_blank">https://github.com/wangding/jsnotepad/</a></p>'
  + '     </div>'
  + '     <input class="btn-ok btn" type="button" value="确定">'
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
