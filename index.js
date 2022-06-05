const app = require('./app');

app.listen(4000, (err, result) => {
    if (err) {
        return console.log('App Running Error');
    }
    return console.log('App Running   4000');
});
