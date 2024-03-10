# ROUND and other core functions
SELECT LOWER(name) AS name,
    ROUND(weight) AS rounded_weight,
    LOWER(TRIM(important_functions, ".")) AS desc
    FROM organs WHERE weight > 1
;

# Aggregate functions
SELECT MAX(age) FROM customers;

SELECT MAX(price) as most_dollars_paid FROM paintings;      //What's the most expensive price for a painting?

SELECT AVG(year) FROM paintings;                            //What's the average year these were painted?

SELECT SUM(price) AS total_dollars_paid FROM paintings;     //How much money was paid for these paintings total?

SELECT COUNT(*) AS greater_than_2mil                        //How many cost more than 2 million?
    FROM paintings WHERE price > 200000000                  
;

SELECT COUNT(DISTINCT year) AS years_represented            //How many unique years are there?
    FROM paintings
;

# Grouping data
SELECT gender, COUNT(*) FROM students GROUP BY gender;
SELECT country, COUNT(*) FROM bridges GROUP BY country;  
SELECT country, SUM(length) FROM bridges GROUP BY country; 