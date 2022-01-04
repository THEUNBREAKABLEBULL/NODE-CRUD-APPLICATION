import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = []


//All routes here starts with users
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    // const userId = uuidv4();

    // const userWithId = {...user, id:userId}

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstname} added to the database !`);
});

router.get('/:id', (req, res) => {

    // console.log(req.params);
    const { id } = req.params;

    const founduser = users.find((user) => user.id === id);

    res.send(founduser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} is deleted from the database !`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id = id);

    if (firstname) user.firstname = firstname;


    if (lastname) user.lastname = lastname;


    if (age) user.age = age;


    res.send(`User with id ${id} is updated from the database !`)
});

router.put('/:id', (req,res) => {
 
    const {id} = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id = id);

    user.firstname = firstname;


    user.lastname = lastname;


    user.age = age;



    res.send('this is an update')
});

export default router;
