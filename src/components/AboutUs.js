import React from "react";
import ehmitrich from "../img/ehmitrich.jpg";
import arno from "../img/arno-senoner.jpg";
import styled from "styled-components";

const AboutUs = () => {
	return (
		<Main>
			<About>
				<HeadChildOne>
					<h3>Prioritizing Safety</h3>
					<div className="line"></div>
					<p>
						We are passionate about safety; we have never had a RIDDOR
						reportable accident since we were formed in 2008
					</p>
				</HeadChildOne>
				<HeadChildTwo>
					<img src={ehmitrich} alt="voltage" />
				</HeadChildTwo>
			</About>
			<About>
				<HeadChildTwo>
					<img src={arno} alt="transformer" />
				</HeadChildTwo>
				<HeadChildOne>
					<h3>Reliability and Experience</h3>
					<div className="line"></div>
					<p>
						Based in London, we offer electrical services to commercial, retail
						and industrial organisations across England, combining the very best
						in electrical design, installation and maintenance services.
						Chihutex Engineering was established in 2020 and has experience in
						providing installation and maintenance services in a wide range of
						commercial and industrial installations throughout the UK.
					</p>
					<p>
						We pride ourselves on our tailored service approach, aimed to
						maximise client satisfaction deliver the very highest quality and
						safety standards. We value our client partnerships, which include
						some of the nations leading companies.
					</p>
				</HeadChildOne>
			</About>
			<NewLine />
			<AnotherLine />
		</Main>
	);
};

const Main = styled.div`
	position: relative;
	width: 100%;
	margin: 15rem 0;
`;

const About = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	.line {
		background-color: #0aa765;
		height: 0.2rem;
		width: 75%;
		margin-bottom: 3rem;
	}
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
		width: 100%;
		height: 80vh;
		object-fit: cover;
		border-radius: 3rem;
		border: 20px solid white;
	}
`;
const NewLine = styled.div`
	position: absolute;
	top: 150px;
	left: 2px;
	background-color: #0aa765;
	height: 1rem;
	width: 100%;
	z-index: -1;
`;
const AnotherLine = styled.div`
	position: absolute;
	top: 600px;
	left: 2px;
	background-color: #0aa765;
	height: 1rem;
	width: 100%;
	z-index: -1;
`;
export default AboutUs;
