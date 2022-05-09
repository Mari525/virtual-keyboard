let keys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];

let out = '<section> \
			<textarea class="input" autofocus></textarea> \
			</section> \
			<section> \
				<div class="keyboard">';
for (let i = 0; i < keys.length; i++) {
	out += '<button class="key">' + String.fromCharCode(keys[i]) + '</button>';
}

out += '<button class="key backspace">Backspace</button><button class="key tab">Tab</button>';

keys = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
for (let i = 0; i < keys.length; i++) {
	out += '<button class="key">' + String.fromCharCode(keys[i]) + '</button>';
}

out += '<button class="key del">Del</button><button class="key caps">CapsLock</button>';

keys = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
for (let i = 0; i < keys.length; i++) {
	out += '<button class="key">' + String.fromCharCode(keys[i]) + '</button>';
}

out += '<button class="key enter">Enter</button><button class="key shift-left">Shift</button>';

keys = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
for (let i = 0; i < keys.length; i++) {
	out += '<button class="key">' + String.fromCharCode(keys[i]) + '</button>';
}

out += '<button class="key arrow-up">↑</button> \
		<button class="key shift-right">Shift</button> \
		<button class="key ctrl-left">Ctrl</button> \
		<button class="key win">Win</button> \
		<button class="key alt-left">Alt</button> \
		<button class="key space">Space</button> \
		<button class="key alt-right">Alt</button> \
		<button class="key ctrl-right">Ctrl</button> \
		<button class="key arrow-left">←</button> \
		<button class="key arrow-down">↓</button> \
		<button class="key arrow-right">→</button> \
		</div></section> \
		<section><ul class="list"><li>Операционная система - Windows</li> \
		<li>Работает только для английской раскладки клавиатуры</li> \
		<li>Можно зажимать Shift на клавиатуре и кликать на буквы на виртуальной</li> \
		</ul> \
		</section>';

document.querySelector("body").innerHTML = out;

let input = document.querySelector('.input');
let key = document.querySelectorAll('.key');
let shiftRight = document.querySelector('.shift-right');
let shiftLeft = document.querySelector('.shift-left');
let ctrlLeft = document.querySelector('.ctrl-left');
let ctrlRight = document.querySelector('.ctrl-right');
let altRight = document.querySelector('.alt-right');
let altLeft = document.querySelector('.alt-left');
let win = document.querySelector('.win');
let del = document.querySelector('.del');
let space = document.querySelector('.space');
let arrowUp = document.querySelector('.arrow-up');
let arrowLeft = document.querySelector('.arrow-left');
let arrowDown = document.querySelector('.arrow-down');
let arrowRight = document.querySelector('.arrow-right');

for (let i = 0; i < key.length; i++) {
    key[i].setAttribute('keyname', key[i].innerText);
    key[i].setAttribute('lowKeyname', key[i].innerText.toLowerCase());
}

ctrlLeft.setAttribute('keyname', 'Control');
ctrlRight.setAttribute('keyname', 'Control');
win.setAttribute('keyname', 'Meta');
del.setAttribute('keyname', 'Delete');
space.setAttribute('keyname', ' ');
arrowUp.setAttribute('keyname', 'ArrowUp');
arrowLeft.setAttribute('keyname', 'ArrowLeft');
arrowDown.setAttribute('keyname', 'ArrowDown');
arrowRight.setAttribute('keyname', 'ArrowRight');

window.addEventListener('keydown', function (e) {
	for (let j = 0; j < key.length; j++) {
		if (e.key == key[j].getAttribute('keyname') || (e.key == key[j].getAttribute('lowKeyname'))) {
			key[j].classList.add('active');
        }
		if (e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active');
        }
        if (e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active');
        }
		if (e.code == 'ControlLeft') {
            ctrlRight.classList.remove('active');
        }
        if (e.code == 'ControlRight') {
            ctrlLeft.classList.remove('active');
        }
		if (e.code == 'AltLeft') {
            altRight.classList.remove('active');
        }
        if (e.code == 'AltRight') {
            altLeft.classList.remove('active');
        }
	}
})

window.addEventListener('keyup', function(e) {
	for (let j = 0; j < key.length; j++) {
		if ((e.key == key[j].getAttribute('keyname') || (e.key == key[j].getAttribute('lowKeyname')))) {
            key[j].classList.remove('active');
        }
	}
})

for (let i = 0; i < key.length; i++) {
	key[i].onclick = function() {
		if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
			input.value += key[i].getAttribute('keyname').toUpperCase();
		}
		else {
			switch (this.getAttribute('keyname')) {
				case "Control":
				case "Shift":
				case "CapsLock":
				case "Meta":
				case "Alt":
				case "Delete":
					input.value;
					break;
				case "Enter":
					input.value += '\n';
					break;
				case "Tab":
					input.value += '\t';
					break;
				case "Backspace":
					input.value = input.value.substring(0, input.value.length - 1);
					break;
				case "ArrowDown":
					input.value += '↓';
					break;
				case "ArrowUp":
					input.value += '↑';
					break;
				case "ArrowLeft":
					input.value += '←';
					break;
				case "ArrowRight":
					input.value += '→';
					break;
							
				default:
					input.value += key[i].getAttribute('keyname');
			}
		}
	}
}