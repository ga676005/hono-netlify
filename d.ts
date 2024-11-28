import { Hono } from "jsr:@hono/hono";
import { handle } from "jsr:@hono/hono/netlify";

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

Deno.serve(app.fetch);
export default handle(app);
