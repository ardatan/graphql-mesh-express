import { insertChangesResolver } from './mutationResolvers/insertChangesResolver';
import { userRightsResolver } from './queryResolvers/userRights';
import { additionalManagerInfoResolver } from './typeResolvers/additionalManagerInfo';
import { managerResolver } from './typeResolvers/manager';

/**
 *  If you would like to update types use
 * `// @ts-nocheck` on top of the file
 * to ignore failing types and build a working schema
 * out of which we can generate the new types
 * by running the command `yarn run graphql:generate:types`
 */
const additionalResolvers = {
  Mutation: {
    insertChanges: insertChangesResolver,
  },
  Query: {
    userRights: userRightsResolver,
  },
  Manager: managerResolver,
  AdditionalManagerInfo: additionalManagerInfoResolver,
};

export { additionalResolvers };
