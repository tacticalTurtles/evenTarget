DROP DATABASE IF EXISTS evenTarget;

CREATE DATABASE evenTarget;

USE evenTarget;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  location TEXT NOT NULL,
  description TEXT,
  url TEXT,
  image TEXT,
)

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
