(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function count(el){var t=+el.dataset.n,s=el.dataset.s||'',st=null;function fm(v){return (el.dataset.p||"")+v.toFixed(+el.dataset.d||0).replace(/\B(?=(\d{3})+(?!\d))/g,",")+s}
if(rm){el.textContent=fm(t);return}
function f(ts){if(!st)st=ts;var p=Math.min((ts-st)/1800,1);el.textContent=fm(t*p);if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
var el=e.target;io.unobserve(el);if(el.dataset.n)count(el);else el.classList.add('in')})},{threshold:.2});
document.querySelectorAll('.rv,[data-n]').forEach(function(x){io.observe(x)});
document.getElementById('f').addEventListener('submit',function(ev){ev.preventDefault();
var to='sanjaysanju16133@gmail.com';
location.href='mailto:'+to+'?subject='+encodeURIComponent('Enquiry from '+document.getElementById('n').value)+'&body='+encodeURIComponent(document.getElementById('m').value+'\n\n'+document.getElementById('e').value);});
})();
(function(){var all=[].slice.call(document.querySelectorAll('.gi,.vc')),list=all,lb=document.getElementById('lb'),im=document.getElementById('lbi'),tt=document.getElementById('lbt'),c=0,last=null;
function show(n){c=(n+list.length)%list.length;var s=list[c].querySelector('img');im.src=s.src;im.alt=s.alt;tt.textContent=s.alt;}
function open(b){last=document.activeElement;list=all.filter(function(x){return x.dataset.g===b.dataset.g});show(list.indexOf(b));lb.classList.add('on');document.getElementById('lbx').focus()}
function close(){lb.classList.remove('on');if(last)last.focus()}
all.forEach(function(b){b.addEventListener('click',function(){open(b)})});
document.getElementById('lbx').onclick=close;
document.getElementById('lbp').onclick=function(){show(c-1)};
document.getElementById('lbf').onclick=function(){show(c+1)};
lb.addEventListener('click',function(e){if(e.target===lb)close()});
document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(c-1);if(e.key==='ArrowRight')show(c+1)});
})();
(function(){document.querySelectorAll('.fc').forEach(function(c){function t(){c.classList.toggle('flip')}c.addEventListener('click',t);c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}})})})();
(function(){var cf=document.getElementById('cf');if(!cf)return;var it=[].slice.call(cf.querySelectorAll('.cfi')),n=it.length,cur=n>1?1:0,cap=document.getElementById('cfc'),x0=0;
if(n<2)cf.classList.add('one');
function lay(){it.forEach(function(el,i){var d=i-cur;if(n>2){if(d>n/2)d-=n;if(d<-n/2)d+=n}var a=Math.abs(d);el.style.transform='translateX(calc(-50% + '+(d*64)+'%)) translateZ('+(-a*160)+'px) rotateY('+(-d*40)+'deg)';el.style.opacity=a>2?0:(1-a*.28);el.style.zIndex=20-a;el.style.pointerEvents=a>2?'none':'auto'});cap.textContent=it[cur].querySelector('img').alt}
function go(k){cur=(cur+k+n)%n;lay()}
lay();
cf.querySelector('.cfl').onclick=function(){go(-1)};
cf.querySelector('.cfr').onclick=function(){go(1)};
cf.addEventListener('click',function(e){var el=e.target.closest&&e.target.closest('.cfi');if(!el)return;var i=it.indexOf(el);if(i!==cur){cur=i;lay();e.stopPropagation();e.preventDefault()}},true);
cf.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});
cf.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
cf.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(dx<0?1:-1)});
})();
(function(){var hr=document.getElementById('home');if(!hr||!('IntersectionObserver' in window))return;
new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){hr.classList.add('go')}else{hr.classList.remove('go')}})},{threshold:.35}).observe(hr);
})();
