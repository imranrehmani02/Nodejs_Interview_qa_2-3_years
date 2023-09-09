/*
1. What is Mongoose ?
Ans. Mongoose is an Object Data Modeling (ODM) library for mongodb in nodejs. It provides
    a higher level abstraction and additional features on the top of mongodb driver.
    Mongoose making it easier to work with mongodb databases in nodejs application.



2. How to use Mongoose ORM ?
Ans. Mongoose ORM (Object Data Modeling)

    1) Install Mongoose
    2) Require Mongoose
    3) Connect to MongoDB
    4) Define Schema
    5) Create Model
    6) Perform Database Operations



3. How to join two collections using mongoose ?
Ans. In Mongoose, you can join two collections using the populate() method. This allows
    you to retrieve data from a referenced collection based on the specified field.

    Story.findOne({ title: 'Casino Royale' }).
    populate('author').
    exec();
*/