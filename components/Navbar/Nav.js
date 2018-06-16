import styled from 'styled-components'

export const Menu = styled.div`
	display: block;
	width: 100%;
	margin: auto;
	position: relative;
	background: linear-gradient(to right, #d4f2cd 0%,#f2b9ae 100%);
	box-shadow: 0 -10px 45px 5px rgba(0,0,0, .4);
	box-sizing: border-box;
	z-index: 50;
	
	@media only screen and (min-width: 1200px){
		padding-left: 30px;
		padding-right: 30px;
	}
`

export const MenuContainer = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 65px;
	justify-content: space-between;
	margin: auto;
`

export const MenuLink = styled.a`
	cursor: pointer;
	min-width: 115px;
	text-align: center;
	color: ${props => props.active ? '#fff' : 'inherit'};
	padding: 15px 13px;
	background-color: ${props => props.active ? '#00a7f8' : 'inherit'};
	transition: all .2s ease-in-out;
	${props => props.active ?'inset 0 -92px 25px 14px rgba(0,0,0,0.14);': ''}
	&:hover{
		color: ${props => props.active ? '#fff' : 'inherit'};
		${props => props.active ? '' : 'background-color: rgba(0,0,0, .06);'}
	}
`

export const MenuGroup = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 100%;
	justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
`

export const MenuItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 100%;
	margin: 1rem 0;
	${
	props => props.gap ? 'margin: 0 10px;' : ''
	};
`
export const MenuLogo = styled(MenuItem)`
	margin-right: 20px;
`

export const CenterLogo = styled.div`
	display: flex;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	animation-name: fadeIn;
	animation-duration: .6s;
	
	@keyframes fadeIn {
		from{
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`