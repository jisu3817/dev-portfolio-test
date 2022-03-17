// const TechStacks = []; // class

export default class TechStackService {
  constructor({ techStacks, techStackRepository }) {
    this.techStacks = techStacks;
    this.techStackRepository = techStackRepository;
  }

  findAllByKeyword(keyword) {
    try {
      const techStacks = this.techStackRepository.findAllByKeyword(keyword);
      // const techStacks = this.techStackRepository.findAllByKeyword(keyword);
      // const techStacks = this.techStackRepository.findAllByKeyword(keyword);
      this.techStackRepository.releaseConnection();

      this.techStacks.setElements(techStacks);
      return this.techStacks; // type : iTechStack[]
    } catch (e) {
      // errorMiddleware(e);
      if (e.code === 409)
        return { code: e.code, message: e.message, error: e.name };
      return {};
    }
  }
}
