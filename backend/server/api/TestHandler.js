const { createTest } = require('../service');

const createTestHandler = async (req, res) => {
  try {
    const {
      title,
    } = req.body;
    console.log(req.body);
    
    await createTest({
      title,
    });
    
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500);
  }
};

module.exports = {
  createTestHandler,
};
