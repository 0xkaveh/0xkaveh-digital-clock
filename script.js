const digits = [
    [' ██████ ', '██    ██', '██    ██', '██    ██', ' ██████ '],
    ['   ██   ', ' ████   ', '   ██   ', '   ██   ', ' ██████ '],
    [' ██████ ', '      ██', ' ██████ ', '██      ', ' ██████ '],
    [' ██████ ', '      ██', ' ██████ ', '      ██', ' ██████ '],
    ['██    ██', '██    ██', ' ██████ ', '      ██', '      ██'],
    [' ██████ ', '██      ', ' ██████ ', '      ██', ' ██████ '],
    [' ██████ ', '██      ', ' ██████ ', '██    ██', ' ██████ '],
    [' ██████ ', '      ██', '    ██  ', '  ██    ', '██      '],
    [' ██████ ', '██    ██', ' ██████ ', '██    ██', ' ██████ '],
    [' ██████ ', '██    ██', ' ██████ ', '      ██', ' ██████ ']
];

function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    const time = `${h}${m}${s}`;

    let display = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            display += digits[parseInt(time[j])][i];
            if (j === 1 || j === 3) {
                display += (i === 1 || i === 3) ? '  ●  ' : '     ';
            }
        }
        display += '\n';
    }

    document.getElementById('clock').textContent = display;
}

setInterval(updateClock, 1000);
updateClock();