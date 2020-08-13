import express from 'express'
import db from './database/connections';

const routes = express.Router();

routes.post('/classes', async (request, response) => {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

    const insertedUsersIds = await db('users').insert({
        name: name, 
        avatar: avatar, 
        whatsapp: whatsapp, 
        bio: bio
    });

    
    const user_id = insertedUsersIds[0];

    await db('classes').insert({
        subject,
        cost,
        user_id
    })
    return response.send("ok")
});

export default routes;