# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.


## **Collaborating on the Developer Portal**

### **Prerequisites**

- Ensure you have a GitHub account.
- You should have the necessary permissions to contribute to the repository.

### **Accessing the Repository**

1. Go to the GitHub repository URL provided by the maintainers.
2. Navigate to the `docs` directory.

### **Creating New Files (**`.md` or `.mdx`)

1. Inside the `docs/guide` directory:
   - Click on `Add file` &gt; `Create new file`.
   - To create a new folder, type the folder name followed by a `/` and then the file name.
   - Write the content in Markdown or MDX format.
   - At the bottom of the page, enter a commit message that describes your changes.
   - Select “Commit directly to the `main` branch” or “Create a new branch for this commit”.
   - Click `Commit new file`.
   - The new file or folder will automatically generate pages and menus in the developer portal after the GitHub build completes.

### **Updating the Side Navigation**

1. If you add a new file to the `docs/apis` folder, you will need to update the side navigation:
   - Navigate to the `sidebars.js` or similar configuration file.
   - Use the GitHub editor to make your changes, adding your new page to the list using its id (usually the filename without the extension).
   - Follow the format of existing entries to maintain consistency.
   - Commit the changes with a descriptive message.

### **Using GitHub Editor Features**

- **Editing Files:** You can edit files directly by navigating to them, clicking the pencil icon to open the editor.
- **Preview Changes:** Use the ‘Preview changes’ tab to see how the Markdown will render after the changes.
- **Committing Changes:** Write a meaningful commit message and description. This helps maintainers understand the purpose of your changes.
- **Pull Requests:** After committing your changes on a new branch, you can open a pull request for maintainers to review your changes.

### **Post-Commit**

- After committing your changes, GitHub Actions will start a build. You can check the progress under the `Actions` tab.
- Wait for the build to complete to see your changes reflected on the developer portal.
- For any complex changes or build failures, refer to the repository's [CONTRIBUTING.md](http://CONTRIBUTING.md) or contact the maintainers.

### **Good Practices**

- Before making changes, always pull the latest changes from the `main` branch.
- Keep your commits atomic, meaning each commit should represent a single logical change.
- Use clear and descriptive commit messages.
- Review your changes before committing.


```
git clone https://github.com/saviynt/developer-portal.git
```


1. **Navigate to the Project Directory:** After cloning, navigate to the project directory with:

   ```
   cd developer-portal
   ```


2. **Install Dependencies:** Inside the project directory, install the project dependencies with Yarn:

   ```
   yarn install
   ```

   This command reads the `package.json` file and installs the required dependencies.

3. **Start the Development Server:** Once the installation is complete, you can start the Docusaurus development server with:

   ```
   yarn docusaurus start
   ```

   This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

4. **Build the Project:** To build the project for production, you can use:

   ```
   yarn docusaurus build
   ```


   This command generates static content into the `build` directory and can be served using any static contents hosting service.

5. **Preview the Build:** You might want to preview your production build locally. You can do it with:

   ```
   yarn docusaurus serve
   ```

   This command serves the static site generated in the `build` directory on a local server.

