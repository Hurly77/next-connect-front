const { MongoClient } = require('mongodb');
const uri = process.env.DB;

export const connectDB = async () => {
	const client = await new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client.connect();
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
