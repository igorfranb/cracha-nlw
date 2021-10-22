const smediaLink = {
  github: 'igorfranb',
  youtube: 'channel/UCELfKyWGNml7NCRM4Tn1AkQ',
  instagram: 'igor_franb',
  twitter: 'igor_franb'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${smediaLink[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const urlApiGithub = `https://api.github.com/users/${smediaLink.github}`

  // fetch -> get api's responde
  fetch(urlApiGithub)
    .then(response => response.json()) //transforming response to json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      githubUser.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
      
    })
}

getGithubProfileInfos()
