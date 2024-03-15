// load json
fetch('./people.json')
    .then(response => response.json())
    .then(data => generateCards(data))
    .catch(error => console.error(error));

// generate cards
function generateCards(data) {
    const cards = data.map(person => {
        const gitHubProfileImage = person.GitHubProfileLink + ".png";
        const tagLinks = person.tags.map(tag => {
            return `<button type="button" class="btn btn-primary"><a href="${tag.link}" target="_blank">${tag.name}</a></button>`;
        }).join('\n');

        return `
            <div class="col">
                <div class="card shadow-sm">
                <img src="${gitHubProfileImage}" class="thumbnail" alt="Profile Image of ${person.name}">

                <div class="card-body">
                    <p class="card-text">${person.name}, ${person.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a href="${person.GitHubProfileLink}" target="_blank" class="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                        ${tagLinks}
                    </div>
                </div>
                </div>
            </div>
            </div>
        `;
    }).join('');
    document.querySelector('#album').innerHTML = cards;
}
