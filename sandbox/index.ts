import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('Car', {
		year: 2022,
		color: 'Red'
	});

	const car = await client.hGetAll('Car');
	console.log(car);
};
run();
