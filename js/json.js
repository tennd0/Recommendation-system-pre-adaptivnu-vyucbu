let JsonObject

// Convert (js array) to (json object)
JsonObject = JSON.parse(JSON.stringify(questions));

// type
console.log(typeof(JsonObject));

// JsonObject
console.log(JsonObject);