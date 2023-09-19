/*
1. What is MongoDB ?
Ans. MongoDB is a popular open source, document oriented NoSQL (non-relational)
    database management system.
            It was developed to handle large volumes of structured and unstructured data
    in a flexible, scalable and high performance manner.
            MongoDB is designed to store data in a format called BSON (Binary JSON) which 
    is a binary represented of JSON like documents.



2. How MongoDB save data ?
Ans. MongoDB save data using a flexible and schemaless document model. In mongodb data
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
            { field_1: order_1}
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




8. Difference b/w MongoDB and MySQL ?
Ans.
    MySQL: MySQL is a relational database management system (RDBMS) based on the table-based
            data model. It uses structured tables with rows and columns to store data.

    MongoDB: MongoDB is a NoSQL Database Management System based on the document based data
            model. It stores data in flexible, schemaless documents, typically in JSON like format.




9. Does any foreign key concept in mongodb ?
Ans. Normally, MongoDB doesn't work with the conect of foreign key.



10. Does any primary key concept in Mongodb ?
Ans. The _id field works as the primary key for the MongoDB collection so that each document
    can be uniquely identified in the collection.
        There is a unique ObjectId value associated with each _id field by default, which
    is a hexadecimal number.



11. What is indexing in MongoDB ?
Ans. Indexes are data structure that support the efficient execution of queries in mongodb.
    They contain copies of part of the data in documents to make queries more efficient.
        Without indexes, mongodb must scan every document in a collection to find the 
    documents that match each query.




12. How many types of indexing in Mongodb ?
Ans. MongoDB supports several types of indexing:-
    1) Single Field Indexes
    2) Compound Indexes
    3) Multikey Indexes
    4) Geospatial Indexes
    5) Text Indexes
    6) Hashed Indexes



13. How to create indexing in MongoDB ?
Ans. Mongodb provides a createIndex() method to create one or more indexes on collections.
    Using this method we can create different types of indexes like index, 2d sphere index, 
    2d index etc. It takes three parameters first one is document that contains the field
    and value pairs where the field is the index key and the value describes the type of
    index for that field and others are optional.

    Syntax:-  db.collection.createIndex(keys, options, commitQuorum);



14. What is $project, $unwind and $group in mongodb ?
Ans. $Project:- The $project takes a document that can specify the inclusion of fields, 
            the suppression of the _id field, the addition of new fields, and the resetting
    of the values of existing fields. Alternatively, you may specify the exclusion of fields. 

    Syntax:- { $project: { <specification(s)> } }


    $Unwind:- The $unwind in MongoDB deconstructs an array field from the input documents to 
                output a document for each element.


    $Group:- The $group is used to group input documents by the specified _id expression and 
            for each distinct grouping, outputs a document.




15. Write us one query in mongodb that update the data and give us updated result ?
Ans. We can use 'findOneAndUpdate' to update a document and get the updated result.

    Syntax:- db.collection.findOneAndUpdate(filter, update, options);

*/