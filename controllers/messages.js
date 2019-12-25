const knex = require('../db/knex');

exports.getAllMessages = (req, res) => {
    knex('messages').then(messages => res.json(messages));
};

exports.getOneMessage = (req, res) => {
    knex('messages')
        .where('id', req.params.id)
        .then(message => res.json(message));
};

exports.addMessage = (req, res) => {
    knex('messages')
        .insert(req.body)
        .returning('*')
        .then(newMessage => res.json(newMessage));
};

exports.updateMessage = (req, res) => {
    knex('messages')
        .where('id', req.params.id)
        .update(req.body)
        .returning('*')
        .then(updatedMessage => res.json(updatedMessage));
};

exports.removeMessage = (req, res) => {
    knex('messages')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(removedMessage => res.json(removedMessage));
};
