'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const creatLink = async (linkdata) => {
  try {
    console.log({ linkdata });
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('links');
    const insertLink = await pool
      .request()
      .input('linkValue', sql.NVarChar(1500), linkdata.linkValue)
      .input('linkShort', sql.NVarChar(1500), linkdata.linkShort)
      .input('createdAt', sql.Date, linkdata.createdAt)
      .input('updatedAt', sql.Date, linkdata.updatedAt)
      .query(sqlQueries.createLink);

    pool.close();
    return insertLink;
  } catch (error) {
    return error.message;
  }
};

const getById = async (linkId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('links');
    const link = await pool.request().input('linkShort', sql.VarChar(1500), `http://192.168.1.15:49693/api/shorturl/${linkId}`).query(sqlQueries.linkbyId);
    return link.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  creatLink,
  getById,
};
