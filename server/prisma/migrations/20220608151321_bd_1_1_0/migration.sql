/*
  Warnings:

  - Added the required column `is_who_added` to the `UserOnContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_who_sent` to the `UserOnChat` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserOnContact" (
    "fk_user" TEXT NOT NULL,
    "fk_contact" TEXT NOT NULL,
    "is_who_added" BOOLEAN NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("fk_user", "fk_contact"),
    CONSTRAINT "UserOnContact_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "tb_user" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnContact_fk_contact_fkey" FOREIGN KEY ("fk_contact") REFERENCES "Contact" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserOnContact" ("assignedAt", "fk_contact", "fk_user") SELECT "assignedAt", "fk_contact", "fk_user" FROM "UserOnContact";
DROP TABLE "UserOnContact";
ALTER TABLE "new_UserOnContact" RENAME TO "UserOnContact";
CREATE TABLE "new_UserOnChat" (
    "fk_user" TEXT NOT NULL,
    "fk_chat" TEXT NOT NULL,
    "is_who_sent" BOOLEAN NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("fk_user", "fk_chat"),
    CONSTRAINT "UserOnChat_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "tb_user" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnChat_fk_chat_fkey" FOREIGN KEY ("fk_chat") REFERENCES "tb_chat" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserOnChat" ("assignedAt", "fk_chat", "fk_user") SELECT "assignedAt", "fk_chat", "fk_user" FROM "UserOnChat";
DROP TABLE "UserOnChat";
ALTER TABLE "new_UserOnChat" RENAME TO "UserOnChat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
