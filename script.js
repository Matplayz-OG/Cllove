document.getElementById('loveForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (!name1 || !name2) {
        alert('Please enter both names!');
        return;
    }

    // Generate love percentage with custom probability logic
    let loveScore;
    const randomNum = Math.random();

    if (randomNum < 0.20) {
        // 20% chance: 60-70%
        loveScore = Math.floor(Math.random() * 11) + 60;
    } else if (randomNum < 0.35) {
        // 30% chance: 70-90%
        loveScore = Math.floor(Math.random() * 21) + 70;
    } else {
        // 65% chance: 80-100%
        loveScore = Math.floor(Math.random() * 21) + 80;
    }

    let message = `💖 Love between ${name1} and ${name2} is ${loveScore}%!`;

    // Special cases for specific names
    if (name1.toLowerCase() === 'ayush') {
        if (name2.toLowerCase() === 'mansi') {
            message = `❌ Love between ${name1} and ${name2} was always 0%!`;
        } else if (name2.toLowerCase() === 'raina') {
            message = `🤔 Love between ${name1} and ${name2} is 0%, but maybe ${loveScore}%.`;
        } else if (name2.toLowerCase() === 'akshita') {
            message = `💞 C'mon bro, Ayush loves her. The love score is ${loveScore}%.`;
        }
    } else if (name1.toLowerCase() === 'nikhil') {
        message = `👋 Hello Nikhil! Love with ${name2} is ${loveScore}%.`;
    }

    // Display the result
    document.getElementById('result').textContent = message;
});
