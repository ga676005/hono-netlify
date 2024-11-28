import type { Context } from "npm:@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "world" });
};
