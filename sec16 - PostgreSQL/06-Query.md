# Select everything
SELECT * FROM customers;

# Filter with condition
SELECT * FROM customers WHERE age > 21;

# Filter with multiple conditions
SELECT * FROM customers WHERE age < 21 AND state = "NY";

# Filter with IN
SELECT * FROM customers WHERE plan IN ("free", "basic");

# Select specific columns
SELECT name, age FROM customers;

# Order results : DESC = Hight to Low : ASC = Low to Hight
SELECT * FROM customers WHERE age > 21 ORDER BY age DESC;

# Transform with CASE
SELECT name, CASE WHEN age > 18 THEN "adult" ELSE "minor" END "type" FROM customers;

# Filtering with LIKE
SELECT  * FROM dresses WHERE description LIKE "%floral%";   //Which ones have floral patterns?
SELECT  * FROM dresses WHERE description LIKE "%blue%";     //Which ones are blue?

SELECT * FROM users WHERE name LIKE 'J%';                   //select item start with 'A...' in column name from table users
SELECT * FROM users WHERE name LIKE '%m';                   //end with letter '...m'

# Using SELECT with LIMIT
SELECT * FROM top_programs ORDER BY votes DESC LIMIT 3;     //But let's just show the top 3!