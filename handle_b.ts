import { Context } from "npm:hono";
import { Env } from "./netlify/edge-functions/index.ts";

export function handle_b(c: Context<Env>) {
  return c.text("handle_b");
}