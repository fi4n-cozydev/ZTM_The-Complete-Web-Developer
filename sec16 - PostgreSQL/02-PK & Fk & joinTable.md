CREATE TABLE login (
    id serial NOT NULL PRIMARY KEY,
    secret VARCHAR(100) NOT NULL,
    name TEXT UNIQUE NOT NULL
);

- NOT NULL = this property can't be an EMPTY.
- PRIMARY KEY (PK) = Auto Add Key -> refer to the others table (always unique of each row)
- VARCHAR(size) = number of characters to store (Variable-length string)
- UNIQUE = can't insert with existing name in table

-------------------------------------------------------------------------------
INSERT INTO login (secret , name) VALUES ('abc', 'Tom');

-------------------------------------------------------------------------------
- Foreign Key (FK) = communicate by PK

# Join table by PK and FK
- (PK)login.name = (FK)users.name
SELECT * FROM users JOIN login ON users.name = login.name;  //table.column