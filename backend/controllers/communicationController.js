// get all todos
const getCommunication = async (req, res) => {
  res.status(200).json({ mssg: "use POST" });
};

// create a new todo
const postCommunication = async (req, res) => {
  const { Type } = req.body;

  let yourDate = new Date();
  switch (Type) {
    case "400":
      res.status(400).json({
        fault: {
          faultstring: "faultstring:" + Type,
          detail: "detail:" + Type,
        },
      });
      break;
    case "500":
      res.status(500).json({
        fault: {
          faultstring: "faultstring:" + Type,
          detail: "detail:" + Type,
        },
      });
      break;
    default:
      res.status(200).json({
        ResultType: Type,
        DateFinValidite: yourDate.toISOString().split("T")[0],
      });
      break;
  }
};

module.exports = {
  getCommunication,
  postCommunication,
};
