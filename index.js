'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#172235';
const black = backgroundColor;
const slate = '#45577d';
const lightSlate = '#4c70be';
const mutedBlue = '#a4c1ff';
const pink = '#f273b6';
const lightPink = '#ffa1d4';
const gray = '#bb97a9';
const brightBlack = '#bb97a9';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#f273b6',
		colors: [
			black,
			slate,
      lightSlate,
      mutedBlue,
			pink,
			lightPink,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      mutedBlue,
			pink,
			lightPink,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(242, 115, 182, 0.25);
			}
		`
	});
};
