## ReactJs Bootstrap html template

Step 1) Install npm in you Computer fire this command<br />
# npm install

Step 2) Copy git clone ir download Zip<br />
In the project directory, you can run:<br />
Open [https://github.com/cgvaghela/react-website](https://github.com/cgvaghela/react-website) to view in the browser

Step 3) In this site there frur pages (Home, About Us, Services, Contact Us)<br />
# go to src folder and update (Navbar.jsx,Contact.jsx,About.jsx,Sliders.jsx,Slide.jsx,Sevices.jsx,Service.jsx)

Step 4) open command prompt and reach your folder by cd command<br />
# npm start

Your project was run in local server by:<br />
Open [http://localhost:3000](https://localhost:3000) in your localhost server

## Upload in your server<br />

Step 1) "homepage": ".", -->add this on package.json file<br />

Step 2) npm run build --> this will create a build folder<br />

Step 3) make a .htaccess it will look like this<br /><br />

<IfModule mod_rewrite.c><br />
RewriteEngine On<br />
RewriteBase /<br />
RewriteRule ^index\.html$ - [L]<br />
RewriteCond %{REQUEST_FILENAME} !-f<br />
RewriteCond %{REQUEST_FILENAME} !-d<br />
RewriteCond %{REQUEST_FILENAME} !-l<br />
RewriteRule . /index.html [L]<br />
</IfModule><br />

Step 4) now take all the files in build folder plus your htaccess and drop them in the desired domain or subdomain
Open [https://stackoverflow.com/questions/49939601/how-to-deploy-a-react-app-on-cpanel](https://stackoverflow.com/questions/49939601/how-to-deploy-a-react-app-on-cpanel)

## Runs the app in the development mode.<br />
Open [https://syntegows.com/react](https://syntegows.com/react) to view it in the browser.
