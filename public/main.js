(function(){
var nav=document.getElementById('nav');
function s(){nav.classList.toggle('s',window.scrollY>40)}
s();window.addEventListener('scroll',s,{passive:true});
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}
var sl=document.getElementById('slides');
function step(d){var f=sl.querySelector('figure');sl.scrollBy({left:d*(f.offsetWidth+18),behavior:'smooth'})}
document.getElementById('prev').onclick=function(){step(-1)};
document.getElementById('next').onclick=function(){step(1)};
})();
