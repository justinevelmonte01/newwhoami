const simpleGit = require('simple-git');
const git = simpleGit();

// Example: Cloning a GitHub repository
const repoUrl = 'https://github.com/justinevelmonte01/newwhoami.git';
const localPath = './my-local-repo';

git.clone(repoUrl, localPath)
  .then(() => {
    console.log('Repository cloned!');
  })
  .catch((err) => {
    console.error('Error cloning repository:', err);
  });

// Example: Checking the status of a repository
git.status()
  .then((status) => {
    console.log('Git status:', status);
  })
  .catch((err) => {
    console.error('Error checking status:', err);
  });

// Example: Committing changes
const message = 'Commit message here';
git.add('./*')  // Add all files to staging
  .commit(message)
  .then(() => {
    console.log('Changes committed!');
  })
  .catch((err) => {
    console.error('Error committing changes:', err);
  });

// Example: Pushing changes to a remote repository
git.push('origin', 'master')
  .then(() => {
    console.log('Changes pushed to remote repository');
  })
  .catch((err) => {
    console.error('Error pushing changes:', err);
  });
