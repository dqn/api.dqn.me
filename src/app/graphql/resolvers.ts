import {
  Company,
  Link,
  QueryResolvers,
  Resolvers,
} from "../../generated/graphql";

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
      url: "https://twitter.com/dqn270",
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
    bio: "Software Engineer",
    avatarUrl: "https://avatars.githubusercontent.com/u/30195678",
    pronouns: "he/him",
    birthday: "1998-10-06",
    email: "dqn270@gmail.com",
    company,
    location: "Tokyo, Japan",
    loves: ["Web", "TypeScript", "React / Next.js"],
    links,
  };
};

export const resolvers: Resolvers = {
  Query: {
    profile,
  },
};
