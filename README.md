
<div align="center" style="text-align:center; -webkit-animation: rotate-90-cw 3s linear infinite both; animation: rotate-90-cw 3s linear infinite both">
  <img width="100" alt="Strive Logo" src="https://strive.school/assets/strive_logo02.png">
</div>

#### Build Week 1 Portfolio Project - Spotify Clone

> Our 1st team build week assignment and portfolio project which is a Spotify Clone

![screenshot](./assets/readme/screenshot1.png)

> Each team member was assigned and took ownership of a page and also specific/bespoke app functionality to deliver consistent and reliable features improvements over a full 5 day period.

#### Live Site

> [Link to demo](https://strive-m2-d10-benchmark-gogcom.netlify.app/)

#### Built With

> Our technology stack for this project

- Major languages - HTML, CSS, Javascript(ES6)
- Frameworks - Bootstrap4.6
- Technologies - Netlify Hosting
- Infrascrture - Github

#### Infrastructure

> Our git development workflow as follows: 

- Main branch for live production/deployment on netlify hosting.
- Development branch for stanging and testing so any rough commits don't get pushed straight into production (main).
- Local development branches for feature development.

```
Netlify     Testing
production  staging
^            ^
|            |
|            |  
|            | / local developer branches
|            |/
main <----- dev <------ Freature (Ekow, Toni, Enrico & Sean)

```

##### Git refresher guide

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
4. IMPORTANT, WHEN YOU MERGE YOUR FEATURE BRANCH INTO DEV AND YOU HAVE CONFLICTS DO NOT PUSH TO THE REMOTE, WE WILL RESOLVE THE CONFLICTS LOCALLY BEFORE CORRUPTING THE REMOTE DEV.
5. If you succesfully manage to merge feature into an up to date dev branch with no conflicts then you can push the commits upstream.

Hope this guide helps :).

#### Getting Started

Git clone the repository to your local computer, use LiveServer to view in development.

#### Prerequisites

Visual Studio Code and LiveServer plugin for serving the index.html file in your local browser.

#### Deployment

Our 'Main' deployment branch is CI into netlify so any pushes to the main branch will auto publish to Netlify hosting and edge CDN.

#### Authors

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/SKopsap)
- Twitter: [@twitterhandle](https://twitter.com/SKopsap)
- LinkedIn: [LinkedIn](https://linkedin.com/seanknowlesmd)

👤 **Author2**

#### 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

#### Show your support

Give a ⭐️ if you like this project, every star means something for a junior developer show this team some love :)!

#### Acknowledgments

To our Strive mentors:

- Luis
- Stefano
- Tatiana

#### 📝 License

No need, this is freely available.
