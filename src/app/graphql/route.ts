import { ApolloServer } from "@apollo/server";
import assert from "assert";
import { NextResponse } from "next/server";
import { resolvers } from "./resolvers";
import { typeDefs } from "../../generated/graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const res = await server.executeOperation({ query: json.query });
  assert(res.body.kind === "single");
  return NextResponse.json(res.body.singleResult);
}
