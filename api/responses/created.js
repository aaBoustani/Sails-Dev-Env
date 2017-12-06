/**
 * 201 (CREATED) Response
 *
 * Usage:
 * return res.created();
 * return res.created(data);
 *
 * @param  {Object} data
 */

module.exports = function created (data) {
  const { res } = this;

  res.status(201);

  return res.jsonx(data);
};
