# Internship Task 2 – README

## Project Description

This project is a rebuilt version of the first internship task using a templating system and a build workflow. The purpose of this task was to organize the website in a better structure while keeping the same final design, styling, links, and page layout.

---

## Selected Technologies

### Templating Engine

**Handlebars** was selected for this project.

It was used to create reusable templates for common sections such as the navigation bar and footer. This helped reduce repeated code across multiple pages.

### Bundler / Task Runner

**Vite** was selected as the project tool.

It was used during development to run the local server and manage the frontend workflow. It also helped in testing the website quickly while making changes.

---

## Project Structure

```id="vs3mkg"
src/
 ├── templates/
 │    ├── partials/
 │    ├── index.hbs
 │    ├── about.hbs
 │    └── contact.hbs
 │
 └── assets/
      └── style.css

dist/
 ├── index.html
 ├── about.html
 ├── contact.html
 └── assets/
      └── style.css
```

---

## How to Install

Run the following command to install required packages:

```id="yjlwm7"
npm install
```

---

## How to Start Development Server

Use the command below:

```id="3y1v8v"
npm run dev
```

This starts the local development environment.

---

## How to Build Final Output

Use the command below:

```id="0jsn8v"
npm run build
```

This creates the final compiled files inside the `dist` folder.

---

## Final Output

The completed website files are available in the `dist` folder and include:

* Home page
* About page
* Contact page
* CSS assets

---

## Conclusion

This task helped in understanding reusable templates, better folder organization, and modern frontend workflow. It also improved knowledge of project structure and code maintenance.

