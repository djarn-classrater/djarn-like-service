create database likes;

create table likes.Like
(
	id int auto_increment
		primary key,
	reviewId int not null,
	studentId varchar(256) not null,
	date datetime null,
	constraint Like_review_id_student_id_uindex
		unique (reviewId, studentId)
);

