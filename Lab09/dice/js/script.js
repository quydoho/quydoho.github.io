const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rollSound = new Audio("media/sound.mp3");

function drawDiceFace(number) {
    const diceSize = Math.min(canvas.width, canvas.height);
    const margin = (canvas.width - diceSize) / 2;
    const dotRadius = diceSize * 0.05;
    const dotOffset = diceSize * 0.25;
    
    // Xoá canvas trước khi vẽ
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Vẽ hình vuông của xúc xắc
    ctx.fillStyle = "#fff";
    ctx.fillRect(margin, margin, diceSize, diceSize);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.strokeRect(margin, margin, diceSize, diceSize);

    // Tính toán vị trí các chấm
    const centerX = margin + diceSize / 2;
    const centerY = margin + diceSize / 2;
    
    const dotPositions = [
        [ [centerX, centerY] ], // Mặt 1
        [   // Mặt 2
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        [   // Mặt 3
            [centerX - dotOffset, centerY - dotOffset],
            [centerX, centerY],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        [   // Mặt 4
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        [   // Mặt 5
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX, centerY],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        [   // Mặt 6
            [centerX - dotOffset, centerY - dotOffset],
            [centerX - dotOffset, centerY],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY],
            [centerX + dotOffset, centerY + dotOffset]
        ]
    ];
    
    // Vẽ các chấm trên xúc xắc
    ctx.fillStyle = "#000";
    dotPositions[number - 1].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function rollDice() {
    let rollCount = 0;
    const maxRolls = 6;
    const interval = 100; // thời gian giữa các lần vẽ (mili-giây)

    rollSound.play();
    const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDiceFace(randomNumber);
        rollCount++;
        
        if (rollCount >= maxRolls) {
            clearInterval(intervalId);
            const finalNumber = Math.floor(Math.random() * 6) + 1;
            drawDiceFace(finalNumber);
        }
    }, interval);
    
    setTimeout(() => {
        rollSound.pause();
        rollSound.currentTime = 0;
    }, maxRolls * interval);
}

document.getElementById("rollDiceButton").addEventListener("click", rollDice);
