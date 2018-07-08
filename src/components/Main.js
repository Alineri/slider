import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div `
	color: #ffffff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;

	span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`
const LightText = styled.div `
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 55px;
`
const CallBtn = styled.button `
	width: 247px;
	height: 67px;
	margin-top: 35px;
	border-radius: 35px;
	border: none;
	background-color: #ffa14b;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;
`

class Main extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={5} lgOffset={1}>
					<Repair>
						Качественный ремонт 
						<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallBtn>Отправить заявку!</CallBtn>
				</Col>
				<Col lg={6}>
					<Slider />
				</Col>
			</Row>
		)
	}
}
export default Main