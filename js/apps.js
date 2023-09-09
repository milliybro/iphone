const appRow = document.querySelector(".app__row");

function getApp({ name, image }) {
  return `
   <div class="app">
      <div class="app-icon"><img src="${image}" class="icon" alt="${name}"></div>
      <div class="app-name">${name}</div>
   </div>
   `;
}

function getApplication() {
  appRow.innerHTML = "";
  app.map((el) => {
    appRow.innerHTML += getApp(el);
  });
}

getApplication();
