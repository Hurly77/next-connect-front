const { MongoClient } = require('mongodb');
const uri = process.env.DB;
import { connectDB, insertDocument } from '@/helpers/db';

export const handler = async (req, res) => {
	if (req.method === 'POST') {
		let client;
		try {
			client = await new MongoClient(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
		} catch (err) {
			res
				.status(500)
				.json({ message: 'something went wrong' });
			console.log(err, req.body);
			return;
		}

		try {
			await client.connect();
			let result = await client
				.db()
				.collection('users')
				.insertOne(req.body);
			await client.close();
			return result;
		} catch (err) {
			res
				.status(500)
				.json({ message: 'inserting db failed' });
			console.log(err);
			return;
		}

		return data;
	}
};

export default handler;
