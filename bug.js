```javascript
// Incorrect usage of $inc operator in MongoDB update
db.collection.updateOne({"_id":1},{$inc:{counter:NaN}});
```