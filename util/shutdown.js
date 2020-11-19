function shutdown(server, options = { coredump: false, timeout: 500 }) {
  const exit = (code) => {
    // eslint-disable-next-line no-unused-expressions
    options.coredump ? process.abort() : process.exit(code);
  };

  return (code, reason) => (err, promise) => {
    if (err && err instanceof Error) {
      console.error(err.message, err.stack);
    }

    // Graceful shutdown.
    server.close(exit);
    setTimeout(exit, options.timeout).unref();
  };
}

module.exports = shutdown;
