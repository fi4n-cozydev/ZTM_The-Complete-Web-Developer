# Windows users
- open terminal
- type "psql -U postgres"        // postgres = userName
- Enter your password when prompted.
- type password "1234"           //this is comes from were you setup on installation
- log will shown "postgres=# "

# go to specific DB that were created
- psql -U postgres dbName;
- log will shown "dbName=# "

# Create database
- CREATE DATABASE testdb;

# REMOVE database
- DROP DATABASE dbName;

# To quit PostgreSQL (back to commandLine)
- \q

# to Exit while in any progress
- q

# to display List of database
- \l

# To clear console history
- \! cls <OR> /! clear\

# To see other command "HELP"
- \?

# Create a table
- CREATE TABLE table_name_ (column_1 datatype, column_2 datatype);
- CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));
- CREATE TABLE users (name text, age smallint, birthday date);

# to display "Table"
- \dt or \d
  
# INSERT
- INSERT INTO table_name (column_1, column_2,...n) VALUES (value_1, value2);
- INSERT INTO users (name, age, birthday, score) VALUES ('Maru', '16', '2005-01-01', '99');

# SELECT ALL users (Querying)
- SELECT * FROM users;
- SELECT name FROM users;
- SELECT name, age, birthday FROM users;

# Add new Column into existing tables
- ALTER TABLE table_name ADD column datatype;
- ALTER TABLE users ADD score smallint;

# UPDATE table
- SET some_column = some_value WHERE some_column = some_value;
- UPDATE users SET score = 50 WHERE name='Tom';
- UPDATE users SET score = 100 WHERE name='Jenny' OR name='Jack';

# Select with condition
- SELECT * FROM users WHERE name LIKE 'J%';   //select item start with 'A...' in column name from table users
- SELECT * FROM users WHERE name LIKE '%m';   //end with letter '...m'

# Select with sort
- SELECT * FROM users ORDER BY score ASC;     //ASC  = Low to Hight
- SELECT * FROM users ORDER BY score DESC;    //DESC = Hight to Low

# SQL Function
- SELECT AVG(score) FROM users;     // AVG(column_name) = Average %
- SELECT SUM(age) FROM users;       // SUM = Summary
- Select COUNT(name) FROM users;     // COUNT something like how many user we have in database