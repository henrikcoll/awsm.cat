import Surreal from 'surrealdb.js';

const surreal = new Surreal();

surreal.connect(process.env.SURREAL_URL, {
	namespace: process.env.SURREAL_NAMESPACE,
	database: process.env.SURREAL_DATABASE,
	auth: {
		namespace: process.env.SURREAL_NAMESPACE,
		database: process.env.SURREAL_DATABASE,
		username: process.env.SURREAL_USERNAME,
		password: process.env.SURREAL_PASSWORD,
	},
})

export async function getDb() {
	return surreal;
}

