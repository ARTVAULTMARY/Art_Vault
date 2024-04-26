-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "images" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_name_key" ON "Gallery"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_title_key" ON "Gallery"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_user_id_key" ON "Gallery"("user_id");
