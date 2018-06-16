import styled from 'styled-components'

const CircleButton = styled.div`
	cursor: pointer;
	width: 350px;
	height: 350px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 0 10px 3px rgba(0,0,0, .2);
	background: linear-gradient(to right, rgb(212,242,205) 0%,#f2b9ae 100%);
	border-radius: 10%;
	font-size: 2em;
	color: #535353;
	padding: 50px;
	box-sizing: border-box;
	transition: all .15s ease-in-out;
	&:hover {
		transform: scale(1.1);
		box-shadow: 0 0 45px 3px rgba(0,0,0, .1);
	}
	&:active {
		padding: 80px;
		transform: rotatez(3deg);
	}
`

export default CircleButton