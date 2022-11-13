print(
  "Start #################################################################"
);

// Production
db = db.getSiblingDB("api_prod_db");
db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_prod_db" }],
});
db.createCollection("users");

// ========================================================================================================

// Developpement
db = db.getSiblingDB("api_dev_db");
db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_dev_db" }],
});
db.createCollection("users");

// ========================================================================================================

// Test
db = db.getSiblingDB("api_test_db");

db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_test_db" }],
});
db.createCollection("users");

print("END #################################################################");
