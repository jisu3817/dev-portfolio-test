const TechStackService = require("../../services/TechStacks/TechStackService");
const TechStackRepository = require("../../services/TechStacks/TechStackRepository");
const TechStacks = require("../../models/TechStacks"); // class
const { nextTick } = require("process");

const TechStackController = {
  findAllByKeyword: async (req, res, next) => {
    const { keyword } = req.params;

    const techStackService = new TechStackService({
      techStacks: new TechStacks(),
      techStackRepository: new TechStackRepository(),
    });

    const response = techStackService.findAllByKeyword(keyword);
    res.resposne = response;
    next();
  },
};

module.exports = TechStackController;
