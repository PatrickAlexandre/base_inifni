 document.getElementById('proposal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('proposal-title').value;
    const description = document.getElementById('proposal-description').value;
    if (title && description) {
        addProposal(title, description);
    }
});

function addProposal(title, description) {
    const proposalsList = document.getElementById('proposals-list');
    const proposalElement = document.createElement('div');
    proposalElement.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    proposalsList.appendChild(proposalElement);
}
