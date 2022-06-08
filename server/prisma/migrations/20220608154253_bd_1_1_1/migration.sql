-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserOnChat" (
    "fk_user" TEXT NOT NULL,
    "fk_chat" TEXT NOT NULL,
    "is_who_sent" BOOLEAN NOT NULL DEFAULT false,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("fk_user", "fk_chat"),
    CONSTRAINT "UserOnChat_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "tb_user" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnChat_fk_chat_fkey" FOREIGN KEY ("fk_chat") REFERENCES "tb_chat" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserOnChat" ("assignedAt", "fk_chat", "fk_user", "is_who_sent") SELECT "assignedAt", "fk_chat", "fk_user", "is_who_sent" FROM "UserOnChat";
DROP TABLE "UserOnChat";
ALTER TABLE "new_UserOnChat" RENAME TO "UserOnChat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
