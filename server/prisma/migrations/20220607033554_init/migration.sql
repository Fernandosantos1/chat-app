-- CreateTable
CREATE TABLE "tb_user" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "description" TEXT,
    "date_criation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "tb_chat" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "send_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserOnChat" (
    "fk_user" TEXT NOT NULL,
    "fk_chat" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("fk_user", "fk_chat"),
    CONSTRAINT "UserOnChat_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "tb_user" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnChat_fk_chat_fkey" FOREIGN KEY ("fk_chat") REFERENCES "tb_chat" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contact" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "date_criation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserOnContact" (
    "fk_user" TEXT NOT NULL,
    "fk_contact" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("fk_user", "fk_contact"),
    CONSTRAINT "UserOnContact_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "tb_user" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnContact_fk_contact_fkey" FOREIGN KEY ("fk_contact") REFERENCES "Contact" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");
