<h1>Simple CRUD React + NodeJS + MySQL Application</h1>
<p>As the name suggests, this is a simple CRUD application. It covers the basics on how to consume a NodeJS REST API from a React application. It also covers the connection of the API with a MySQL database. Some external libraries were used to make things easier and to make development faster, like <a href="https://expressjs.com/">ExpressJS<a> for the backend server in NodeJS, and <a href="https://mui.com/">MUI<a> to style components React, we'll get into that later.<p>

<h2>Installation</h2>
<h3>Database</h3>
<p>This is an easy part. Just excecute the SQL file (you can find it in the root of the project) in the server that you are using for the database. A new database will be created with the neccessary tables and fields.</p>

<h3>NodeJS</h3>
<p>Next from the bottom to the top, is NodeJS.</p>
<p>You'll first have to install the dependecies. You can do that by going to the server folder and running <code>npm install</code> in the console, and all the dependencies will be installed according to the package.json file.</p>
<p>Now, let's configure the database connection. Add a file to the root of the project and name it .env, it will hold all the sentitive information related to the database credentials. Here you will have to add some environment variables so you can use them to connect to the database. The file should look something like this:</p>
<code>
DB_REMOTE_HOST="yourdatabaseaddress"</code>
DB_REMOTE_PORT="yourdatabaseport"
DB_REMOTE_PASSWORD="yourdatabasepassword"
DB_REMOTE_NAME="yourdatabasename"
DB_REMOTE_USER="yourdatabaseuser"

<p>After that, you should be able to run the app by running <code>npm start</code> in your console.</p>

<h3>React</h3>
<p>The last part of the installation proccess consists getting into the client folder and running <code>npm install</code> to install the dependencies. Note that the package.json file for the React application is different from the one in the server</p>

<h2>Usage</h2>

 
