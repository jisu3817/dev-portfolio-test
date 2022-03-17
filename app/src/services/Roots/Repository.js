export default class Repository {
  constructor() {
    this.#pool = mariadb.getConnection(); // private
  }

  releaseConnection() {
    this.#pool.release();
  }
}
