/*
1. What is MongoDB ?
Ans. MongoDB is popular open source, document oriented NoSQL (non-relational)
    database management system.
            It was developed to handle large volumes of structured and unstructured data
    in a flexible, scalable and high performance manner.
            MongoDB is designed to store data in a format called BSON (Binary JSON) which 
    is a binary represented of JSON like documents.



2. How MongoDB save data ?
Ans. MongoDB saved data using a flexible and schemaless document model. In mongodb data
    is stored in collections.



3. How to create database relation in Mongodb ?
Ans. Relationships like one-to-one, one-to-many etc.

    1) Embedded Document Model
    2) Reference Model



4. CRUD queries in mongodb ?
Ans. CRUD Queries:-

    1) Insert
    db.collection.insertOne(
        {
            name: "Imran",          // field: value
            age: 20,
            city: "Ratlam"
        }
    )

    db.collection.insertMany(
        [
            {
                name: "Imran",
                age: 20,
                city: "Ratlam"
            },
            {
                name: "Aman",
                age: 22,
                city: "Bhopal"
            }
        ]
    )


    2) Find
    db.collection.find(                 // Collection
        { age: { $gt: 18} },            // Query criteria
        { name: 1, address: 1 }         // Projection
    ).limit(5);                         // Cursor modifier


    3) Update
    db.collection.updateOne(filter, document, options);

    db.employees.updateOne(
        { _id: 1 },
        { 
            $set: {
                firstName: 'Morgan'
            }
        }
    )

     db.employees.updateMany(
        { _id: 1 },
        { 
            $set: {
                firstName: 'Morgan'
            }
        }
    )


    4) Delete
    db.collection.deleteOne(filter, options)

    db.employees.deleteOne(
        { salary:7000 }
    )

     db.employees.deleteMany(
        { salary:7000 }
    )



5. Sorting in MongoDB ?
Ans. 
        db.collection.find().sort(
            { field: order}
        );


6. What is aggregation in MongoDB ?
Ans. Aggregation is a way of processing a large number of documents in a collection
    by means of passing them through different stages.



7. How to join two collections in MongoDB ?
Ans. In MongoDB, you can join two collections using the $lookup stage in the aggregation
    framework. The $lookup stage allows you to perform a left outer join between two
    collections based on a common field.

    Syntax:
    {
        $lookup:
            {
                from: <collection to join>,
                localField: <field from the input documents>,
                foreignField: <field from the documents of the "from" collection>,
                as: <output array field>
            }
    }

    Example:
    db.comments.aggregate([
        {
            $lookup: {
                from: "movies",
                localField: "movie_id",
                foreignField: "_id",
                as: "movie_details",
            },
        },
        {
            $limit: 1
        }
    ])




8. Does any foreign key concept in mongodb ?
Ans. No



9. Difference b/w MongoDB and MySQL ?
Ans.
    MySQL: MySQL is a relational database management system (RDBMS) based on the table-based
            data model. It uses structured tables with rows and columns to store data.

    MongoDB: MongoDB is a NoSQL Database Management System based on the document based data
            model. It stores data in flexible, schemaless documents, typically in JSON like format.

*/