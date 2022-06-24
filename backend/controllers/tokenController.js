// get all todo
const getToken = async (req, res) => {
  res.status(200).json({ mssg: "use POST" });
};

// create a new todo
const postToken = async (req, res) => {
  const { CBNum, Contexte, RefMonetique } = req.body;

  switch (CBNum ?? RefMonetique) {
    case "4004004004004000":
      res.status(400).json({
        fault: {
          faultstring: "faultstring:" + CBNum + ";" + Contexte,
          detail: "detail:" + CBNum + ";" + Contexte,
        },
      });
      break;
    case "5005005005005000":
      res.status(500).json({
        fault: {
          faultstring: "faultstring:" + CBNum + ";" + Contexte,
          detail: "detail:" + CBNum + ";" + Contexte,
        },
      });
      break;

    case "1010101010101010":
      res.status(200).json({ ResultType: "10", Contexte: Contexte });
      break;

    case "5050505050505050":
      res.status(200).json({ ResultType: "50", Contexte: Contexte });
      break;

    case "0000000000000000":
      res.status(200).json({ ResultType: "0", Contexte: Contexte });
      break;

    default:
      res.status(200).json({ ResultType: CBNum, Contexte: Contexte });
      break;
  }
};

module.exports = {
  getToken,
  postToken,
};
