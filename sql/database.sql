use haivl;
CREATE TABLE `roles`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(20) NOT NULL,
  code VARCHAR(20) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by VARCHAR(255) NULL
);
CREATE TABLE `users` (
  id bigint NOT NULL PRIMARY KEY auto_increment,
  fbID VARCHAR(25) NULL,
  ggID VARCHAR(25) NULL,
  name VARCHAR(100) NULL,
  tel VARCHAR(12) NULL,
  status int NOT NULL DEFAULT 0,
  roleid bigint NOT NULL,
  CONSTRAINT pk_user_role FOREIGN KEY (roleid) REFERENCES roles(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(255) NULL,
  updated_by VARCHAR(255) NULL,
  type VARCHAR(60) NULL,
  title VARCHAR(255) NULL,
  thumbnail VARCHAR(255) NULL,
  description VARCHAR(255) NULL,
  last_online TIMESTAMP NULL,
  page_photo VARCHAR(255) NULL,
  avatar VARCHAR(255) NULL,
  email VARCHAR(100) NULL
);
CREATE TABLE `posts`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(255) NULL,
  updated_by VARCHAR(255) NULL,
  type VARCHAR(60) NULL,
  name VARCHAR(60) NULL,
  thumbnail VARCHAR(255) NULL,
  source VARCHAR(255) NULL,
  refer VARCHAR(255) NULL,
  title VARCHAR(255) NULL,
  description TEXT NULL,
  short_description TEXT NULL,
  content TEXT NULL,
  status int NOT NULL DEFAULT 0,
  auth_id bigint NOT NULL,
  verified_date TIMESTAMP NULL,
  publish_date TIMESTAMP NULL,
  CONSTRAINT pk_post_user FOREIGN KEY (auth_id) REFERENCES users(id)
);
CREATE TABLE `comments`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(255) NULL,
  updated_by VARCHAR(255) NULL,
  type VARCHAR(60) NULL,
  name VARCHAR(60) NULL,
  thumbnail VARCHAR(255) NULL,
  title VARCHAR(255) NULL,
  description TEXT NULL,
  content TEXT NULL,
  status int NOT NULL DEFAULT 0,
  `level` int NOT NULL DEFAULT 0,
  for_post bigint NOT NULL,
  CONSTRAINT pk_comment_post FOREIGN KEY (for_post) REFERENCES posts(id),
  parent_comment_id bigint NULL
);
CREATE TABLE `tabs`(
  id bigint NOT NULL PRIMARY KEY auto_increment,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(255) NULL,
  updated_by VARCHAR(255) NULL,
  type VARCHAR(60) NULL,
  name VARCHAR(60) NULL,
  description VARCHAR(255) NULL,
  status int NOT NULL DEFAULT 0,
  is_trend int NOT NULL DEFAULT 0
);
CREATE TABLE `post_has_tab`(
    post_id bigint NOT NULL,
    CONSTRAINT pk_post_id FOREIGN KEY (post_id) REFERENCES posts(id),
    tab_id bigint NOT NULL,
    CONSTRAINT pk_tab_id FOREIGN KEY (tab_id) REFERENCES tabs(id),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status int NOT NULL DEFAULT 0
);
CREATE TABLE `post_has_votes`(
    post_id bigint NOT NULL,
    CONSTRAINT pk_post_id FOREIGN KEY (post_id) REFERENCES posts(id),
    user_id bigint NOT NULL,
    CONSTRAINT pk_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    vote int NOT NULL DEFAULT 0
);