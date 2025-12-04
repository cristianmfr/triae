import type { WorkspaceRole } from '../enums/workspace-role'

export interface WorkspaceMember {
  id: string
  role: WorkspaceRole
  active: boolean
  userId: string
  workspaceId: string
  createdAt: Date
  updatedAt: Date
}
