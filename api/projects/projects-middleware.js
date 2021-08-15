// add middlewares here related to projects
function logger(req, res, next) {
    // DO YOUR MAGIC
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`
    );
  
    next();
}

module.exports = {
    logger
}