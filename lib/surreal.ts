import Surreal from 'surrealdb.js';

const surreal = new Surreal();

surreal.connect(process.env.SURREAL_URL as string, {
	namespace: process.env.SURREAL_NAMESPACE ?? '',
	database: process.env.SURREAL_DATABASE ?? '',
	auth: {
		namespace: process.env.SURREAL_NAMESPACE ?? '',
		database: process.env.SURREAL_DATABASE ?? '',
		scope: process.env.SURREAL_SCOPE ?? '',
		username: process.env.SURREAL_USERNAME ?? '',
		password: process.env.SURREAL_PASSWORD ?? '',
	},
})

export async function getDb() {
	return surreal;
}

