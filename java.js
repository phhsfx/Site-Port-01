const githubUsername = 'phhsfx'; // Seu nome de usuário do GitHub
const projectsContainer = document.querySelector('.project-list');

fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : 'Sem descrição.'}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Erro ao buscar os projetos:', error));
