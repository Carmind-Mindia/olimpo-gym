db.createUser({
    user: "olimpogym_user",
    pwd: "olimpogym_password",
    roles: [
      {
        role: "readWrite",
        db: "olimpo-gym"
      }
    ]
  });
  