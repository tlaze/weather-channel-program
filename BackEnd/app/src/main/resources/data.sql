INSERT INTO Account (username, password, accountCreated, loggedIn)
VALUES
  ('user1', 'pass1', true, false),
  ('user2', 'pass2', true, false),
  ('user3', 'pass3', false, true);

INSERT INTO Location (zip, lat, lng, city, state_id, state_name, accountid)
VALUES
  (10001, '40.7505', '-73.9964', 'New York', 'NY', 'New York', 1),
  (75001, '32.7840', '-96.8088', 'Dallas', 'TX', 'Texas', 1),
  (94040, '37.3753', '-122.0830', 'Mountain View', 'CA', 'California', 2),
  (30305, '33.8324', '-84.3855', 'Atlanta', 'GA', 'Georgia', 3),
  (98101, '47.6116', '-122.3340', 'Seattle', 'WA', 'Washington', 1),
  (60611, '41.8953', '-87.6225', 'Chicago', 'IL', 'Illinois', 2),
  (33131, '25.7622', '-80.1903', 'Miami', 'FL', 'Florida', 3),
  (10025, '40.7984', '-73.9614', 'New York', 'NY', 'New York', 1),
  (90266, '33.8944', '-118.3994', 'Manhattan Beach', 'CA', 'California', 2),
  (78704, '30.2479', '-97.7712', 'Austin', 'TX', 'Texas', 3),
  (60654, '41.8903', '-87.6371', 'Chicago', 'IL', 'Illinois', 1),
  (02139, '42.3626', '-71.0843', 'Cambridge', 'MA', 'Massachusetts', 2),
  (30308, '33.7720', '-84.3851', 'Atlanta', 'GA', 'Georgia', 3),
  (10014, '40.7347', '-74.0059', 'New York', 'NY', 'New York', 1),
  (94110, '37.7503', '-122.4150', 'San Francisco', 'CA', 'California', 2),
  (98109, '47.6344', '-122.3474', 'Seattle', 'WA', 'Washington', 3),
  (90210, '34.103', '-118.410', 'Beverly Hills', 'CA', 'California', 2);