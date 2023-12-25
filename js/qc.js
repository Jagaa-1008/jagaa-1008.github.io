document.addEventListener('DOMContentLoaded', function() {
    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const modalId = e.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });
});
