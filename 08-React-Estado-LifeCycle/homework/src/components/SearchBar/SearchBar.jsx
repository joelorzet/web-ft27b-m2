import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	border: solid 2px #cdc2ae;
	border-radius: 8px;
	padding: 10px 25px;
	margin-right: 10px;
	transition: all 0.15s;
	&:hover {
		border: solid 2px #a8a39a;
	}
`;

const Button = styled.input`
	background-color: #10b87b;
	padding: 10px 25px;
	border-radius: 20px;
	border: none;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: all ease 0.2s;

	&:hover {
		background-color: #0eaa71;
		box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
	}
`;

const SearchBox = styled.div`
	margin: 10px 15px 10px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function SearchBar({ onSearch }) {
	// acá va tu código
	const [data, setData] = useState('');

	const handleInputChange = (e) => {
		setData(e.target.value);
	};

	return (
		<SearchBox>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSearch(data);
					e.target[0].value = '';
				}}
			>
				<Input type='text' placeholder='Ciudad...' onChange={handleInputChange} />
				<Button
					// onClick={}
					type='submit'
					value='Agregar'
				/>
			</form>
		</SearchBox>
	);
}
