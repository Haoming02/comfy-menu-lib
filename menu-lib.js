import { addStyleSheet } from "./css_handler.js";

function borger() {
	const burger = document.createElement('div');
	burger.id = 'hm-borger';

	for (let i = 0; i < 3; i++)
		burger.appendChild(document.createElement('div'));

	return burger;
}

function createSubMenu() {
	const sub_menu = document.createElement("div");
	sub_menu.id = 'hm-sub-menu';
	sub_menu.style.display = 'none';

	const title = document.createElement('span');
	title.textContent = 'Extension Name';
	title.classList.add('title');
	sub_menu.append(title);

	const close_btn = document.createElement('button');
	close_btn.textContent = 'Close';
	close_btn.classList.add('close-btn');
	sub_menu.appendChild(close_btn);

	close_btn.onclick = () => { sub_menu.style.display = 'none'; };
	return sub_menu;
}

function getMenu() {
	var side_menu = document.getElementById('hm-side-menu');

	if (side_menu == null) {
		const comfy = document.querySelector('.litegraph');

		side_menu = document.createElement("div");
		side_menu.id = 'hm-side-menu';
		comfy.appendChild(side_menu);

		const content = document.createElement("div");
		content.classList.add('content');
		side_menu.appendChild(content);

		side_menu.appendChild(borger());
		comfy.appendChild(createSubMenu());

		addStyleSheet("menu-lib.css");

		setTimeout(() => {
			side_menu.style.top = `calc(50% - ${side_menu.clientHeight}px / 2)`;
		}, 100);
	}

	return side_menu;
}

export function registerMenu(ext) {
	const menu = getMenu();
	const sub_menu = document.getElementById('hm-sub-menu');

	const content = document.createElement("div");
	content.classList.add('content');
	content.style.display = 'none';

	sub_menu.insertBefore(content, sub_menu.lastChild);

	const btn = document.createElement('button');
	btn.textContent = ext;

	btn.onclick = () => {
		sub_menu.querySelector('.title').textContent = ext;
		sub_menu.style.display = 'flex';
		sub_menu.querySelectorAll('.content').forEach(c => c.style.display = 'none');
		content.style.display = 'flex';
	};

	menu.querySelector('.content').appendChild(btn);

	return content;
}
