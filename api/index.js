import * as Realm from "realm-web";

const app = new Realm.App({id: "APP_ID"});
const mongo = app.currentUser.mongoClient("DATA_SOURCE_NAME");
const collection = mongo.db("DATABASE_NAME").collection("COLLECTION_NAME");

export default () => Response.json(collection);

export const config = {runtime: "edge"};
