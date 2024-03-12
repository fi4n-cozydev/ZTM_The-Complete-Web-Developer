# Outer join
SELECT customers.name, orders.item 
    FROM customers 
    LEFT OUTER JOIN orders 
    ON customers.id = orders.customer_id
;

# Show students next to their teachers
SELECT students.name, teachers.name AS teacher_name
    FROM students
    JOIN teachers
    ON students.teacher_id = teachers.id
;

# Show students next to their teachers, even if they don't have a teacher assigned
SELECT students.name, teachers.name AS teacher_name
    FROM students
    LEFT OUTER JOIN teachers
    ON students.teacher_id = teachers.id
;