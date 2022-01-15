just import the logger.js using common js require statement
instantiate a express server
underneath all codes and above listen method use this module

const logger=require("./logger")
(or)
const logger=require("logger")

app.use(logger)

:) now all your error which occured due to express js will be logged with date and uuid :D 