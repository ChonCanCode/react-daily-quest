import { Link } from "react-router-dom";


const Git = () => {
    return (
      <>
        <Link to="/">Home Page</Link> 
        <h1>What is Git?</h1>
        <p>Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is a popular choice among software developers and teams for managing source code and tracking changes in projects.</p>
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
        </code>
      </>
    );
  };
  
  export default Git;
