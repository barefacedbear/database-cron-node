/*
 * Author: Avishek Datta Ray @ Programmers.io
 * Created Date: Saturday, June 10th 2023, 9:30:07 am
 * Project: DB Backup using cron job and mail
*/
const cron = require('node-cron'), nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    }), fs = require('fs/promises'), path = require('path');

require('dotenv').config();

cron.schedule('* * * * *', () => { // Change with required value
    const fileName = `dump_${new Date().getTime()}.sql`, directory = 'dump',
        result = require('child_process').execSync(`mysqldump -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} > ./${directory}/${fileName}`);
    if (result) {
        transporter.sendMail({
            to: 'example@example.com',
            subject: `Database Backup till ${new Date()}`,
            text: `Please find the attached backup file for your reference. If data gets wiped out or corrupted, contact your administrator/developer in charge restore the backup.`,
            priority: 'high', // Optional parameter to set priority level
            attachments: [
                {
                    filename: fileName,
                    path: `./${directory}/${fileName}`
                }
            ]
        }, async (err, res) => {
            if (err) {
                throw err;
            }
            for (const file of await fs.readdir(directory)) {
                await fs.unlink(path.join(directory, file));
            }
        });
    }
});
