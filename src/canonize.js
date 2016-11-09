export default function canonize(url) {
  const re = new RegExp('(https://telegram.me/|http://telegram.me/)?([a-z]*)');
  const username = url.match(re);
  return username;
}
