INSERT INTO
    [dbo].[links] (
        [linkValue],
        [linkShort],
        [createdAt],
        [updatedAt]
    )
VALUES
    (
        @linkValue,
        @linkShort,
        @createdAt,
        @updatedAt
    )
SELECT
    SCOPE_IDENTITY() AS linkId