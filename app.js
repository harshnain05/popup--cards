// =============card==js================

const cradBtn = document.querySelectorAll('.btn');
const cardText = document.querySelectorAll('.cardText');

cradBtn.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => {
        cardText[i].classList.remove('hidden');

    });
    btn.addEventListener('mouseout', () => {
        cardText[i].classList.add('hidden');

    });
})
// ============card==js==close===============
// ===========popup===js=====================

const accept_Btn = document.getElementById('accept_Btn');
const deny_Btn = document.getElementById('deny_Btn');
const cookies = document.getElementById('cookies');

accept_Btn.addEventListener('click', () => {
    localStorage.setItem('', 'accepted');
    cookies.classList.add('hidden');
});

deny_Btn.addEventListener('click', () => {
    localStorage.setItem('', 'rejected');
    cookies.classList.add('hidden');
});

if (localStorage.getItem('')) {
    cookies.classList.add('hidden');
};
// =============popup=====js====close==========