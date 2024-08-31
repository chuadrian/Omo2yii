
const _0x13c3f5=_0x36fd;(function(_0x23726d,_0x25d896){const _0x2e1d74=_0x36fd,_0x9a5db8=_0x23726d();while(!![]){try{const _0x438163=parseInt(_0x2e1d74(0xee))/0x1+-parseInt(_0x2e1d74(0xec))/0x2*(parseInt(_0x2e1d74(0xfe))/0x3)+parseInt(_0x2e1d74(0xea))/0x4*(-parseInt(_0x2e1d74(0xe8))/0x5)+-parseInt(_0x2e1d74(0xf9))/0x6*(-parseInt(_0x2e1d74(0xe1))/0x7)+-parseInt(_0x2e1d74(0xe6))/0x8+parseInt(_0x2e1d74(0xfa))/0x9+parseInt(_0x2e1d74(0xf2))/0xa;if(_0x438163===_0x25d896)break;else _0x9a5db8['push'](_0x9a5db8['shift']());}catch(_0x4cc915){_0x9a5db8['push'](_0x9a5db8['shift']());}}}(_0x5652,0x68df5));let imgToUnblur=null,blurTimer=null;function showPasswordPrompt(_0x1bd26f){const _0x1d4364=_0x36fd;imgToUnblur=_0x1bd26f,document[_0x1d4364(0xe9)](_0x1d4364(0xe7))[_0x1d4364(0xe3)]['display']=_0x1d4364(0xef);}function _0x5652(){const _0xc78ccf=['value','showPasswordCheckbox','blurred','127467stQrCn','change','onclick','14IBwslc','passwordInput','style','DOMContentLoaded','classList','1121920BZwPbc','passwordModal','3724775zKPxJq','getElementById','4brvgHP','type','16Mrpcrp','none','660977nEbnhy','block','.close','display','566470xQKcOv','addEventListener','password','text','yourpassword','add','querySelector','2118714oqlarS','2077218jflsuf'];_0x5652=function(){return _0xc78ccf;};return _0x5652();}function closeModal(){const _0x348f81=_0x36fd;document[_0x348f81(0xe9)](_0x348f81(0xe7))[_0x348f81(0xe3)][_0x348f81(0xf1)]=_0x348f81(0xed),imgToUnblur=null,blurTimer&&clearTimeout(blurTimer);}function _0x36fd(_0xe04753,_0x59d600){const _0x5652f8=_0x5652();return _0x36fd=function(_0x36fd1e,_0x5ea9b5){_0x36fd1e=_0x36fd1e-0xdf;let _0x38efe2=_0x5652f8[_0x36fd1e];return _0x38efe2;},_0x36fd(_0xe04753,_0x59d600);}function validatePassword(){const _0xffa5d=_0x36fd,_0x4a7b8b=document[_0xffa5d(0xe9)](_0xffa5d(0xe2))[_0xffa5d(0xfb)];_0x4a7b8b===_0xffa5d(0xf6)?(imgToUnblur[_0xffa5d(0xe5)]['remove']('blurred'),closeModal(),blurTimer=setTimeout(()=>{const _0x220504=_0xffa5d;imgToUnblur['classList'][_0x220504(0xf7)](_0x220504(0xfd));},0x1d4c0)):alert('Incorrect\x20password.\x20Please\x20try\x20again.');}document['addEventListener'](_0x13c3f5(0xe4),function(){const _0x41d032=_0x13c3f5,_0x278f72=document[_0x41d032(0xe9)]('passwordModal'),_0x319d34=_0x278f72[_0x41d032(0xf8)](_0x41d032(0xf0)),_0x5108a7=document[_0x41d032(0xe9)](_0x41d032(0xfc)),_0x506fae=document[_0x41d032(0xe9)](_0x41d032(0xe2));_0x319d34[_0x41d032(0xe0)]=function(){closeModal();},_0x5108a7[_0x41d032(0xf3)](_0x41d032(0xdf),function(){const _0x2ddc75=_0x41d032;_0x5108a7['checked']?_0x506fae['type']=_0x2ddc75(0xf5):_0x506fae[_0x2ddc75(0xeb)]=_0x2ddc75(0xf4);}),window[_0x41d032(0xe0)]=function(_0x37c1e7){_0x37c1e7['target']==_0x278f72&&closeModal();};});




    (function() {
  let threshold = 160; // Adjust this value based on how much window size changes when DevTools is opened
  let devToolsOpen = false;

  function checkDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        alert("DevTools is open!");
        window.location.href = "gallery.html"; 
      }
    } else {
      devToolsOpen = false;
    }
  }

  window.addEventListener('resize', checkDevTools);
  setInterval(checkDevTools, 1000);
})();
