import { ApolloServer } from "@apollo/server";
import assert from "assert";
import { NextResponse } from "next/server";
import {
  Company,
  Link,
  QueryResolvers,
  Resolvers,
} from "../../generated/graphql";
import { readFileSync } from "fs";

const profile: QueryResolvers["profile"] = () => {
  const company: Company = {
    id: "pamxy",
    name: "pamxy, Inc.",
    businesses: ["IP", "marketing", "commerce"],
    website: "https://pamxy.co.jp",
  };

  const links: Link[] = [
    {
      id: "homepage",
      name: "Homepage",
      url: "https://dqn.me",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/dqn",
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://github.com/dqn",
    },
    {
      id: "zenn",
      name: "Zenn",
      url: "https://zenn.dev/dqn",
    },
  ];

  return {
    id: "dqn",
    name: "dqn",
    pronouns: "he/him",
    birthday: "1998-10-06",
    email: "dqn270@gmail.com",
    company,
    location: "Tokyo, Japan",
    loves: ["Web", "TypeScript", "React / Next.js"],
    links,
  };
};

const resolvers: Resolvers = {
  Query: {
    profile,
  },
};

const server = new ApolloServer({
  typeDefs: readFileSync("./src/schema.graphql", "utf8"),
  resolvers,
});

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const res = await server.executeOperation({ query: json.query });
  assert(res.body.kind === "single");
  return NextResponse.json(res.body.singleResult);
}
