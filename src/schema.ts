import { objectType, stringArg } from 'nexus';

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.linkedAptitude();
  }
});

export const MorphTrait = objectType({
  name: 'MorphTrait',
  definition(t) {
    t.model.id();
    t.model.name();
  }
});

export const Morph = objectType({
  name: 'Morph',
  definition(t) {
    t.model.id();
    t.model.cost();
    t.model.avail();
    t.model.wt();
    t.model.dur();
    t.model.dr();
    t.model.insight();
    t.model.moxie();
    t.model.vigor();
    t.model.flex();
    t.model.movementRate();
    t.model.ware();
    t.model.type();
    t.model.notes();
    t.model.traits();
  }
});

export const Ware = objectType({
  name: 'Ware',
  definition(t) {
    t.model.id();
    t.model.name();
  }
});

export const Ego = objectType({
  name: 'Ego',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.cog();
    t.model.int();
    t.model.ref();
    t.model.sav();
    t.model.som();
    t.model.wil();
    t.model.skills();
  }
});

export const NonPlayerCharacter = objectType({
  name: 'NonPlayerCharacter',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.threatPool();
    t.model.cog();
    t.model.int();
    t.model.ref();
    t.model.sav();
    t.model.som();
    t.model.wil();
    t.model.skills();
  }
});

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.ware();
    t.crud.ego();
    t.crud.nonplayercharacter();
    t.crud.skill();
    t.crud.morph();

    t.crud.wares();
    t.crud.egos();
    t.crud.nonplayercharacters();
    t.crud.skills();
    t.crud.morphs();
  }
});

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneWare();
    t.crud.createOneEgo();
    t.crud.createOneSkill();
    t.crud.createOneMorph();
    t.crud.createOneNonPlayerCharacter();

    t.field('createNPC', {
      type: 'NonPlayerCharacter',
      args: {
        name: stringArg({ nullable: false }),
        morph: stringArg({ nullable: false })
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail }
            }
          }
        });
      }
    });

    t.crud.updateOneWare();
    t.crud.updateOneEgo();
    t.crud.updateOneSkill();
    t.crud.updateOneMorph();
    t.crud.updateOneNonPlayerCharacter();

    t.crud.upsertOneWare();
    t.crud.upsertOneEgo();
    t.crud.upsertOneSkill();
    t.crud.upsertOneMorph();
    t.crud.upsertOneNonPlayerCharacter();

    t.crud.deleteOneWare();
    t.crud.deleteOneEgo();
    t.crud.deleteOneSkill();
    t.crud.deleteOneMorph();
    t.crud.deleteOneNonPlayerCharacter();
  }
});
