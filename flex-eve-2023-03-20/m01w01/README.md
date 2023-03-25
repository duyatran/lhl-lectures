# M01W01 - The Dev Workflow

[Lecture Recording](https://vimeo.com/811638920/db20c49f8a)

### To Do
- [] Introduction
- [] Curriculum Overview
- [] Logistics
- [] Tools
- [] Problem Solving Exercise

### Curriculum Overview

- See slides in repo or Web Flex handbook for a high-level overview of the Lighthouse Labs web bootcamp curriculum

### Logistics
* Zoom
  * Link will be posted on Discord 10 minutes before lecture time
  * Video on if you can
  * 10-minute break on the hour mark
  * Ask questions in the chat box, or raise your hand
  * Don't code along or be distracted
* Lecture notes/videos will be uploaded and accessible via Compass
* Theory plus live coding

### Tools
  * OS
  * VM Ex. WSL, Vagrant, or native (MacOS, Linux)
  * IDE Ex. VS Code highly recommended. Useful addons -- Ex. Better Comments, ESLint, Prettier, GitLens
  * Terminal
    - [Cheatsheet](https://www.git-tower.com/blog/command-line-cheat-sheet/)
    - [Explain a command](https://explainshell.com/)
  * Documentation
    - [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
    - [DevDocs](https://devdocs.io/)
    - [Stack Overflow](https://stackoverflow.com/) - or add "site:stackoverflow.com" to your Google search
  * Mentors/Instructors/Cohort
  * Git/GitHub
    * Why?
      - Git: because we need to keep track of changes (think Track Changes feature in Microsoft Word, but on steroids)
      - GitHub: because we need to collaborate with others (think a shared Google Drive or Dropbox, but more developer-friendly)
    * Most common commands: [a simple guide](https://up1.github.io/git-guide/index.html)
      * `git status`
      * `git add .`
      * `git commit -m "message"`
      * `git remote -v (or add origin, rm origin)`
      * `git push`
      * `git pull`
      * A sandbox to practice your git-fu: [Git Exercises](https://gitexercises.fracz.com/)
    * Workflow
      * To create a git repository in a directory, run `git init`
      * `git status` will show you which files have been changed in the working directory
      * Use `git diff` to see what specifically was changed inside each file
      * To add files to the staging area, use `git add <filename>` or `git add .` to add all changes
      * Commit your changes using `git commit -m 'a meaningful commit message'`
      * Finally, push your code to GitHub using `git push origin master` or `git push origin main`
      * **NOTE:** This workflow is good for solo coding projects. When you work as part of a team (such as during mid-terms and finals), you will use a more advanced workflow.

### Problem solving

* Work incrementally, writing and then executing small amounts of code
  * Break the problem down into a series of smaller (and easier to understand) steps
  * Small segments of code allow us to more easily see where errors/bugs are in our code
* Use proper indentation
  * Indentation helps us to see how our code is nested (eg. which lines of code are inside the function or if statement)

  ```js
  // no indentation
  const printArray = function (arr) {
  arr.forEach(function(element) {
  console.log(element);
  });
  };
  console.log('All done!');

  // proper indentation
  const printArray = function (arr) {
    arr.forEach(function(element) {
      console.log(element);
    });
  };
  console.log('All done!');
  ```

* Try to avoid copy/pasting code; type it out for yourself and try to understand what you are typing
* Errors are your friends
  * Try to decipher the error message before you Google it
  * Errors help to show us where we made a mistake and being able to read them is a valuable skill
* Syntax: am I missing a curly brace?
* Data: do I have the data I think I do in the format I expect?
* Logic: have I told the computer exactly what to do?

#### Asking For Help
* Remember the 15-minute rule
* Tell mentors what is not working and what you've tried
* **Google** the error message/what you want to accomplish; make sure to add the programming language (eg. JavaScript) to your search term (eg. "remove elements from array javascript")
* **StackOverflow** is useful for seeing multiple possible solutions to a problem (DO NOT copy and paste)
* **Mozilla Developer Network (MDN)** is good as a general reference
* **ChatGPT** - recommended only for explanation of concepts and documentation lookup, **avoid** searching for solutions and copying/pasting code

### Advice
* Be curious
* Be disciplined
* Connect with people
* Be kind to yourself
