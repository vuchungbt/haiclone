use haivl;
CREATE TABLE `roles`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(20) NOT NULL,
  code VARCHAR(20) NOT NULL,
  createddate TIMESTAMP NULL,
  modifiedby VARCHAR(255) NULL
);
CREATE TABLE `users` (
  id bigint NOT NULL PRIMARY KEY auto_increment,
  fbID VARCHAR(25) NOT NULL,
  ggID VARCHAR(25) NOT NULL,
  name VARCHAR(100) NULL,
  tel VARCHAR(12) NULL,
  status int NOT NULL,
  roleid bigint NOT NULL,
  CONSTRAINT pk_user_role FOREIGN KEY (roleid) REFERENCES roles(id),
  createddate TIMESTAMP NULL,
  modifieddate TIMESTAMP NULL,
  createdby VARCHAR(255) NULL,
  modifiedby VARCHAR(255) NULL,
  type VARCHAR(60) NULL,
  title VARCHAR(255) NULL,
  thumbnail VARCHAR(255) NULL,
  description VARCHAR(255) NULL,
  lastOnline TIMESTAMP NULL,
  pagePhoto VARCHAR(255) NULL,
  avatar VARCHAR(255) NULL,
  email VARCHAR(100) NULL
);
CREATE TABLE `posts`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  createddate TIMESTAMP NULL,
    modifieddate TIMESTAMP NULL,
    createdby VARCHAR(255) NULL,
    modifiedby VARCHAR(255) NULL,
    type VARCHAR(60) NULL,
    name VARCHAR(60) NULL,
    thumbnail VARCHAR(255) NULL,
    source VARCHAR(255) NULL,
    refer VARCHAR(255) NULL,
    title VARCHAR(255) NULL,
    description TEXT NULL,
    shortdescription TEXT NULL,
    content TEXT NULL,
    status int NOT NULL,
);