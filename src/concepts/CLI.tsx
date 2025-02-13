import React from "react";
import { Link } from "react-router-dom";


const CLI = () => {
    return (
      <>
        <Link to="/">Home Page</Link> 
        <h1>What is CLI?</h1>
        <p>CLI stands for Command Line Interface. It is a text-based interface used to interact with software and operating systems by typing commands into a console or terminal.</p>

        <h2>Common CLI Commands:</h2>
        <code>
        # List files and directories:
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>$ ls</p>

        # Change directory:
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>$ cd /path/to/directory</p>

        # Create a new directory:
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>$ mkdir new-directory</p>

        # Remove a file:
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>$ rm file.txt</p>

        # Remove a directory and its contents:
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>$ rm -r directory</p>
        </code>


        <h2>Key Features of Git:</h2>
        <ol>
            <li>Distributed Version Control: Git allows each developer to have a local copy of the entire project repository. This enables them to work offline, commit changes, and merge code independently.</li>
            <li>Branching and Merging: Git makes it easy to create branches for new features or bug fixes. Developers can work on separate branches without affecting the main codebase. Merging branches is also straightforward with Git.</li>
            <li>History Tracking: Git tracks changes made to files over time. Developers can view the commit history, compare versions, and revert to previous states if needed.</li>
            <li> Collaboration: Git facilitates collaboration among team members by allowing them to push and pull changes to and from a shared repository. It helps in resolving conflicts and keeping the codebase up-to-date.</li>
            <li>Staging Area: Git uses a staging area to prepare and review changes before committing them to the repository. This allows developers to selectively add files to the next commit.</li>
            <li>Speed and Performance: Git is known for its speed and efficiency in handling version control operations, making it suitable for projects of any size.</li>
            <li>Open Source: Git is open-source software, which means it is free to use, modify, and distribute. The Git community actively contributes to its development and maintenance.</li>
            <li>Integration: Git integrates with popular code hosting platforms like GitHub, GitLab, and Bitbucket, providing additional features like issue tracking, pull requests, and continuous integration.</li>
        </ol>

        <h2>Basic Git Commands:</h2>
        <code>
        # Check current branch
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
          $ git branch</p>

        # Create and switch to a new branch
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git checkout -b feature-branch</p>

        # Make changes, then add and commit them
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git checkout -b feature-branch</p>

        # Push the branch to the remote repository
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git add . <br />$ git commit -m "Add new feature"</p>

        # Switch back to the main branch
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git checkout main</p>

        # Merge the feature branch into the main branch
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git merge feature-branch</p>

        # Delete the feature branch locally
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git branch -d feature-branch</p>

        # Delete the feature branch from the remote repository
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git push origin --delete feature-branch</p>

        # Pull the latest changes from the remote repository
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git pull origin main</p>

        # Push changes to remote repository
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git push origin feature-branch</p>

        # Check the status of your working directory
        <p style={{color:` #E07A5F`, marginTop: `-5px`}}>
        $ git status</p>

        </code>
      </>
    );
  };
  
  export default CLI;
