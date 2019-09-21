const httpRequest = req =>
  Object.freeze({
    headers: {
      contentType: req.get("Content-Type"),
      referer: req.get("referer"),
      userAgent: req.get("User-Agent")
    },
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path
  });

module.exports = httpRequest;
