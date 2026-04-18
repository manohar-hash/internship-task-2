import fs from "fs";
import Handlebars from "handlebars";

const header = fs.readFileSync("src/templates/partials/header.hbs", "utf8");
const footer = fs.readFileSync("src/templates/partials/footer.hbs", "utf8");

Handlebars.registerPartial("header", header);
Handlebars.registerPartial("footer", footer);

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

if (!fs.existsSync("dist/assets")) {
  fs.mkdirSync("dist/assets", { recursive: true });
}

const pages = ["index", "about", "contact"];

pages.forEach((page) => {
  const templateFile = fs.readFileSync(`src/templates/${page}.hbs`, "utf8");
  const template = Handlebars.compile(templateFile);
  const output = template({});
  fs.writeFileSync(`dist/${page}.html`, output);
});

fs.copyFileSync("src/assets/style.css", "dist/assets/style.css");

console.log("All pages built successfully!");