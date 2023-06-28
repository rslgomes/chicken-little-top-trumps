export default function camelToTitle(text) {
  const spacesBeforeUpper = text.replace(/([A-Z])/g, ' $1');

  if (spacesBeforeUpper.charAt(0) === ' ') {
    return spacesBeforeUpper.slice(1);
  }
  return spacesBeforeUpper.charAt(0).toUpperCase() + spacesBeforeUpper.slice(1);
}
