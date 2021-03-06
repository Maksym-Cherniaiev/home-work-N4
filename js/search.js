document.querySelector("#field-active").addEventListener("click", searchActive);
let counter = 1;

class ShowField {
	constructor() {
		this.mobileField = document.querySelector(".search-invisible");
		this.showInput();
		this.removeOpacity();
		this.incrementWidth();
		this.repeatIncrement();
	}

	showInput() {
		this.mobileField.classList.add("fieldVisible");
	}

	removeOpacity() {
		this.mobileField.classList.remove("search-invisible");
	}

	incrementWidth() {
		let searchWidth = document.querySelector(".fieldVisible");
		let elementPosition = searchWidth.getBoundingClientRect();
		let width = elementPosition.width;
		if (width <= 450) {
			width = width + counter;
			counter++;
			this.mobileField.style.width = `${width}px`;
		} else if (width === "450px") {
			clearInterval(this.widthHandler);
		}
	}

	repeatIncrement() {
		this.widthHandler = setInterval(() => this.incrementWidth(), 35);
	}
}

function searchActive() {
	let shownField = new ShowField();
}