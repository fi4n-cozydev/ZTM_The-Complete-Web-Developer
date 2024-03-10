# Creating tables (Many data types)
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, weight REAL);

# Creating tables (Using primary keys)
CREATE TABLE customers (id INTEGER PRIMARY KEY, age INTEGER);

# Specifying "DEFAULT values" in CREATE TABLE
CREATE TABLE courses(
    id INTEGER PRIMARY KEY,
    name TEXT,
    prereqs TEXT DEFAULT "None",
    num_hours INTEGER DEFAULT 15
);

# CREATE TABLE with foreign key reference
CREATE TABLE artists (
  id    INTEGER PRIMARY KEY, 
  name  TEXT
);

CREATE TABLE tracks (
  traid INTEGER, 
  title TEXT, 
  artist INTEGER,
  FOREIGN KEY(artist) REFERENCES artists(id)
);