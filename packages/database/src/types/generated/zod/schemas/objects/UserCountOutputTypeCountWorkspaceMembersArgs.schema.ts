import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './WorkspaceMemberWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountWorkspaceMembersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountWorkspaceMembersArgsObjectZodSchema = makeSchema();
