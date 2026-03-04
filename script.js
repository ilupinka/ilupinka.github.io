const isMouse = window.matchMedia("(pointer: fine)").matches;

if (isMouse) {
    const cursor = document.querySelector('.custom-cursor');
    const outline = document.querySelector('.custom-cursor-outline');
    const links = document.querySelectorAll('a, button, .proj-link, .nav-btn');

    if (cursor && outline) {
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
    }
}

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
        setTimeout(fitContent, 50);

        if (contentId === 'contacts') {
            setTimeout(() => {
                const canvas = document.getElementById('matrix-canvas');
                if (canvas && window.refreshMatrix) {
                    window.refreshMatrix(); 
                }
            }, 50);
        }

        if (buttonElement) {
            buttonElement.classList.add('pressed');
        } else {
            const btn = document.querySelector(`.tv-btn[onclick*="${contentId}"]`);
            if (btn) btn.classList.add('pressed');
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

function fitContent() {
    const screen = document.getElementById('tvScreen');
    const header = document.querySelector('.tv-header');
    const activeContent = document.querySelector('.content.active');
    
    if (!screen || !activeContent || screen.classList.contains('off')) return;

    if (window.innerWidth < 768) {
        activeContent.style.transform = 'scale(1)';
        activeContent.style.width = '100%';
        screen.style.overflowY = 'auto';
        return; 
    }

    screen.style.overflowY = 'hidden'; 
    activeContent.style.transform = 'scale(1)';
    activeContent.style.width = '100%';

    const headerHeight = header ? header.offsetHeight : 0;
    const screenStyle = window.getComputedStyle(screen);
    const paddingTop = parseFloat(screenStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(screenStyle.paddingBottom) || 0;
    
    const availableHeight = screen.offsetHeight - headerHeight - paddingTop - paddingBottom - 20;
    const contentHeight = activeContent.scrollHeight;

    if (contentHeight > availableHeight) {
        const scale = availableHeight / contentHeight;
        activeContent.style.transform = `scale(${scale})`;
        activeContent.style.width = (100 / scale) + '%';
    } else {
        activeContent.style.transform = 'scale(1)';
        activeContent.style.width = '100%';
    }
}

window.addEventListener('resize', fitContent);

function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let fontSize = 12;
    let columns = 0;
    let drops = [];

    function resetMatrix() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        
        columns = Math.floor(canvas.width / fontSize);
        drops = new Array(columns).fill(1);
    }

    resetMatrix();
    window.addEventListener('resize', resetMatrix);

    function draw() {
        if (drops.length === 0 && canvas.parentElement.offsetWidth > 0) {
            resetMatrix();
        }

        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ".charAt(
                Math.floor(Math.random() * 52)
            );
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
    window.refreshMatrix = resetMatrix;
}

initMatrix();