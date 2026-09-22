(()=>{
const groups=[["days","Daily plans","itineraries"],["stay","Your stay","hotel"],["pack","Bring along","extras"],["help","Trip help","family-care"]];
const nav=document.createElement('nav');nav.className='import-ticket-nav';nav.setAttribute('aria-label','Family guide sections');
nav.innerHTML=groups.map(([id,label,art],i)=>`<button type="button" data-section="${id}" aria-label="${label}" style="--i:${i}"><img src="../tickets/${art}.png" alt="" draggable="false"></button>`).join('');document.body.append(nav);
let frame=0,flight=null,peekTimer=0;
function settleTickets(){clearTimeout(peekTimer);nav.querySelectorAll('.mobile-peek').forEach(b=>{b.classList.remove('mobile-peek');b.classList.add('settled')})}
function stop(){cancelAnimationFrame(frame);if(flight){flight.remove();flight=null}}
function go(id,origin=null){const section=document.getElementById(id);if(!section)return;
 section.querySelectorAll(':scope > details, :scope > #live-days > details').forEach(d=>d.open=true);
 section.querySelectorAll('.section-title').forEach(title=>{if(title.nextElementSibling?.classList.contains('sec-collapsed'))title.click()});
 nav.querySelectorAll('button').forEach(b=>{if(b.dataset.section===id)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
 stop();const start=scrollY,end=Math.max(0,Math.min(section.getBoundingClientRect().top+scrollY-18,document.documentElement.scrollHeight-innerHeight)),began=performance.now();
 const animateTicket=origin&&matchMedia('(min-width:761px)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 const duration=animateTicket?1500:1000;
 if(animateTicket){
  const bounds=section.getBoundingClientRect();flight=document.createElement('img');flight.src=origin.src;flight.alt='';flight.setAttribute('aria-hidden','true');flight.className='desktop-ticket-flight';
  Object.assign(flight.style,{left:origin.left+'px',top:origin.top+'px',width:origin.width+'px'});
  flight.style.setProperty('--dx',(bounds.left+bounds.width/2-origin.left-origin.width/2)+'px');flight.style.setProperty('--dy',(bounds.top+start-end+42-origin.top)+'px');document.body.append(flight);
 }
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)scrollTo(0,end);else{const step=now=>{const t=Math.min(1,(now-began)/duration),ease=t*t*(3-2*t);scrollTo(0,start+(end-start)*ease);if(t<1)frame=requestAnimationFrame(step);else stop()};frame=requestAnimationFrame(step)}
 history.replaceState(null,'','#'+encodeURIComponent(id));
}
nav.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;const image=button.querySelector('img'),rect=image.getBoundingClientRect();const origin={left:rect.left,top:rect.top,width:rect.width,src:image.src};settleTickets();button.classList.add('settled');button.blur();if(matchMedia('(max-width:760px)').matches){button.classList.add('mobile-peek');peekTimer=setTimeout(settleTickets,2000)}go(button.dataset.section,origin)});
nav.querySelectorAll('button').forEach(b=>{for(const event of ['pointerleave','pointerdown'])b.addEventListener(event,()=>{if(matchMedia('(min-width:761px)').matches)b.classList.remove('settled')})});
window.addEventListener('pagehide',settleTickets);
window.addEventListener('wheel',stop,{passive:true});window.addEventListener('touchstart',()=>cancelAnimationFrame(frame),{passive:true});
window.addEventListener('hashchange',()=>go(location.hash.slice(1)));
if(location.hash)requestAnimationFrame(()=>go(location.hash.slice(1)));
})();
