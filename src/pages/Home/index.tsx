import React, { useEffect, useState } from 'react';

import BasicTable from '../../components/table';

export const Home: React.FC = () => {
	const [repositorio, setRepositorio] = useState([]);

	useEffect(() => {
		async function repositorios() {
			const resposta = await fetch(
				'https://api.github.com/users/GessnerBezerra/repos',
			);
			const lstRepositorios = await resposta.json();
			console.log(lstRepositorios);
			return setRepositorio(lstRepositorios);
		}
		repositorios();
	}, []);

	return <>{BasicTable(repositorio)}</>;
};
