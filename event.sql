create table events(
    eventId int identity(1, 1) primary key clustered not null,
    eventTitle nvarchar (100) not null,
    eventDescription nvarchar (1500) not null,
    startDate date not null,
    endDate date not null,
    avenue nvarchar (200) not null,
    maxMembers int not null,
)
select
    *
from
    events
insert into
    events(
        eventTitle,
        eventDescription,
        startDate,
        endDate,
        avenue,
        maxMembers
    )
VALUES
    (
        N'first event',
        N'some first event description is here and further',
        '2020-11-04',
        '2020-11-08',
        N'1600 Amphotos Parkay in Mmountain View',
        2000
    )