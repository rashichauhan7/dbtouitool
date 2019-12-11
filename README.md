# DB to UI tool

---

## Introduction

- This backend is all built in NodeJS.
- All the necessary node modules should be installed with a one-time `npm install`.
- The server can be started with a `npm start` to start reaching the endpoints.

---

## REST APIs

The RESTful APIs are as following: 

1. GET `'/api/_structure'`
  - It returns information about all the collections present in the database
  including the name and structure of each collection.

2. GET `'/api/_structure/:collectionName'`
  - It returns the structure of the collection for the given collection name
  and returns NULL if the collection does not exist.

3. POST `'/api/_collections'`
  - It creates a new collection with the following parameters in the request body:
    name of the table, column that is the primary key, if the id is auto-incrementating, other attributes in the collection.
  - example:
  ```
  {
    "name": "movie",
    "primarykey": "id",
    "autoincrement": "true",
    "attributes": {
      "id": "int",
      "name": "varchar(255)",
      "year" : "int",
      "stars": "int"
      }
  }
  ```
    
4. GET `'/api/_collections/:collectionName'`
  - It returns the records present in the collection for the given collection name ordered by the primary keys.

5. PUT `'/api/_collections/:collectionName'`
  - It updates the structure of the collection for the given collection name by using the DDL commands.
  - example:
  ```
  {
	  "newColumnName": "isPresent",
	  "newColumnType": "bool"
  }
  ```

6. DELETE `'/api/_collections/:collectionName'`
  - It deletes the collection for the given collection name.
  
7. GET `'/api/:collectionName/:entryId'`
  - It returns the record with the given ID if present in the collection for the given collection name.

8. GET `'/api/:collectionName'`
  - It returns the records present in the collection for the given collection name ordered by the primary keys.

9. PUT `'/api/:collectionName'`
  - It updates the record with the given condition if satisfied in the collection for the given collection name.
  - example:
  ```
  {
    "condition": "id = 2",
    "values": {
    	"name": "Updatedname"
    }
  }
  ```

10. POST `'/api/:collectionName'`
  - It creates an entry in the collection for the given collection name.
  - example:
  ```
  {
	  "name": "Frozen 2",
    "year": "2019",
    "stars": "7"
  }
  ```

11. DELETE `'/api/:collectionName'`
  - It deletes the entry in the collection for the given collection name where the condition is satisfied.
  - example:
  ```
  {
    "condition": "id = 2"
  }
  ```