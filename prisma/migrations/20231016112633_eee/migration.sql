-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `registered` DATETIME NOT NULL,
    `lastLogin` DATETIME NOT NULL,
    `intro` TINYTEXT NOT NULL,
    `profile` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `authorId` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `metaTitle` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `summary` TINYTEXT NOT NULL,
    `published` TINYINT NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `publishedAt` DATETIME NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_comment` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `published` TINYINT NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `publishedAt` DATETIME NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `metaTitle` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_tag` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `tagId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_meta` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `metaTitle` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_comment` ADD CONSTRAINT `post_comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_tag` ADD CONSTRAINT `post_tag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_tag` ADD CONSTRAINT `post_tag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_meta` ADD CONSTRAINT `post_meta_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
