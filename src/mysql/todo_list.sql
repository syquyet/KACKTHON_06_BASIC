-- Tạo schema todo_list
--
 CREATE SCHEMA `todo_list` ;
--
-- tạo table todos
CREATE TABLE `todo_list`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
 `status` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`id`));