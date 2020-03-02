create database `like`;

create table `Like`
(
	id int auto_increment
		primary key,
	review_id int not null,
	student_id varchar(256) not null,
	date datetime null,
	constraint Like_review_id_student_id_uindex
		unique (review_id, student_id)
);

