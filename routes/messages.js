const express = require('express');

const router = express.Router();
const messageController = require('../controllers/messages');

router.get('/messages', messageController.getAllMessages);
router.get('/messages/:id', messageController.getOneMessage);
router.post('/messages', messageController.addMessage);
router.patch('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.removeMessage);

module.exports = router;
