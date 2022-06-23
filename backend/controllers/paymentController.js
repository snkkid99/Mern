// get all todos
const getPayment = async (req, res) => {
  res.status(200).json({ mssg: "use POST" });
};

// create a new todo
const postPayment = async (req, res) => {
  const { RefMonetique } = req.body;

  switch (RefMonetique) {
    case "400":
    case "500":
      res.status(parseInt(RefMonetique)).json({
        fault: {
          faultstring: "faultstring:" + RefMonetique,
          detail: "detail:" + RefMonetique,
        },
      });
      break;
    default:
      res.status(200).json({ ResultType: RefMonetique });
      break;
  }
};

module.exports = {
  getPayment,
  postPayment,
};
