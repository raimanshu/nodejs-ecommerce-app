



ENV_LOCAL = "LOCAL"
ENV_PROD = "PROD"
LOG_DEBUG = "DEBUG"
LOG_ERROR = "ERROR"
LOG_WARNING = "WARNING"
LOG_AUDITS = "AUDITS"

ERROR_MSG_DB_OPERATION = "Error accessing the database"
RESPONSE_STATUS_KWD = "status"
RESPONSE_MSG_KWD = "message"
RESPONSE_CODE_KWD = "code"
const DEFAULT_API_RESPONSE_OBJ = {
    RESPONSE_CODE_KWD: 202,
    RESPONSE_STATUS_KWD: false,
    RESPONSE_MSG_KWD: "API request accepted.",
}
BAD_REQUEST_ERROR_MSG = "Bad request. The request is invalid or cannot be fulfilled. Please try again or contact CraftBot Tech Team."
TEMPORARY_FOLDER = "temp"
INPUT_NOT_ACCEPTABLE_RESPONE = (
    "Inputs given are not acceptable due to which we are not able to create"
)

module.exports = {
    ERROR_MSG_DB_OPERATION,
    DEFAULT_API_RESPONSE_OBJ,
    BAD_REQUEST_ERROR_MSG,
    INPUT_NOT_ACCEPTABLE_RESPONE
}
