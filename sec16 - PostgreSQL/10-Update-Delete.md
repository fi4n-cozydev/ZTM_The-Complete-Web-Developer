CREATE TABLE inventory (
    id INTEGER PRIMARY KEY,
    item TEXT,
    price REAL
);

INSERT INTO inventory VALUES (1, "Santa Hat", 20.00);
INSERT INTO inventory VALUES (2, "Reindeer nose", 5.00);
INSERT INTO inventory VALUES (3, "Elf hat", 10.00);
INSERT INTO inventory VALUES (4, "Witches hat", 30.00);

SELECT * FROM inventory;

# Updating data - It's sale time for Halloween merchandise!
UPDATE table_name SET property = value WHERE id(PK) = 73;

UPDATE inventory SET price = 20.00 WHERE id = 4;
SELECT * FROM inventory;

# Deleting data - Woo, it got sold!
DELETE FROM table_name WHERE id(PK) = 73;

DELETE FROM inventory WHERE id = 4;
SELECT * FROM inventory;