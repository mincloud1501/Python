export default function unpackJsonArrays(json, buffers, options = {}) {
  return unpackJsonArraysRecursive(json, json, buffers, options);
}

function unpackJsonArraysRecursive(json, topJson, buffers, options = {}) {
  const object = json;
  const buffer = decodeJSONPointer(object, buffers);

  if (buffer) {
    return buffer;
  }

  if (Array.isArray(object)) {
    return object.map(element => unpackJsonArraysRecursive(element, topJson, buffers, options));
  }

  if (object !== null && typeof object === 'object') {
    const newObject = {};

    for (const key in object) {
      newObject[key] = unpackJsonArraysRecursive(object[key], topJson, buffers, options);
    }

    return newObject;
  }

  return object;
}

function decodeJSONPointer(object, buffers) {
  const pointer = parseJSONPointer(object);

  if (pointer) {
    const [field, index] = pointer;
    const buffer = buffers[field] && buffers[field][index];

    if (buffer) {
      return buffer;
    }

    console.error("Invalid JSON pointer ".concat(object, ": #/").concat(field, "/").concat(index));
  }

  return null;
}

function parseJSONPointer(value) {
  if (typeof value === 'string') {
    if (value.indexOf('##/') === 0) {
      return value.slice(1);
    }

    let matches = value.match(/#\/([a-z]+)\/([0-9]+)/);

    if (matches) {
      const index = parseInt(matches[2], 10);
      return [matches[1], index];
    }

    matches = value.match(/\$\$\$([0-9]+)/);

    if (matches) {
      const index = parseInt(matches[1], 10);
      return ['accessors', index];
    }
  }

  return null;
}
//# sourceMappingURL=unpack-binary-json.js.map