
document.getElementById('copyEmailBtn').addEventListener('click', function () {
    const email = 'ferferjose99@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
        const tooltip = document.getElementById('copyTooltip');
        this.classList.add('copied');

        setTimeout(() => {
        this.classList.remove('copied');
        }, 1500);
    });
});
