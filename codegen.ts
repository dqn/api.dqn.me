import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schema.graphql",
  hooks: {
    afterAllFileWrite: "prettier --write",
  },
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        useTypeImports: true,
        enumsAsConst: true,
        immutableTypes: true,
        strictScalars: true,
      },
    },
  },
};

export default config;
