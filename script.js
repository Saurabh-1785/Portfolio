function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function openLiveDemo(button) {
  const projectCell = button.closest('.project-cell');
  const liveUrl = projectCell.getAttribute('data-live');
  
  if (liveUrl) {
    window.open(liveUrl, '_blank');
  } else {
    // If no live URL is set, you can construct it from GitHub repo
    const githubRepo = projectCell.getAttribute('data-github');
    if (githubRepo) {
      // You can customize this URL pattern based on your deployment service
      const deployedUrl = `https://${githubRepo.replace('/', '-')}.vercel.app`;
      window.open(deployedUrl, '_blank');
    }
  }
}

function openSourceCode(button) {
  const projectCell = button.closest('.project-cell');
  const githubRepo = projectCell.getAttribute('data-github');
  
  if (githubRepo) {
    const githubUrl = `https://github.com/${githubRepo}`;
    window.open(githubUrl, '_blank');
  }
}