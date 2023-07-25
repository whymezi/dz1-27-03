const gmailInput = document.querySelector('#gmail_input')
const checker = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

checker.onclick = () => {
    if (regExp1.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

let position = 0;
function recursionAnimation() {
    position = position +10;
    if (position > 250)return;
    document.querySelector('.child_block').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100);
}

animation();