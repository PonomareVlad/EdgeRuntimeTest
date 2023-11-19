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

export default () => Response.json(queue);

export const config = {runtime: "edge"};
