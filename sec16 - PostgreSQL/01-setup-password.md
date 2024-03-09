# Windows users
- open terminal
- type "psql -U postgres"        // postgres = userName
- Enter your password when prompted.
- type password "1234"           //this is comes from were you setup on installation
- - log will shown "postgres=# "

# go to specific DB that were created
- psql -U postgres dbName;
- log will shown "dbName=# "

# Create database
- CREATE DATABASE testdb;

# REMOVE database
- DROP DATABASE dbName;

# Create a table
- CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));

# to display "Table"
- \dt
  
# INSERT
- INSERT INTO users (name, email) VALUES ('john', 'john@123.com');

# SELECT ALL users
SELECT * FROM users;