import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserCountOutputTypeCountWorkspaceMembersArgsObjectSchema as UserCountOutputTypeCountWorkspaceMembersArgsObjectSchema } from './UserCountOutputTypeCountWorkspaceMembersArgs.schema'

const makeSchema = () => z.object({
  workspaceMembers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountWorkspaceMembersArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
