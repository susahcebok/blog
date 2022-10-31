function copyToClipboard(element) {
	function clear() {
		if (window.getSelection().empty) {
			window.getSelection().empty();
		} else if (window.getSelection().removeAllRanges) {
			window.getSelection().removeAllRanges();
		}
	}

	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(element);
		range.select().createTextRange();
		document.execCommand('Copy');
		document.selection.empty();
	} else if (window.getSelection) {
		clear();
		var range = document.createRange();
		range.selectNode(element);
		window.getSelection().addRange(range);
		document.execCommand('Copy');
		clear();
	}
}

var textContainer = document.createElement('span');
textContainer.innerText = window.location.href;
document.body.appendChild(textContainer);
copyToClipboard(textContainer);
document.body.removeChild(textContainer);
