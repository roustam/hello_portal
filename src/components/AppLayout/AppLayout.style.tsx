import { Button, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../theme/palette";


const rightSideWidth = '43.75vw'
const contentHorizontalPadding = '40px'
const footerHeightMobile = '80px'
const footerHeight = '137px'
const headerHeight = '128px'
const headerHeightMobile = '160px'


export const CategoriesRoot = styled(Grid)`
	//height: 100vh;

`;

export const LeftSide = styled(Grid)(({theme}) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: rightSideWidth,
	height: '100vh',
	paddingLeft: '32px',
	paddingTop: '32px',
	paddingBottom: '55px',
	flexFlow: 'column nowrap',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: palette.primary.main,
	zIndex: 1,

	[theme.breakpoints.down('sm')]: {
		display: 'none'
	},
}))

export const RightSide = styled(Grid)(({theme}) => ({
	position: 'relative',
	flex: 1,
	height: 'auto',
	paddingLeft: `calc(${contentHorizontalPadding} + ${rightSideWidth})`,
	paddingRight: contentHorizontalPadding,
	backgroundColor: palette.primary.white,

	[theme.breakpoints.down('sm')]: {
		paddingLeft: '16px',
		paddingRight: '16px'
	},
}))

export const ContentWrapper = styled(Stack)(({theme}) => ({
	overflow: 'auto',
	paddingBottom: `calc(${footerHeight} + ${'80px'})`,
	paddingTop: headerHeight,
	[theme.breakpoints.down('sm')]: {
		paddingTop: `calc(${headerHeight} + ${'38px'})`,
		paddingBottom: `calc(${footerHeightMobile} + ${'80px'})`,
	}
}))

// export const ContentWrapper = styled(Box)`
// 	overflow: auto;
// 	padding-bottom: calc(${footerHeight} + ${'80px'}); //doubled because of gradient
// 	padding-top: ${headerHeight};
// `

export const Header = styled(Stack)(({theme}) => ({
	boxSizing: 'border-box',
	position: 'fixed',
	right: '40px',
	top: 0,
	height: headerHeight,
	width: `calc(100% - ${rightSideWidth} - ${contentHorizontalPadding} - ${contentHorizontalPadding})`,
	backgroundColor: palette.primary.white,
	flexDirection: 'row',
	justifyContent: 'space-between',
	// paddingBottom: '21px',
	paddingTop: '60px',
	zIndex: 2,
	color: palette.text.primary,

	[theme.breakpoints.down('sm')]: {
		height: headerHeightMobile,
		paddingLeft: '16px',
		paddingRight: '16px',
		width: '100%',
		right: 0,
		flexWrap:'wrap',
		color: '#000',
	},
}))



export const Footer = styled(Stack)<{hasgradient?:boolean}>(({theme, hasgradient}) => ({

	boxSizing: 'border-box',
	position: 'fixed',
	right: '40px',
	bottom: 0,
	height: footerHeight,
	width: `calc(100% - ${rightSideWidth} - ${contentHorizontalPadding} - ${contentHorizontalPadding})`,
	flexDirection: 'row',
	alignItems: 'flex-end',
	paddingBottom: '55px',
	justifyContent: 'space-between',
	backgroundColor: palette.primary.white,


	'&::before': hasgradient && {
		position: 'absolute',
		display: 'block',
		content: "''",
		bottom: '100%',
		background: `linear-gradient(179.15deg, transparent 0%, rgba(255, 0, 0, 0) -44.59%, rgba(255, 255, 255, 0) -44.59%, #FCEDDA 79.22%)`,
		height: footerHeight,
		width: '100%',
		pointerEvents: 'none',
	},

	[theme.breakpoints.down('sm')]: {
		paddingLeft: '16px',
		paddingRight: '16px',
		fontSize:'15px',
		width: '100%',
		left: '0',
		fontStyle: 'normal',
		fontWeight: 400,
		height:footerHeightMobile,
		paddingBottom: '25px',
		right: 'initial',
		gap: '14px',

		'&::before': hasgradient && {
			height: footerHeightMobile,
		},
	},
}))

export const BackButton = styled(Button)(() => ({
	width: '168px',
	height: '50px',
	borderRadius: '10px',
	backgroundColor: palette.primary.gray,
	color: palette.primary.main,
}))

export const NextButton = styled(Button)(({theme}) => ({
	width: '168px',
	maxWidth:'43.6vw',
	height: '50px',
	borderRadius: '10px',
	display: 'flex',
	'@media (hover: none)':{
		backgroundColor: `${palette.primary.main} !important`,
	}
}))


export const SkipButton = styled(Button)(() => ({
	backgroundColor: palette.primary.white,
	color: palette.primary.main,
	width: '168px',
	heigth: '50px',
	borderRadius: '10px',
	'&:hover': {
		color: palette.primary.white,
		backgroundColor: palette.primary.dark,
	}
}))

