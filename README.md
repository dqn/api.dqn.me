# api.dqn.me

👻 My profile GraphQL server

## Schema

See [schema.graphql](https://github.com/dqn/api.dqn.me/blob/main/src/schema.graphql)

## Usage

```bash
$ curl -X POST https://api.dqn.me/graphql -H 'content-type: application/json' -d '{"query":"query MyProfile { profile { name } }"}'
# {"data":{"profile":{"name":"dqn"}}}
```
