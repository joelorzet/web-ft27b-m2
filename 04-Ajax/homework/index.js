$('#boton').click(() => {
	document.querySelector('#lista').innerHTML = '';

	$.get(`http://localhost:5000/amigos/`, (data) => {
		data.forEach((ele) => {
			const $li = document.createElement('li');
			console.table(ele);

			const ul = document.querySelector('#lista');

			$li.innerText = ele.name;

			ul.appendChild($li);
		});
	});
});

const reloadFriends = () => {
	document.querySelector('#lista').innerHTML = '';

	$.get(`http://localhost:5000/amigos/`, (data) => {
		data.forEach((ele) => {
			const $li = document.createElement('li');
			console.table(ele);

			const ul = document.querySelector('#lista');

			$li.innerText = ele.name;

			ul.appendChild($li);
		});
	});
};

$('#search').click(() => {
	const idValue = Number(document.querySelector('#input').value);

	$.get(`http://localhost:5000/amigos/${idValue}`, (data) => {
		const spanAmigo = document.querySelector('#amigo');

		spanAmigo.innerHTML = `<h3>Nombre: <span>${data.name}</span></h3>
        <p>Edad: ${data.age}</p>
        <span>Email: ${data.email}</span>`;
	});
});

$('#delete').click(() => {
	const idToDelete = Number(document.querySelector('#inputDelete').value);

	$.ajax({
		url: `http://localhost:5000/amigos/${idToDelete}`,
		method: 'DELETE',
		success: (data) => {
			const realizado = document.querySelector('#success');
			console.log(data);
			realizado.innerHTML = `<h3>Realizado con Éxito</h3> 
            
                <p>Elementos borrados: ${data[idToDelete].name}</p>`;

			reloadFriends();
		},
		error: (error) => {
			alert(error);
		},
	});
});
