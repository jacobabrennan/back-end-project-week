

//== Project Constants =========================================================

const PORT = process.env.PORT;
module.exports = {
    // Server Configuration
    SERVER_PORT: PORT,
    SERVER_MESSAGE: `Server started on port ${PORT}`,
    // Database
    TABLE_NOTES: 'notes',
    FIELD_ID   : 'id'   ,
    FIELD_TITLE: 'title',
    FIELD_BODY : 'body' ,
    LIMIT_TITLE: 128 ,
    LIMIT_BODY : 1024,
};
