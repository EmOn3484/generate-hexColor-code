/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler
window.onload = () =>{
main();
};
function main() {
	const root = document.getElementById('root')
	const cngBtn = document.getElementById('change-btn')
	const output = document.getElementById('output')

	cngBtn.addEventListener('click',function () {
		const bgColor = generateHEXColor()
	root.style.backgroundColor = bgColor;
	output.value = bgColor;
	})
}


	

// step 2 - random color generator function
function generateHEXColor () {
	const red =Math.floor(Math.random()*255)
	const green = Math.floor(Math.random()*255)
	const blue = Math.floor(Math.random()*255)

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step 3 - collect all necessary references

// step 4 - handle the click event
