/*
  Warnings:

  - A unique constraint covering the columns `[user_id,workspace_id]` on the table `workspaces_members` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "workspaces_members_user_id_workspace_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "workspaces_members_user_id_workspace_id_key" ON "workspaces_members"("user_id", "workspace_id");
