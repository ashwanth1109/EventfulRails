drop table if exists hosting;
drop table if exists attending;
drop table if exists users;
drop table if exists events;

create table users(
	id serial primary key,
	username varchar(16) not null,
	password varchar(16) not null,
	name varchar(20),
	profession varchar(20),
	imageurl varchar(200)
);

create table events(
	id serial primary key,
	name varchar(50) not null,
	type varchar(10),
	image varchar(200),
	date integer,
    month varchar(3),
    location varchar(50),
    hostedby varchar(20),
    starttime varchar(5),
    endtime varchar(5)
);

create table hosting(
    id serial primary key,
    userid integer references users,
    eventid integer references events
);

create table attending(
    id serial primary key,
    userid integer references users,
    eventid integer references events
);