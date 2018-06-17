import React, { Fragment } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Responsive from 'react-responsive';
import {
	CenterLogo,
	Menu,
	MenuContainer, MenuGroup,
	MenuItem
} from './Nav'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/ArrowBack'
import { Container, Image } from 'semantic-ui-react'
import styled from 'styled-components'


class Navbar extends React.Component {

	setRoute = (path) => {
		Router.push(`/${path}`);
	};

	constructor () {
		super();
		this.state = {
			activeMenu: ''
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
					<MenuContainer>
						{process.browser? Router.pathname !== '/' ? (
							<MenuGroup>
								<MenuItem>
									<Button onClick={() => Router.push('/')} style={{zIndex: 2000}}>
										<HomeIcon />
									</Button>
								</MenuItem>
							</MenuGroup>
						) : null: null}
						<MenuGroup>
							<MenuItem>
								<CenterLogo>
									<Brand src="/static/images/Sansiri_Logo.png" />
								</CenterLogo>
							</MenuItem>
						</MenuGroup>
					</MenuContainer>
				</Menu>
			</>
		)
			;
	}
}

export default Navbar
