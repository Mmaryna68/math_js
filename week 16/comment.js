// Функция для очистки поля ввода
function clearInputField(inputField) {
  inputField.value = "";
}

// Функция для проверки на спам
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx")
    ? lowerStr.replace(/viagra|xxx/gi, "***")
    : str;
}

// Получаем форму комментариев и все поля ввода
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name-input");
const avatarInput = document.getElementById("avatar-input");
const messageInput = document.getElementById("message-input");
const commentsSection = document.getElementById("comments-section");

// Добавляем обработчик событий на поле ввода имени
nameInput.addEventListener("blur", (event) => {
  // Получаем значение поля ввода имени
  let name = event.target.value.trim();

  // Преобразуем имя пользователя
  name = name
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/(^|\s)\S/g, function (match) {
      return match.toUpperCase();
    });

  // Устанавливаем значение поля ввода имени
  event.target.value = name;
});

// Добавляем обработчик события на отправку формы
commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Отменяем действие по умолчанию

  // Получаем значения полей ввода
  const name = nameInput.value;
  const avatar = avatarInput.value.trim();
  const message = messageInput.value.trim();

  // Проверяем, что все поля заполнены
  if (!name || !message) {
    alert("Пожалуйста, заполните все поля формы!");
    return;
  }

  // Создаём новый комментарий
  const newComment = document.createElement("div");
  newComment.classList.add("comment");

  // Добавляем аватар пользователя
  if (avatar) {
    const avatarImg = document.createElement("img");
    avatarImg.classList.add("avatar");
    avatarImg.src = avatar;
    newComment.appendChild(avatarImg);
  }

  // Добавляем имя пользователя
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  nameSpan.textContent = name;
  newComment.appendChild(nameSpan);

  // Добавляем текст комментария
  const messageP = document.createElement("p");
  messageP.classList.add("message");
  messageP.textContent = checkSpam(message);
  newComment.appendChild(messageP);

  // Добавляем новый комментарий в раздел комментариев
  commentsSection.appendChild(newComment);

  // Очищаем поля ввода
  clearInputField(nameInput);
  clearInputField(avatarInput);
  clearInputField(messageInput);
});
