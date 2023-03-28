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

INSERT INTO Accounts (username, password, accountCreated, loggedIn)
VALUES
  ('user1', 'pass1', true, false),
  ('user2', 'pass2', true, false),
  ('user3', 'pass3', false, true);

INSERT INTO Location (zip, lat, lng, city, state_id, state_name, account)
VALUES
  (10001, '40.7505', '-73.9964', 'New York', 'NY', 'New York', 1),
  (90210, '34.103', '-118.410', 'Beverly Hills', 'CA', 'California', 2),
  (60610, '41.8996', '-87.6268', 'Chicago', 'IL', 'Illinois', 3);