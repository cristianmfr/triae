-- CreateIndex
CREATE INDEX "workspaces_members_user_id_workspace_id_idx" ON "workspaces_members"("user_id", "workspace_id");
