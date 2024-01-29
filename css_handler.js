// ======================= Credit ======================== //
// https://github.com/pythongosssss/ComfyUI-Custom-Scripts //
// ======================================================= //

import { $el } from "../../../scripts/ui.js";

export function addStyleSheet(url) {
	$el("link", {
		parent: document.head,
		rel: "stylesheet",
		type: "text/css",
		href: getLocalURL(url)
	});
}

function getLocalURL(path) {
	return new URL(path, import.meta.url).toString();
}
