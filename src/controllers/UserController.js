export const getUsers = (req, res) => res.status(200).json({ msg: "users" });

export const search = (req, res) => {
  const { username, email } = req.query;

  res.status(200).json({
    username,
    email,
  });

  console.log({ username, email });
};

export const createUser = (req, res) => {
  const { username } = req.body;

  res.status(201).json({ username });
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  res.status(200).json({ id });
};

export const deleteUser = (req, res) =>
  res.status(200).json({ msg: "delete user" });
