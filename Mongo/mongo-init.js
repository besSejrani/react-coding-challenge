print(
  "Start #################################################################"
);

// Production
db = db.getSiblingDB("api_prod_db");
db.createCollection("users");
db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_prod_db" }],
});

// ========================================================================================================

// Developpement
db = db.getSiblingDB("api_dev_db");
db.createCollection("users");
db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "api_dev_db" }],
});

print("END #################################################################");
