drop table student;
create table student(
 id varchar(10) primary key,
 first_name varchar(32) not null,
 last_name varchar(32) not null,
 dob date not null,
 sin varchar(12),
 gender enum('M', 'F', 'O'),
 address_1 varchar(128),
 address_2 varchar(128),
 postal_code varchar(10),
 city varchar(32) not null,
 state varchar(32),
 country varchar(32) not null,
 phone_no varchar(12),
 email varchar(128),
 status boolean
);

drop table course;
create table course(
 id varchar(10) primary key,
 name varchar(32) not null,
 credit integer not null,
 status boolean
);

insert into student values(
 'S001', 
 'first_name', 
 'last_name', 
 '1986-05-01', 
 '99993222', 
 'M', 
 '1455 De Maisonneuve O', 
 'Downtown Montreal', 
 'H3G1M8',
 'Montreal', 
 'PQ', 
 'CA', 
 '514842424',
 'abc@concordia.ca', 
 TRUE
);

insert into course values('ENG101', 'English for Beginners', 4, TRUE);
insert into course values('FRE102', 'French for Beginners', 4, TRUE);

/*
drop table country;
create table country(
code char(2) primary key,
description varchar(128)
);
drop table employee;
create table employee(
type enum('S', 'T'),
);

*/

