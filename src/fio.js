export default function fio(fullName) {
  const arrFullName = fullName.toLowerCase().replace(/^\s+|\s+$/g, '').replace(/\s{1,}/g, ' ').split(' ');
  const countWords = arrFullName.length;

  console.log(countWords);

  if (fullName === '' || countWords > 3 || fullName.match(/\d|_|\//)) {
    return 'Invalid fullname';
  }

  let cutFullName = '';

  if (countWords > 1) {
    arrFullName.forEach((name, index) => {
      if ((countWords - 1) !== index) {
        cutFullName = cutFullName + ' ' + name.match(/./) + '.';
      }
    });
  }

  const lastName = arrFullName[countWords - 1];
  return lastName.charAt(0).toUpperCase() + lastName.slice(1) + cutFullName.toUpperCase();
}
