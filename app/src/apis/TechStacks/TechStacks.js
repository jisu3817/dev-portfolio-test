const app = require("../../../app");
const router = app.Router();

const { findAllByKeyword } = require("./TechStackController");

router.get("/tech-stack", findAllByKeyword, logger);
