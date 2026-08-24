exports.handler = async function (event) {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzxiPZagm-hzqkswhJkDDWr2f2wYtTfgMKjomGXRFM1g9i_xRxUu30SZGvT0YztZhUf/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await response.text();

    return {
      statusCode: 200,
      body: result
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
