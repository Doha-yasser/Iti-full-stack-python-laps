-- 1
select d.dept_no , d.dept_name , count(d.dept_no)
from departments d
join employees e on d.dept_no = e.dept_no
group by d.dept_no
having count(d.dept_no) > 200


-- 2..... no history greater than 3
select de.emp_no, count(*) as history_count
from dept_emp de
group by de.emp_no
-- having count(*) > 3;


-- 3
select max(salary) , d.dept_name from employees e
join dept_emp de on de.dept_no = e.dept_no
join departments d on d.dept_no = e.dept_no
group by d.dept_name


-- 4
select d.dept_no , dept_name ,sum(e.salary) as total_salary
from departments d
join employees e
on d.dept_no = e.dept_no  
group by d.dept_no
having sum(salary) > 1000000 


-- 5
select e.* from employees e
join departments d
on d.dept_no = e.dept_no
where d.dept_name = 'Finance'
order by salary desc
limit 5


-- 6
select c.* from courses c
left join students_course s
on s.course_no = c.course_no
where s.course_no is Null


-- 7
select sum(grade) , student_name 
from students , students_course
group by student_name



-- 8
select d.* , avg(salary) from departments d
join employees e
on d.dept_no = e.dept_no
group by d.dept_no
having avg(salary) < 75000


-- 9   .... no student gets more than 300 
select sc.student_no,s.student_name, sum(c.course_duration) as total_duration
from students_course sc 
join students s on sc.student_no = s.student_no 
join courses c on c.course_no = sc.course_no
group by sc.student_no ,  s.student_name
-- having(sum(c.course_duration) > 300)



-- 10
(select max(salary) as max_salary from employees e)
union 
(select max(salary) from employees  
where  (salary) < (select max(salary) from employees))



-- 11
select concat(first_name , ' ' , last_name) as full_name , d.dept_name
from employees e join departments d
on d.dept_no = e.dept_no



-- 12
select  d.dept_name , concat(first_name , ' ' , last_name) as full_name
from departments d 
left join employees e
on d.dept_no = e.dept_no




-- 13
select s.student_name , sc.grade , c.course_name
from students s
join students_course sc on s.student_no = sc.student_no
join courses c on c.course_no = sc.course_no
 


-- 14
select concat(e.first_name , ' ' , e.last_name) as employee_name,
concat(mgr.first_name , ' ' , mgr.last_name) as manager_name , mgr.*
from employees e
join dept_emp de on e.emp_no = de.emp_no
join departments d on de.dept_no = d.dept_no
join dept_manager dm on d.dept_no = dm.dept_no
join employees mgr on dm.emp_no = mgr.emp_no
where e.first_name Ilike 'b%'



-- 15
select * from employees e
join salaries s on s.emp_no = e.emp_no
join departments d on d.dept_no = e.dept_no