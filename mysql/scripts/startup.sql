use aulatrybe;
create table simpletest(
  id int(11) not null auto_increment,
  message varchar(255) not null,
  primary key (id)
);
insert into simpletest(message) values('Hello, world!');
