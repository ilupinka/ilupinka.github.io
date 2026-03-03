const cursor = document.querySelector('.custom-cursor');
const outline = document.querySelector('.custom-cursor-outline');
const links = document.querySelectorAll('a, button, .proj-link, .nav-btn');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    outline.style.left = e.clientX + 'px';
    outline.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        outline.style.borderColor = '#fff';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        outline.style.transform = 'translate(-50%, -50%) scale(1)';
        outline.style.borderColor = 'rgba(0, 255, 0, 0.5)';
    });
});

function startLiveClock() {
    const timeMain = document.getElementById('time-main');
    const timeMs = document.getElementById('time-ms');
    const dateStamp = document.getElementById('date-stamp');

    function update() {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');
        const ms = now.getMilliseconds().toString().padStart(3, '0');
        
        if (timeMain) timeMain.textContent = `${h}:${m}:${s}`;
        if (timeMs) timeMs.textContent = `.${ms}`;

        if (dateStamp) {
            const d = now.getDate().toString().padStart(2, '0');
            const mo = (now.getMonth() + 1).toString().padStart(2, '0');
            const y = now.getFullYear();
            dateStamp.textContent = `${d}.${mo}.${y}`;
        }

        requestAnimationFrame(update);
    }
    
    update();
}

startLiveClock();

function showContent(contentId, buttonElement) {
    const screen = document.getElementById('tvScreen');
    if (screen.classList.contains('off')) return;

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tv-btn:not(.power-btn)');
    buttons.forEach(btn => btn.classList.remove('pressed'));

    const targetContent = document.getElementById(contentId);
    if (targetContent) {
        targetContent.classList.add('active');
        if (buttonElement) {
            buttonElement.classList.add('pressed');
        } else {
            document.querySelector('.tv-btn:not(.power-btn)').classList.add('pressed');
        }
    }
}

function togglePower() {
    const screen = document.getElementById('tvScreen');
    const control = document.querySelector('.control-panel');
    const powerBtn = document.querySelector('.power-btn');
    const allChannelButtons = document.querySelectorAll('.tv-btn:not(.power-btn)');
    
    screen.classList.remove('no-anim');
    screen.classList.toggle('off');
    
    if (screen.classList.contains('off')) {
        control.classList.add('tv-off'); 
        powerBtn.classList.add('attention');
        allChannelButtons.forEach(btn => btn.classList.remove('pressed'));
    } else {
        control.classList.remove('tv-off');
        powerBtn.classList.remove('attention');
        showContent('home');
    }
}