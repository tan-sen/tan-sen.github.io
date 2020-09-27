!function(n){
   var e = n.document,
   t=e.documentElement,
   i=720,
   d=i/32,
   o="orienttationchange" in n ? "orienttationchange":"resize",
   a = function () { 
       var n = t.clientWidth || 320; 
       n>720&&(n=720);
       t.style.fontSize = n/d+'px'
    };
    e.addEventListener&&(n.addEventListener(o,a,0),e.addEventListener('DOMContentLoaded',a,0))
}(window)