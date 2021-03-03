
<div align="center" justify="center" style="text-align:center; -webkit-animation: rotate-90-cw 3s linear infinite both; animation: rotate-90-cw 3s linear infinite both">
  <pre> <img width="300" alt="Strive Logo" src="https://strive.school/assets/strive_black.png">       <img width="300" alt="Strive Logo" src="/assets/Logo1.png"> </pre>
</div>

#### BW1 Spotify Clone

> Our very first build week project, a clone of the shopify web application.
<img width="500" alt="Spotify clone homepage" src="./assets/readme/screenshot1.PNG"> 

> Each team member took ownership of building a specific page and also in developing beskpoke dynamic interactivity.

#### Site

> [Spotify Clone - live demo](https://strive-bw1-spotify-clone.netlify.app)

#### Stack

> Our chosen stack for this project

- Major languages - HTML, CSS, Javascript(ES6)
- Frameworks - Bootstrap v4.6
- Technologies - Netlify Hosting & CDN
- Infrastructure - Github CI

#### Devops

> Our git development workflow as follows: 

- Main branch for live production/deployment on netlify hosting.
- Development branch for stanging and testing so any rough commits don't get pushed straight into production (main).
- Local development branches for feature development.

```            
                             _______       _____                        
                             ___    |      __  /___________ _______ ___ 
                             __  /| |      _  __/  _ \  __ `/_  __ `__ \
               Development   _  ___ |      / /_ /  __/ /_/ /_  / / / / /
               Staging       /_/  |_|      \__/ \___/\__,_/ /_/ /_/ /_/ 
                   ^
Production         |                        
Main branch        |       
^  <-------------- |
|                  |\
|                  | \
|                  |  \  local feature branches merged into dev/staging for  
|                  |  /  testing before being merged to main/production   
|                  | /   ex. branch: toni/header-img-fix  
|                  |/ 
|                  |
main ------------ dev <------> freature branches (Ekow, Toni, Enrico & Sean)

```

##### Team Git refresher guide (before pushing and merging ;)

- git pull - pulls latest changes from the remote upstream on whichever branch you are on
- git branch - shows all local branches
- git checkout (_branch name_) - switches to a new branch
- git checkout -b (_branch name_) - creates a new branch and switches to new branch
- git branch -d (_branch name_) - deletes branch
- git status - shows local file changes (edited and non committed or added files staged for commit once added to staging)
- git add . - adds all edited and changed local files to staging ready for commmit
- git commit -m "message" - commits all added staged files (basically think of committing like saving your files locally)
- git push - will push the files up to the remote / origin on the branch you are on.


1. Always switch into dev every new session and pull latest changes (you could do the same for master, so you always have up to date master and dev branch)
2. Create or switch to your own feature branch, don't work directly on dev/master/main (if not yet created, create a new feature branch from the latest dev branch)
3. Remember before merging make sure you always update and pull latest changes on dev
4. Important!!! Resolve any conflicts with your team mates if any arise while trying to merge your feature branch with the development branch.
5. If you manage to merge without conflicts then you can push your awesome work upstream to the origin remote.

Happy coding future ex google, ex facebook tech leads ;)

#### Getting Started

Git clone the repository to your local computer, use LiveServer to view in development.

#### Prerequisites

Visual Studio Code and LiveServer plugin for serving the index.html file in your local browser.

#### Deployment

Our 'Main' deployment branch is CI into netlify so any pushes to the main branch will auto publish to Netlify hosting and edge CDN.

#### Team



👤 Ekow

👤 Toni

👤 Toni

👤 Sean

- GitHub: [@githubhandle](https://github.com/SKopsap)
- LinkedIn: [LinkedIn](https://linkedin.com/seanknowlesmd)

#### 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

#### Show your support

Give a ⭐️ if you like this project, every star means something, show us some love :)!

#### Acknowledgments

To our Strive mentors:

- Luis
- Stefano
- Tatiana

#### 📝 License

No need, this is freely available.
