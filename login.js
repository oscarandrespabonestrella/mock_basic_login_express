const express = require('express');
const cors = require('cors');
const app = express();

const USERNAME = "bernd";
const PASSWORD = "amplexor";


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.post('/auth', function(request, response) {	
	let username = request.body.username;
	let password = request.body.password;	
    if (username && password) {                
        // If there is an issue with the query, output the error
        if (username === USERNAME && password === PASSWORD) {            
            response.status(200).send(true);                     
        } else {
            response.status(401).send({ message: "Incorrect Username and/or Password!" })
        }        
        response.end();
    }	
});

app.listen(3000);