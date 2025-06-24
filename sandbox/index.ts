import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('Car', {
		year: 2022,
		color: 'Red',
		engine: { cylinders: 8 },
		owner: null,
		service: undefined
	});

	const car = await client.hGetAll('Car');
	console.log(car);
};
run();
