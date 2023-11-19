import {Queue} from "docmq";
import {MongoClient} from "mongodb";
import {MongoDriver} from "docmq/driver/mongo";

export const {
    DATA_API_URL: url,
    DATA_API_KEY: key,
    DATA_SOURCE_NAME: serviceName,
} = process.env;

const mongo = new MongoClient({url, key, serviceName});
const driver = new MongoDriver(mongo, {schema: "DocMQ", table: "queue"});
const queue = new Queue(driver, "docmq");

queue.process(async (job, api) => await api.ack());

export default async () => {
    await queue.enqueue({ref: "test", payload: {success: true}});
    return Response.json(queue);
};

export const config = {runtime: "edge"};
