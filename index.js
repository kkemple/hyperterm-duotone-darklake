'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#172235'
const black = backgroundColor
const slate = '#45577d'
const lightSlate = '#4c70be'
const mutedBlue = '#a4c1ff'
const pink = '#f273b6'
const lightPink = '#ffa1d4'
const gray = '#bb97a9'
const brightBlack = '#bb97a9'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: slate,
	pink: lightSlate,
	yellow: mutedBlue,
	blue: pink,
	magenta: lightPink,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: slate,
	lightGreen: lightSlate,
	lightPink: lightSlate,
	lightYellow: mutedBlue,
	lightBlue: pink,
	lightMagenta: lightPink,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#f273b6',
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(242, 115, 182, 0.25)
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
		case 'CONFIG_RELOAD':
		action.config.foregroundColor = foregroundColor
		action.config.backgroundColor = backgroundColor
		action.config.cursorColor = pink
		action.config.colors = colors
	}
	next(action)
}
