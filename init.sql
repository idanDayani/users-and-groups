-- Create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create groups table
CREATE TABLE `groups` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status ENUM('empty', 'notEmpty') DEFAULT 'empty',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_groups table to establish many-to-many relationship
CREATE TABLE user_groups (
  user_id INT,
  group_id INT,
  PRIMARY KEY (user_id, group_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (group_id) REFERENCES `groups`(id) ON DELETE CASCADE
);

-- Insert initial data into users table
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane@example.com');

-- Insert initial data into groups table
INSERT INTO `groups` (name, status) VALUES ('Admins', 'notEmpty');
INSERT INTO `groups` (name, status) VALUES ('Users', 'notEmpty');

-- Insert initial data into user_groups table
INSERT INTO user_groups (user_id, group_id) VALUES (1, 1);
INSERT INTO user_groups (user_id, group_id) VALUES (2, 2);
