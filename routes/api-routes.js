const monk = require('monk');

const db = monk('localhost/hellobear')
const messages = db.get('messages');

module.exports = function (app) {
    app.post('/hellos', (req, res) => {
        if (isValidMessage(req.body)) {
            const message = {
                name: req.body.name.toString(),
                content: req.body.content.toString(),
                created: new Date()
            };

        messages
        .insert(message)
        .then(createdMessage => {
            res.json(createdMessage);
        });

        }
        else {
            res.status(422);
            res.json({
                message: "Please enter your name and message!"
            })
        }
    })

    function isValidMessage(message) {
        return message.name && message.name.toString().trim() !== '' &&
            message.content && message.content.toString().trim() !== ''
    }

}