const Repository = require("../Roots/Repository");

export default class TechStackRepository extends Repository {
  constructor() {
    super();
  }

  findAllByKeyword(keyword) {
    try {
      this.pool = this.pool ?? db.getConnection();

      const techStacks = await this.pool.query("~~");
      return techStacks;
    } catch (e) {
      if (e.code === 3425) throw new ConflictError("아이디가 충돌되었다.");
      throw new Error("샬라");
    }
  }
}

class Error {
  constructor(message) {
    this.name = "Error";
    this.message = message;
    this.stack = [];
  }
}

class ConflictError extends Error {
  constructor(message) {
    this.name = "ConflictError";
    this.message = message;
    this.stack = [];
    this.code = 409;
  }
}
