/**
 * 401 (Unauthorized) Handler
 *
 * Usage:
 * return res.unauthorized();
 * return res.unauthorized(err);
 *
 * e.g.:
 * ```
 * return res.unauthorized('Token expired.');
 * ```
 *
 * NOTE:
 *  If a request does not include a token in its authorization header,
 *  this response should be triggered.
 */

module.exports = function unauthorized (data) {
  const { res } = this;

  res.status(401);

  return res.jsonx(data);
};
