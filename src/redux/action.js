//export default (type, payload) => { type, payload };
export default function action(type, payload) {
  return function () {
    return { type, payload };
  }
}