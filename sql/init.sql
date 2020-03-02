create table `like`.`Like`
(
	id int auto_increment
		primary key,
	review_id int not null,
	student_id varchar(256) not null,
	date datetime null
);

