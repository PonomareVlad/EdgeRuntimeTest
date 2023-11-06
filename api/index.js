import * as Realm from "realm-web";

export default async () => {

    const app = new Realm.App({id: "APP_ID"});
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongo = user.mongoClient("DATA_SOURCE_NAME");
    const collection = mongo.db("DATABASE_NAME").collection("COLLECTION_NAME");

    return Response.json(collection);

}

export const config = {runtime: "edge"};
