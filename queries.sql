-- select * from employees
-- select * from COURSES

-- select first_name "First Name",last_name from employees
-- select first_name as first,last_name from employees
-- select first_name ,last_name ,salary ,salary +10000 as bonus from employees
-- select concat(first_name ,' ',last_name) as "Full Name"  from employees
-- select first_name,last_name,salary from employees where salary>70000
-- select first_name,last_name,salary from employees where gender ='M'

-- select first_name ,last_name ,salary from employees 
-- where salary < 60000 or salary > 120000

-- select first_name ,last_name ,salary from employees 
-- where salary  not between 60000 and 120000


-- select first_name ,dept_no from employees where dept_no =2 or dept_no =4
-- select first_name ,dept_no from employees where dept_no in(2,4,5)

-- select emp_no,salary from employees where salary is not null


-- select emp_no,first_name from employees where first_name like '__m%'

-- select emp_no,first_name,salary from employees 
-- where salary is not null order by salary ,emp_no
-- limit 5 offset 3


select first_name from employees 
where first_name like 'm%'




