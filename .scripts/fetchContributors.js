const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const repoOwner = 'saviynt';
const repoName = 'developer-portal';

async function fetchContributors(filePath) {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;
    const response = await fetch(url);
    const commits = await response.json();
    const contributorDetails = new Set();

    await Promise.all(commits.map(async commit => {
        if (commit.author) {
            const userResponse = await fetch(commit.author.url);
            const userData = await userResponse.json();
            contributorDetails.add({
                login: commit.author.login,
                avatar_url: userData.avatar_url
            });
        }
    }));

    return Array.from(contributorDetails).map(contributor => ({
        username: contributor.login,
        avatarUrl: contributor.avatar_url
    }));
}

async function main() {
    const docsDirectory = './docs';
    const files = fs.readdirSync(docsDirectory);
    files.forEach(file => {
        const filePath = path.join(docsDirectory, file);
        fetchContributors(filePath).then(contributors => {
            const outputDir = './public/contributors';
            const outputPath = path.join(outputDir, `${file}.json`);

            if (!fs.existsSync(outputDir)){
                fs.mkdirSync(outputDir, { recursive: true }); // Make sure the directory exists
            }
            fs.writeFileSync(outputPath, JSON.stringify(contributors), 'utf8');
        });
    });
}

main();
