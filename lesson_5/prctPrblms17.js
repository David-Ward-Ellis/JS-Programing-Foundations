let characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f'];
let sections = [8, 4, 4, 4, 12];

function generateUUID () {
  let UUID = '';

  sections.forEach((section, sectionIndex) => {
    for (idx = 1; idx <= section; idx += 1) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      UUID += characters[randomIndex]
    }

    if (sectionIndex < sections.length - 1) {
      UUID += '-';
    }
  })

  return UUID;
}

console.log(generateUUID())