window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})

const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser("MasterLaplace");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const resData = await resp.json();

  createUserCard(resData);
  getRepos(username);
}

async function getRepos(username) {
  const resp = await fetch(APIURL + username + '/repos');
  const resData = await resp.json();
  
  addReposToCard(resData);
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li>${user.followers}<strong>Followers</strong></li>
          <li>${user.following}<strong>Following</strong></li>
          <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposE1 = document.getElementById('repos');
  
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10).forEach(repo => {
      const repoE1 = document.createElement('a');
      repoE1.classList.add('repo');
      repoE1.href = repo.html_url;
      repoE1.target = "_blank";
      repoE1.innerText = repo.name;
      reposE1.appendChild(repoE1);
    })
}

form.addEventListener('submit', a => {
  a.preventDefault();
  const user = search.value;
  
  if (user) {
    getUser(user);
    search.value = "";
  }
})
