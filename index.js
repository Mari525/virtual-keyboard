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
