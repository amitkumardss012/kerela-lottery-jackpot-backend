-- CreateTable
CREATE TABLE `winner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ticket_number` VARCHAR(191) NOT NULL,
    `prize_amount` VARCHAR(191) NOT NULL,
    `winner_rank` VARCHAR(191) NULL,
    `lottery_id` INTEGER NOT NULL,
    `claimed` BOOLEAN NOT NULL DEFAULT false,

    INDEX `winner_ticket_number_idx`(`ticket_number`),
    INDEX `winner_phone_idx`(`phone`),
    INDEX `winner_email_idx`(`email`),
    INDEX `winner_lottery_id_fkey`(`lottery_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'sub_admin') NOT NULL DEFAULT 'sub_admin',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    INDEX `Admin_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buyer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `lottery_id` INTEGER NULL,
    `ticket_package_id` INTEGER NULL,
    `transaction_id` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `transaction_status` ENUM('not_verified', 'verified', 'failed', 'success', 'refunded', 'rejected') NOT NULL DEFAULT 'not_verified',
    `is_read` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Buyer_transaction_id_key`(`transaction_id`),
    INDEX `Buyer_email_idx`(`email`),
    INDEX `Buyer_lottery_id_fkey`(`lottery_id`),
    INDEX `Buyer_phone_idx`(`phone`),
    INDEX `Buyer_ticket_package_id_fkey`(`ticket_package_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enquiry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Enquiry_createdAt_idx`(`createdAt`),
    INDEX `Enquiry_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lottery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `result_time` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `result_date` VARCHAR(191) NOT NULL,

    INDEX `Lottery_result_time_idx`(`result_time`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lottery_id` INTEGER NOT NULL,
    `ticket_package_id` INTEGER NOT NULL,
    `ticket_number` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,
    `buyer_id` INTEGER NOT NULL,

    INDEX `Ticket_buyer_id_fkey`(`buyer_id`),
    INDEX `Ticket_lottery_id_idx`(`lottery_id`),
    INDEX `Ticket_ticket_package_id_fkey`(`ticket_package_id`),
    UNIQUE INDEX `Ticket_lottery_id_ticket_number_transaction_id_key`(`lottery_id`, `ticket_number`, `transaction_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticketpackage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `number_of_tickets` INTEGER NOT NULL,
    `paid_tickets` INTEGER NOT NULL,
    `free_tickets` INTEGER NULL,
    `price` DOUBLE NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QRCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NULL,
    `image` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `winner` ADD CONSTRAINT `winner_lottery_id_fkey` FOREIGN KEY (`lottery_id`) REFERENCES `lottery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `buyer` ADD CONSTRAINT `Buyer_lottery_id_fkey` FOREIGN KEY (`lottery_id`) REFERENCES `lottery`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `buyer` ADD CONSTRAINT `Buyer_ticket_package_id_fkey` FOREIGN KEY (`ticket_package_id`) REFERENCES `ticketpackage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `Ticket_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `buyer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `Ticket_lottery_id_fkey` FOREIGN KEY (`lottery_id`) REFERENCES `lottery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `Ticket_ticket_package_id_fkey` FOREIGN KEY (`ticket_package_id`) REFERENCES `ticketpackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
