const { MongoClient } = require('mongodb');
const uri = process.env.API_URL;

export const connectDB = async () => {
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client;
};

export const insertDocument = async (
	client,
	collection,
	document,
) => {
	const db = client.db();
	const result = await db
		.collection(collection)
		.insertOne(document);
	return result;
};

export default connectDB;
