const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

if (!sign_in_btn || !sign_up_btn || !container) {
console.warn('sign in/up buttons or container not found');
}

// helper to toggle
function setSignMode(on) {
if (on) container.classList.add("sign-up-mode");
else container.classList.remove("sign-up-mode");
}

// attach both click and touchstart for better mobile responsiveness
['click', 'touchstart'].forEach(evt => {
if (sign_up_btn) sign_up_btn.addEventListener(evt, function (e) {
e.preventDefault();           // prevents duplicate click after touch
setSignMode(true);
}, { passive: false });

if (sign_in_btn) sign_in_btn.addEventListener(evt, function (e) {
e.preventDefault();
setSignMode(false);
}, { passive: false });
});

