// Функция для очистки поля ввода
const clearInputField = (inputField) => (inputField.value = "");

// Функция для проверки на спам
const checkSpam = (str) => str.toLowerCase().replace(/viagra|xxx/gi, "***");

// Получаем форму комментариев и все поля ввода
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name-input");
const avatarInput = document.getElementById("avatar-input");
const messageInput = document.getElementById("message-input");
const commentsSection = document.getElementById("comments-section");

// Добавляем обработчик событий на поле ввода имени
nameInput.addEventListener("blur", (event) => {
  event.target.value = event.target.value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
});

// Добавляем обработчик события на отправку формы
commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Отменяем действие по умолчанию

  // Получаем значения полей ввода
  const name = nameInput.value.trim();
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
  [nameInput, avatarInput, messageInput].forEach(clearInputField);
});
