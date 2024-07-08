const checkbox = document.getElementById("checkbox");
const ball = document.getElementById("ball24");

const getPreferredBall = () => {
    return localStorage.getItem('theme')
}

const setThemeBall = function (theme) {
    console.log('theme:',theme);
    if(theme=='dark') {
        ball.style.transform = 'translateX(24px)';
    }
    else  ball.style.transform = 'translateX(0px)';
}
window.addEventListener('DOMContentLoaded', () => { 
    setThemeBall(getPreferredBall());

})

checkbox.addEventListener("change", () => {
    console.log('checkbox changed');
    setThemeBall(getPreferredBall());
})
