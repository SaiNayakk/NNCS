// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Blur-up effect
document.querySelectorAll('.gallery-item').forEach(img=>{
  if(img.complete) img.classList.add('loaded');
  else img.addEventListener('load', ()=>img.classList.add('loaded'), {once:true});
});
