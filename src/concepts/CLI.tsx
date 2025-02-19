import React from "react";
import { Link } from "react-router-dom";

const CLI = () => {
  return (
    <>
      <Link to="/">Home Page</Link>
      <h1>What is CLI?</h1>
      <p>
        CLI stands for Command Line Interface. It is a text-based interface used
        to interact with software and operating systems by typing commands into
        a console or terminal.
      </p>

      <h2>Common CLI Commands:</h2>
      <code>
        # List files and directories:
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>$ ls</p># Change
        directory:
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ cd /path/to/directory
        </p>
        # Create a new directory:
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ mkdir new-directory
        </p>
        # Remove a file:
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>$ rm file.txt</p>#
        Remove a directory and its contents:
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ rm -r directory
        </p>
      </code>

      <h2>Key Features of Git:</h2>
      <ol>
        <li>
          Distributed Version Control: Git allows each developer to have a local
          copy of the entire project repository. This enables them to work
          offline, commit changes, and merge code independently.
        </li>
        <li>
          Branching and Merging: Git makes it easy to create branches for new
          features or bug fixes. Developers can work on separate branches
          without affecting the main codebase. Merging branches is also
          straightforward with Git.
        </li>
        <li>
          History Tracking: Git tracks changes made to files over time.
          Developers can view the commit history, compare versions, and revert
          to previous states if needed.
        </li>
        <li>
          {" "}
          Collaboration: Git facilitates collaboration among team members by
          allowing them to push and pull changes to and from a shared
          repository. It helps in resolving conflicts and keeping the codebase
          up-to-date.
        </li>
        <li>
          Staging Area: Git uses a staging area to prepare and review changes
          before committing them to the repository. This allows developers to
          selectively add files to the next commit.
        </li>
        <li>
          Speed and Performance: Git is known for its speed and efficiency in
          handling version control operations, making it suitable for projects
          of any size.
        </li>
        <li>
          Open Source: Git is open-source software, which means it is free to
          use, modify, and distribute. The Git community actively contributes to
          its development and maintenance.
        </li>
        <li>
          Integration: Git integrates with popular code hosting platforms like
          GitHub, GitLab, and Bitbucket, providing additional features like
          issue tracking, pull requests, and continuous integration.
        </li>
      </ol>

      <h2>Basic Git Commands:</h2>
      <code>
        # Check current branch
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>$ git branch</p>#
        Create and switch to a new branch
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git checkout -b feature-branch
        </p>
        # Make changes, then add and commit them
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git checkout -b feature-branch
        </p>
        # Push the branch to the remote repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git add . <br />$ git commit -m "Add new feature"
        </p>
        # Switch back to the main branch
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git checkout main
        </p>
        # Merge the feature branch into the main branch
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git merge feature-branch
        </p>
        # Delete the feature branch locally
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git branch -d feature-branch
        </p>
        # Delete the feature branch from the remote repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git push origin --delete feature-branch
        </p>
        # Pull the latest changes from the remote repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git pull origin main
        </p>
        # Push changes to remote repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          $ git push origin feature-branch
        </p>
        # Check the status of your working directory
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>$ git status</p>
      </code>

      <h2>Uploading a project to GitHub</h2>
      <code>
        #Create a remote repository on GitHub & obtain the repository URL
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          https://github.com/ChonCanCode/###.git
        </p>
        #Create a new react file
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          npm create vite@latest i-am-project-name --template react
        </p>
        #Change directory to the project folder
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          cd i-am-project-name
        </p>
        #Initialize the git repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>git init</p>
        #Add all files to the staging area
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>git add .</p>
        #Commit the changes
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          git commit -m "Initial commit"
        </p>
        #Add the remote repository URL
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          git remote add origin https://github.com/ChonCanCode/###.git
        </p>
        #Push the changes to the remote repository
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>
          git push -u origin main
        </p>
        #Discard unstagged changes
        <p style={{ color: ` #E07A5F`, marginTop: `-5px` }}>git checkout .</p>
      </code>

      <h2>Why use Branches</h2>
      <p>
        Using branches in Git is a powerful way to manage different features,
        bug fixes, or versions of your project. Branches allow you to work on
        multiple tasks simultaneously without interfering with the main
        codebase.
      </p>

      <ol>
        <li>Isolation:</li>
        <ul>
          <li>
            Branches allow you to isolate your work on a specific feature or bug
            fix from the main codebase.
          </li>
          <li>
            This prevents unfinished or experimental code from affecting the
            stable version of your project.
          </li>
        </ul>

        <li>Parallel Developement:</li>
        <ul>
          <li>
            Multiple developers can work on different features or fixes
            simultaneously without conflicts.
          </li>
          <li>
            Each developer can create their own branch and merge changes back
            into the main branch when ready.
          </li>
        </ul>

        <li>Version Control:</li>
        <ul>
          <li>Branches help manage different versions of your project.</li>
          <li>
            You can create branches for releases, hotfixes, or experimental
            features.
          </li>
        </ul>

        <li>Safe Experimentation:</li>
        <ul>
          <li>
            You can experiment with new ideas or technologies in a branch
            without risking the stability of the main codebase.
          </li>
          <li>
            If the experiment fails, you can simply delete the branch without
            affecting the main project!
          </li>
        </ul>
      </ol>
    </>
  );
};

export default CLI;
