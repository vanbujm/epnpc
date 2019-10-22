import { nexusPrismaPlugin } from 'nexus-prisma';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Photon } from '@generated/photon';
import { ApolloServer } from 'apollo-server';
import { makeSchema } from 'nexus';
import { join } from 'path';
import {
  Query,
  Mutation,
  Ware,
  NonPlayerCharacter,
  Skill,
  Morph,
  Ego,
  MorphTrait
} from './schema';

const photon = new Photon();

const allTypes = [
  Query,
  Mutation,
  Ware,
  NonPlayerCharacter,
  Skill,
  Morph,
  Ego,
  MorphTrait
];

const nexusPrismaTypes = nexusPrismaPlugin({
  types: allTypes
});

const schema = makeSchema({
  types: [allTypes, nexusPrismaTypes],
  outputs: {
    schema: join(__dirname, '/schema.graphql')
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon'
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx'
      }
    ],
    contextType: 'ctx.Context'
  }
});

const server = new ApolloServer({
  schema,
  context: { photon }
});

server.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#5-using-the-graphql-api`
  )
);
