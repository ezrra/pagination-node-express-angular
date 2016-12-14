db.users.drop();

for (var i = 0; i < 100; i++) {
  db.users.insert({ _id: i, fullName: "Name " + i })
}
