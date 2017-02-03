DROP DATABASE IF EXISTS evenTarget;

CREATE DATABASE evenTarget;

USE evenTarget;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  location TEXT,
  description TEXT,
  url TEXT,
  image TEXT,
  searchapi VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment TEXT NOT NULL,
  eventid INT
);

-- ALTER TABLE comments ADD CONSTRAINT FK_comments FOREIGN KEY (eventid) REFERENCES events(id);
-- ALTER TABLE users ADD CONSTRAINT FK_users FOREIGN KEY (eventid) REFERENCES events(id);
-- ALTER TABLE events ADD CONSTRAINT FK_events FOREIGN KEY (userid) REFERENCES users(id);


CREATE TABLE comfort {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comfort FLOAT[2, 1],
  comfortNumber INT,
  eventId INT
}
-- location: 944 Market Street San Francisco, CA 94121
-- Login: mysql -u root -p
-- Start: mysql.server.start
-- End: mysql.server.stop
-- Import Schema: mysql -u root < config/schema.sql (from server dir)
