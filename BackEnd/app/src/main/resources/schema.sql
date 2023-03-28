CREATE TABLE Accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  accountCreated BOOLEAN,
  loggedIn BOOLEAN
);
CREATE TABLE Location (
  zip int PRIMARY KEY,
  lat VARCHAR(255),
  lng VARCHAR(255),
  city VARCHAR(255),
  state_id VARCHAR(255),
  state_name VARCHAR(255),
  account INT,
  FOREIGN KEY (account) REFERENCES Accounts(id)
);