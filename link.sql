create table links(
    linkId int identity(1, 1) primary key clustered not null,
    linkValue nvarchar (500) not null,
    linkShort nvarchar (500) not null,
    createdAt date not null,
    updatedAt date not null,
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