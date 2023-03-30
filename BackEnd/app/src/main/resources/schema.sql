CREATE TABLE Account (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  account_created BOOLEAN,
  logged_in BOOLEAN
);
CREATE TABLE Location (
  zip int PRIMARY KEY,
  lat VARCHAR(255),
  lng VARCHAR(255),
  city VARCHAR(255),
  state_id VARCHAR(255),
  state_name VARCHAR(255),
  accountid INT,
  FOREIGN KEY (accountid) REFERENCES Account(id)
);