create table people (
	id int not null auto_increment,
	name varchar(255),
	primary key(id)
);

INSERT INTO people(name) values('Marcelo');
INSERT INTO people(name) values('Joao');
INSERT INTO people(name) values('Pedro');