const leftArm = document.querySelector('.left-arm');

function toggleArmMovement() {
    leftArm.classList.toggle('moving-arm');
}


leftArm.addEventListener('click', toggleArmMovement);

toggleArmMovement(); 



function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.color="white"; 
    snowflake.style.left = `${Math.random() * 100}vw`; 
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; 
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 3 + 2}s`; 
    snowflake.style.opacity = Math.random(); 

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000); 
}

setInterval(createSnowflakes, 200);
