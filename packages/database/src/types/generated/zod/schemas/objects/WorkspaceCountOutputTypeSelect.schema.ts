import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceCountOutputTypeCountWorkspaceMembersArgsObjectSchema as WorkspaceCountOutputTypeCountWorkspaceMembersArgsObjectSchema } from './WorkspaceCountOutputTypeCountWorkspaceMembersArgs.schema'

const makeSchema = () => z.object({
  workspaceMembers: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeCountWorkspaceMembersArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WorkspaceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCountOutputTypeSelect>;
export const WorkspaceCountOutputTypeSelectObjectZodSchema = makeSchema();
