const scene = document.createElement('scene');
document.body.appendChild(scene);

let sb = document.getElementById('sb');
let stb = document.getElementById('stb');
let waku = document.getElementById('waku');
let se = new Audio('tenmetsu.mp3');
let se1 = new Audio('se1.mp3');
let se2 = new Audio('push.mp3');
let se3 = new Audio('jojo.mp3');
let timer;
let timer1;
let batsu = -1;


waku.style.display = 'none';
stb.style.display = 'none';

function start() {
    se2 = new Audio('push.mp3').play();
    waku.style.top = `${15}px`;
    stb.style.display = 'block';
    sb.style.display = 'none';
    timer = setInterval(rulet, 30);
}
function rulet() {
    waku.style.display = 'block';
    se1.play();
    batsu++;
    switch (batsu) {
        case 0:
            waku.style.left = `${5}px`;
            waku.style.top = `${15}px`;
            break;
        case 1:
            waku.style.left = `${455}px`;
            waku.style.top = `${15}px`;
            break;
        case 2:
            waku.style.left = `${975}px`;
            waku.style.top = `${15}px`;
            break;
        case 3:
            waku.style.left = `${5}px`;
            waku.style.top = `${200}px`;
            break;
        case 4:
            waku.style.left = `${455}px`;
            waku.style.top = `${200}px`;
            break;
        case 5:
            waku.style.left = `${975}px`;
            waku.style.top = `${200}px`;
            batsu = -1;
            break;
        default:
            break;
    }
}
//function StopButtonPush () {
//  clearInterval(timer);
//se1.pause()
//    se.play();
//  stb.style.display = 'none'
//sb.style.display = 'block';
//}
function StopButtonPush() {
    se1.pause();
    se2 = new Audio('push.mp3').play();
    let sentakus = [1, 2, 3, 4, 5, 6];
    let sentaku = Math.floor(Math.random() * sentakus.length);
    console.log(sentakus[sentaku]);
    clearInterval(timer);
    stb.style.display = 'none'
    sb.style.display = 'block';
    timer1 = setInterval(choice, 1000);

    function choice() {
        batsu++;
        sentakus[sentaku]--;
        if(sentakus[sentaku] !== 0) {
            se3 = new Audio('jojo.mp3').play();
        }
        switch (batsu) {
            case 0:
                waku.style.left = `${5}px`;
                waku.style.top = `${15}px`;
                break;
            case 1:
                waku.style.left = `${455}px`;
                waku.style.top = `${15}px`;
                break;
            case 2:
                waku.style.left = `${975}px`;
                waku.style.top = `${15}px`;
                break;
            case 3:
                waku.style.left = `${5}px`;
                waku.style.top = `${200}px`;
                break;
            case 4:
                waku.style.left = `${455}px`;
                waku.style.top = `${200}px`;
                break;
            case 5:
                waku.style.left = `${975}px`;
                waku.style.top = `${200}px`;
                batsu = -1;
                break;
            default:
                break;
        }
        if (sentakus[sentaku] === 0) {
            clearInterval(timer1);
            se.play();
        }
    }
}
