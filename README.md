# api.dqn.me

👻 My profile GraphQL server

## Schema

See [typeDefs.ts](https://github.com/dqn/api.dqn.me/blob/main/src/app/graphql/typeDefs.ts)

## Usage

```bash
$ curl -X POST https://api.dqn.me/graphql -H 'content-type: application/json' -d '{"query":"query MyProfile { profile { name } }"}'
# {"data":{"profile":{"name":"dqn"}}}
```
