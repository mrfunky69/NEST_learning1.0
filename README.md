# NEST_learning1.0
This project is for a very newbie in nest, who just wants to learn how to build API's 


Initially clone this master branch to your local and 

#1 run the given command

**npm run start:dev**
  
You can test all the end points of storing the messages and retrieving them 

@GET **http://localhost:3001/messages**

@POST **http://localhost:3001/messages**

Application/JSON
{
  "content":"<the message>"
}

@GET by ID **http://localhost:3001/messages/:id**
  
