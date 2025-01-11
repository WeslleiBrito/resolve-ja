CREATE TABLE `config` (
	`name` text NOT NULL,
	`email` text NOT NULL,
	`idUser` text NOT NULL,
	`photo` text,
	`token` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `config_email_unique` ON `config` (`email`);