const express = require('express');
const execSync = require('child_process').execSync;

const app = express();
const config = require('./config.js');


app.use('/api/deploy', (req, res, next) => {
    try {
        execSync(`sshpass -p ${config.password} ssh -o StrictHostKeyChecking=no root@${config.ip} './deploy.sh'`,
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            if (error !== null) {
                throw new Error(error);
            }
        });
        res.send('deploy success');
    } catch (err) {
        res.send('deploy failed, please try again or find out the error');
    }
})

app.listen(5000, () => {
    console.log('deploy server is localhost:5000');
})