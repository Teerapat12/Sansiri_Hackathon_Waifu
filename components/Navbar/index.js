import React, { Fragment } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Responsive from 'react-responsive';
import {
	CenterLogo,
	Menu,
	MenuContainer, MenuGroup,
	MenuItem,
	MenuLink,
	MenuLogo
} from './Nav'
import { Container, Image } from 'semantic-ui-react'
import styled from 'styled-components'


class Navbar extends React.Component {

	setRoute = (path) => {
		Router.push(`/${path}`);
	};

	constructor () {
		super();
		this.state = {
			activeMenu: '',
		};
	}

	componentDidMount () {
		let pathname = String(window.location.pathname).replace('/', '');
		this.setState({ activeMenu: pathname });
	}

	render () {
		let { activeMenu } = this.state;
		const Brand = styled.img`
			display: flex;
			position: absolute;
			padding: 10px;
			height: 100%;
			filter: brightness(.1);
		`
		return (
			<>
				<Menu>
					<Container>
						<MenuContainer>
							<MenuGroup>
								<MenuItem >
									<CenterLogo>
										<Brand src="/static/images/Sansiri_Logo.png" />
									</CenterLogo>
								</MenuItem>
							</MenuGroup>
						</MenuContainer>
					</Container>
				</Menu>
			</>
		)
			;
	}
}

export default Navbar
