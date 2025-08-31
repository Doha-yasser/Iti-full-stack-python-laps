select first_name 
from employees 
where first_name 
ILIKE 'm%'


select * from employees 
where salary > 60000


select concat(first_name ,' ' , last_name) as full_name from employees


select student_no , grade   from students_course where grade > 70

select distinct salary from employees 
where salary is not null
order by salary Desc limit 2


select concat(first_name ,' ' , last_name) as full_name , 
salary*12 as annual_salary from employees


-- no resulty!!!
select concat(first_name ,' ' , last_name) as full_name , dept_no , salary
from employees where salary > 100000  and dept_no = '4'


select * from employees where gender = 'M'


--  no resulty!!!
select * from employees where salary is not null and bonus is null



select * from employees where first_name ILIKE '___F%'

--   no resulty!!!
select * from courses where course_duration > 70


select grade from students_course 
where course_no = '3' 
order by grade 
limit 1



select * from employees where dept_no = 1 or dept_no = 2