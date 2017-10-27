import { merge, emberAssign } from '@ember/polyfills';
const assign = emberAssign || Object.assign || _assign;

function _assign(origin, ...sources) {
  return sources.reduce((acc, source) => merge(acc, source), merge({}, origin));
}

export default function pureAssign() {
  return assign({}, ...arguments);
}
