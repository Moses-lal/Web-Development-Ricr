export const update = (req, res, next) => {
  try {
    res.status(200).json({ message: "update " });
  } catch (error) {
    console.log(error);
  }
};

export const change = (req, res, next) => {
  try {
    res.status(200).json({ message: "change " });
  } catch (error) {
    console.log(error);
  }
};

export const remove = (req, res, next) => {
  try {
    res.status(200).json({ message: "delte " });
  } catch (error) {
    console.log(error);
  }
};
