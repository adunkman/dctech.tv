exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers["content-security-policy"] = [{
    key: "Content-Security-Policy",
    value: "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'"
  }];

  headers["x-content-type-options"] = [{
    key: "X-Content-Type-Options",
    value: "nosniff"
  }];

  headers["x-frame-options"] = [{
    key: "X-Frame-Options",
    value: "DENY"
  }];

  headers["x-xss-protection"] = [{
    key: "X-XSS-Protection",
    value: "1; mode=block"
  }];

  headers["referrer-policy"] = [{
    key: "Referrer-Policy",
    value: "same-origin"
  }];

  headers["public-key-pins"] = [{
    key: "Public-Key-Pins",
    value: 'pin-sha256="8661KWK58Pstdq/N5PKdnseT8AGMa+pKJUSan4kP4VQ="; pin-sha256="lGnqxto1pcHMrCWQ1LKzCzx+/6FUNtmN1wA6MYLBVHs="; max-age=86400'
  }];

  headers["strict-transport-security"] = [{
    key: "Strict-Transport-Security",
    value: "max-age=2592000"
  }];

  callback(null, response);
};
