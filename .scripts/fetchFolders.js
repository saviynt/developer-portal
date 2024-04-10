const fs = require('fs');
const fetch = require('node-fetch');

const GITHUB_API_URL = 'https://api.github.com/repos';
const REPO_OWNER = 'saviynt';
const REPO_NAME = 'community-connectors';
const BRANCH = 'main';
// const TOKEN = 'your_github_token';

// const headers = {
//   'Authorization': `token ${TOKEN}`
// };

async function fetchFolders() {
  const url = `${GITHUB_API_URL}/${REPO_OWNER}/${REPO_NAME}/contents?ref=${BRANCH}`;
  const response = await fetch(url, { headers });
  const data = await response.json();

  const directories = data.filter(item => item.type === 'dir').map(dir => ({
    name: dir.name,
    readmeLink: `https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/${BRANCH}/${dir.name}/README.md`,
    srcLink: `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${BRANCH}/${dir.name}/src`,
    docsLink: `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${BRANCH}/${dir.name}/docs`,
    distLink: `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${BRANCH}/${dir.name}/dist`,
  }));

  generateJSONFile(directories);
}

function generateJSONFile(folders) {
  const content = JSON.stringify(folders, null, 2);
  const outputPath = path.join(__dirname, 'static', 'folderList.json');
  const outputDir = path.dirname(outputPath);
  
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const content = JSON.stringify(folders, null, 2);
  fs.writeFileSync(outputPath, content);

  console.log('folderList.json has been created/updated');
}

fetchFolders().catch(console.error);
