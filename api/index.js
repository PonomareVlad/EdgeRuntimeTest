import {Queue, MemoryDriver} from "docmq";

const queue = new Queue(new MemoryDriver("default"), "docmq");

export default () => Response.json(queue);

export const config = {runtime: "edge"};
