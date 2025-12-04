import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WorkspaceWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceScalarRelationFilterObjectSchema: z.ZodType<Prisma.WorkspaceScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceScalarRelationFilter>;
export const WorkspaceScalarRelationFilterObjectZodSchema = makeSchema();
