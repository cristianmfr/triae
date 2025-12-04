import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './WorkspaceMemberWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberListRelationFilterObjectSchema: z.ZodType<Prisma.WorkspaceMemberListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberListRelationFilter>;
export const WorkspaceMemberListRelationFilterObjectZodSchema = makeSchema();
