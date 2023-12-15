const linkData = require('../data/links');

const shortUrlController = async (req, res, next) => {
  try {
    const { linkValue, createdAt, updatedAt } = req.body;
    const linkShort = Math.random().toString(36).slice(2, 5);
    console.log('IM IN shortUrlController');
    console.log('IM IN shortUrlController');
    const insert = await linkData.creatLink({
      linkValue,
      linkShort: `http://192.168.1.15:49693/api/shorturl/${linkShort}`,
      createdAt,
      updatedAt,
    });

    res.status(200).send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLink = async (req, res, next) => {
  try {
    const linkId = req.params.id;
    const link = await linkData.getById(linkId);
    res.redirect(link[0].linkValue);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  shortUrlController,
  getLink,
};
