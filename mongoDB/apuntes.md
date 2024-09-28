
[link a documentación oficial de Mongo](https://www.mongodb.com/docs/manual/reference/operator/query/eq/)

It’s great that you’re using **`mongosh`** to interact with MongoDB! Here's a step-by-step guide on how to use the MongoDB shell to **connect**, **create a database**, and **perform CRUD (Create, Read, Update, Delete) operations** for a web application.

### Step 1: **Connect to MongoDB**

You’ve already connected to MongoDB using the `mongosh` command, and you're in the shell now.

Mongodb is freeschema,, that means i can save whatever data in spite of having different properties

You can use the `use <database>` command to either switch to an existing database or create a new one. MongoDB will create the database once you insert some data.

### Step 2: **Create a New Database**

1. **Select or create a database** (for example, `mywebsite`):
   ```js
   use mywebsite
   ```
   If the database doesn’t exist, MongoDB will create it once you add data.
   whener you use it it create a db

### Step 3: **Create a Collection**

Collections in MongoDB are like tables in relational databases. You need to create a collection where your data will be stored.

whenever i use db, i'm selecting the data base where i'm on, is like `document` in JS 
For example, let’s create a `users` collection to store user data for your website:
```js
db.createCollection("users")
```

If you don’t explicitly create a collection, MongoDB will automatically create one when you first insert data.

### Step 4: **Insert Data**

Let’s insert some sample user data into the `users` collection.
**syntax:**
`database.tableName.insertHOWMUCH({"json": true})`
1. **Insert one document** (record):
   ```js
   db.users.insertOne({
       name: "Alice",
       email: "alice@example.com",
       age: 28
   })
   ```

2. **Insert multiple documents**:
   ```js
   db.users.insertMany([
       { name: "Bob", email: "bob@example.com", age: 30 },
       { name: "Charlie", email: "charlie@example.com", age: 22 }
   ])
   ```

### Step 5: **Find Data (Read)**

You can query the data to retrieve it:

1. **Find all documents in the `users` collection**:
   ```js
   db.users.find()
   ```

2. **Find documents with a specific condition**:
   ```js
   db.users.find({ age: { $gt: 25 } }) // Find users older than 25
   ```

3. **Find a specific user by name**:
   ```js
   db.users.findOne({ name: "Alice" })
   ```
 4. Find assuming some regex
 ```js
 db.test.find({nombre: {$regex:"^pepe"}})
 ```
 5. Finding to get the first 5 users
 ```js
 db.test.find({nombre: {$regex:"^pepe"}}).limit(5)
 ```
6. Finding ages greater than 18
 ```js
 db.test.find({edad: {$gt:18}})
 ```
### Step 6: **Update Data**

You can update existing data in your collections.

1. **Update a single document**:
   ```js
   db.users.updateOne(
       { name: "Alice" }, // Filter
       { $set: { age: 29 } } // Update
   )
   ```
2. **Update multiple documents**:
   ```js
   db.users.updateMany(
       { age: { $lt: 30 } }, // Update users under 30
       { $set: { status: "active" } } // Set their status to active
   )
   ```
3. **Update**
```js
db.test.updateOne({_id: ObjectId('velor id'),$set: {nombre: ‘pepe’, apellido: ‘suarez', edad: 50})}
```
4. **Update by id**
```js
db.test.updateOne(
  { _id: ObjectId('66eed14967223d5a75964034') },
  { $set: { "nombre": "pepe", "apellido": "suarez", "edad": 50 } }
)
```
### Step 7: **Delete Data**

You can delete documents from your collections.

1. **Delete one document**:
   ```js
   db.users.deleteOne({ name: "Charlie" })
   ```

2. **Delete multiple documents**:
   ```js
   db.users.deleteMany({ age: { $lt: 30 } }) // Delete users under 30
   ```
3. Delete by id
```js
db.test .deleteOne({_id: ObjectId(‘66e8b473ae17203056c35a59")})
```
### Step 8: **Show Databases and Collections**

1. **Show all databases**:
   ```js
   show dbs
   ```

2. **Show collections in the current database**:
   ```js
   show collections
   ```

### Step 9: **Enable Access Control (Optional but Recommended)**

Your MongoDB logs indicate that **access control is not enabled**, meaning anyone can read/write to your database. To secure your MongoDB instance, you should enable authentication.

1. **Create an admin user**:
   - Switch to the `admin` database:
     ```js
     use admin
     ```
   - Create an admin user:
     ```js
     db.createUser({
         user: "admin",
         pwd: "securepassword",
         roles: [{ role: "root", db: "admin" }]
     })
     ```

2. **Enable authentication**:
   - Edit the MongoDB configuration file (`/etc/mongod.conf`) and enable authentication:
     ```yaml
     security:
       authorization: "enabled"
     ```
   - Restart MongoDB:
     ```bash
     sudo systemctl restart mongod
     ```

3. **Connect with authentication**:
   After enabling authentication, use the following command to connect as the admin:
   ```bash
   mongosh --username admin --password --authenticationDatabase admin
   ```

### Example Workflow: Create a Web Application Database

1. **Create the `mywebsite` database**:
   ```js
   use mywebsite
   ```

2. **Create a `products` collection** for storing product information:
   ```js
   db.createCollection("products")
   ```

3. **Insert a product into the `products` collection**:
   ```js
   db.products.insertOne({
       name: "Laptop",
       price: 1200,
       stock: 50,
       category: "Electronics"
   })
   ```

4. **Query the products**:
   ```js
   db.products.find()
   ```

### Useful Commands

- **Switch to a database**: `use <dbname>`
- **Create a collection**: `db.createCollection("<collection_name>")`
- **Insert one document**: `db.<collection>.insertOne({ ... })`
- **Insert multiple documents**: `db.<collection>.insertMany([{ ... }, { ... }])`
- **Find documents**: `db.<collection>.find({ query })`
- **Update documents**: `db.<collection>.updateOne({ filter }, { $set: { field: value } })`
- **Delete documents**: `db.<collection>.deleteOne({ query })`
- **See all collections**: `show collections`

Now you're ready to use **`mongosh`** to create and manage your MongoDB databases for your web application! Let me know if you need further assistance.