import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<Foot>
				<p>
					©All Rights Reserved
					<span>
						. Designed by: <a href="">Eddie Bassey</a>
					</span>
				</p>
				<div>
					<FaGithub
						size="1.7rem"
						color="#0AD9F5"
						style={{ marginRight: "1rem", cursor: "pointer" }}
					/>
					<FaInstagram
						size="1.7rem"
						color="#0AD9F5"
						style={{ cursor: "pointer" }}
					/>
				</div>
			</Foot>
		</div>
	);
};

const Foot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 15vh;
	background-color: #2c2c2c;
	color: white;
	p {
		padding: 1rem;
		font-size: 1.3rem;
	}
	a {
		text-decoration: none;
		color: #0ad9f5;
	}
	span {
		font-size: 1.3rem;
	}
`;

export default Footer;
