import { Context, Hono } from "jsr:@hono/hono";
import { handle } from "jsr:@hono/hono/netlify";
import type { Context as NetlifyContext } from "https://edge.netlify.com/";
import { handle_b } from "../../handle_b.ts";

export type Env = {
  Bindings: {
    context: NetlifyContext;
  };
};

const app = new Hono<Env>();

app.get("/", (c) => {
  const message = Deno.env.get("MESSAGE") || "Default message";
  return c.text(message);
});

app.get("/a", handle_a);
function handle_a(c: Context<Env>) {
  return c.json(c.env.context);
}

app.get("/b", handle_b);

export default handle(app);
