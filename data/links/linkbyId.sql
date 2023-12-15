SELECT
    [linkId],
    [linkValue],
    [linkShort]
FROM
    [dbo].[links]
WHERE
    [linkShort] = @linkShort