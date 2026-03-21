  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];
  for(let i=0;i<columns;i++) drops[i]=1;

  function draw(){
    ctx.fillStyle = 'rgba(2,6,23,0.1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#22c55e';
    ctx.font = fontSize + 'px monospace';

    for(let i=0;i<drops.length;i++){
      const text = letters[Math.floor(Math.random()*letters.length)];
      ctx.fillText(text,i*fontSize,drops[i]*fontSize);

      if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
        drops[i]=0;

      drops[i]++;
    }
  }

  setInterval(draw,33);

  window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });