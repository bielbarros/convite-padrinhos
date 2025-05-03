const btnSim = document.querySelector('.sim');
const btnNao = document.querySelector('.nao');

btnSim.addEventListener('click', () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  
    alert('Sabíamos que podíamos contar com você! 😍');

    setTimeout(() => {
        window.location.href = "https://wa.me/5531971823073?text=Confirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Gabriel%20e%20Nicole!%20%F0%9F%92%8D";
      }, 200); // pequeno atraso para experiência suave
    
  });
  
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnRect = btnNao.getBoundingClientRect();
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const distX = mouseX - btnCenterX;
  const distY = mouseY - btnCenterY;
  const distancia = Math.sqrt(distX ** 2 + distY ** 2);

  if (distancia < 120) {
    const maxX = window.innerWidth - btnNao.offsetWidth;
    const maxY = window.innerHeight - btnNao.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btnNao.style.left = `${newX}px`;
    btnNao.style.top = `${newY}px`;
  }
});
