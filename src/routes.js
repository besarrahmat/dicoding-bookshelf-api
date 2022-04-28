const {
    addBook,
    getAllBooks,
    getBookById,
    editBookById,
    deleteNoteById,
} = require('./handler');

const routes = [{
    method: 'POST',
    path: '/books',
    handler: addBook,
}, {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
}, {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
}, {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
}, {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteNoteById,
}, ];

module.exports = routes;