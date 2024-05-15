export default class Validator {
  static validateUsername(name) {
    return (/^[a-z][\w-]+[a-z]$/i.test(name) && !/\d{4}/.test(name));
    // return /^(?!.*\d{4})[a-z][\w-]+[a-z]$/i.test(name);
  }
}
