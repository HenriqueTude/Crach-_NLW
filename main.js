const LinksSocialMedia = {
  github: 'HenriqueTude',
  youtube: 'UCN34U-Yor0hPfNB8LFjUF4g',
  facebook: 'henrique.tude.5',
  instagram: 'henriquetude',
  twitter: 'twitter'
}
function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    UserImg.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()
