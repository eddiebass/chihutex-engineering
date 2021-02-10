import React from "react";
import Arno from "../img/american-public-2.jpg";
import logo from "../img/logo.svg";
import styled from "styled-components";

const LandingPage = () => {
	return (
		<div>
			<NavBar>
				<div className="logo">
					<img src={logo} alt="logo" />
					<div>
						<h4>
							Chihutex <br />
						</h4>
						<span>Engineering Ltd</span>
					</div>
				</div>
				<ul>
					<li>About Us</li>
					<li>Services</li>
					<li>Contact Us</li>
				</ul>
			</NavBar>
			<Header>
				<HeadChildOne>
					<h2>Welcome to our page</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
						dignissimos eum eligendi? Quaerat, sunt quo. Quibusdam tempora
						similique rerum perspiciatis natus deserunt alias quaerat libero.
					</p>
					<button>Contact Us</button>
				</HeadChildOne>
				<HeadChildTwo>
					<img src={Arno} alt="transformer" />
				</HeadChildTwo>
			</Header>
		</div>
	);
};

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 10vh;
	background-color: #0aa765;
	color: white;
	ul {
		display: flex;
	}
	li {
		list-style: none;
		padding-right: 10rem;
		cursor: pointer;
	}
	.logo {
		display: flex;
	}
	h4 {
		letter-spacing: 4px;
		font-size: 1.2rem;
	}
	span {
		font-size: 1.2rem;
		font-weight: bold;
		color: #2c2c2c;
	}
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 90vh;
`;

const HeadChildOne = styled.div`
	flex: 1;
	padding: 0rem 10rem;
`;

const HeadChildTwo = styled.div`
	flex: 1;
	padding: 0rem 10rem;
	overflow: hidden;
	img {
		width: auto;
		height: 80vh;
		object-fit: cover;
		border-radius: 3rem;
	}
`;

export default LandingPage;
