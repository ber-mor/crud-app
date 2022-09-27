<h1>Comments: Simple CRUD Application</h1>
<p>As the name suggests, this is a simple CRUD application to manage comments in a card. The application is built in the stack MySQL, NodeJS and React. You can add, edit, update and delete comments. It covers the basics on how to consume a NodeJS REST API from a React application. It also covers the connection of the API with a MySQL database. The React application is responsive, so you can use on mobile as well. Some external libraries were used to make things easier and to make development faster, like <a href="https://expressjs.com/">ExpressJS<a> for the backend server in NodeJS, and <a href="https://mui.com/">MUI<a> to style components in React, we'll get into that later.<p> 
<p>This is how it looks like:</p>
    
 ![demo](https://user-images.githubusercontent.com/53983892/192406300-266d1892-18c1-40da-926f-3ed0543219cf.png)

<h2>Installation</h2>
<h3>Database</h3>
<p>This is an easy part. Just excecute the SQL file (you can find it in the root of the project) in the server that you are using for the database. A new database will be created with the neccessary tables and fields.</p>

<h3>NodeJS</h3>
<p>Next from the bottom to the top, is NodeJS.</p>
<p>You'll first have to install the dependecies. You can do that by going to the <code>server</code> folder and running <code>npm install</code> in the console, and all the dependencies will be installed according to the <code>package.json</code>  file.</p>
<p>Now, let's configure the database connection. Add a file to the root of the project and name it <code>.env</code> , it will hold all the sentitive information related to the database credentials. Here you will have to add some environment variables so you can use them to connect to the database. The file should look something like this:</p>

    DB_REMOTE_HOST=yourdatabaseaddress
    DB_REMOTE_PORT=yourdatabaseport
    DB_REMOTE_PASSWORD=yourdatabasepassword
    DB_REMOTE_NAME=yourdatabasename
    DB_REMOTE_USER=yourdatabaseuser

 <p>For the development run, the script "start" uses nodemon as a dependency. If it does not work, you may want to install nodemon globally by running <code>npm install -g nodemon</code></p>
<p>After that, you should be able to run the app by running <code>npm start</code> in your console.</p>

<h3>React</h3>
<p>The last part of the installation proccess consists on getting into the client folder and running <code>npm install</code> to install the dependencies. Note that the package.json file for the React application is different from the one in the server. And that's it, after the installation, you should be able to run the app by running <code>npm start</code> in your console.</p>
    
<p>And that is all for the setup. You can now start using the app!</p>

<h2>Usage</h2>
<p>Being a CRUD application with no extra functionality appart from the basic CRUD operations, the usage is trivial. However, I'm going to explain what happens in the background.</p>
    
<h3>Getting the data</h3>
<p>The data is fetched automatically when running the app in a useEffect function. If the data is not ready, it renders a circle animation instead of the comments list</p>

<h3>Inserting</h3>
<p>The first thing you see is a form that you can use to add a new comment. Fields are validated, so you can't write something tha's not a email in the email field, and you can't leave an empty field. When you add a comment, an API request is made to post the new data, and it triggers a function that re-renders the comment section so you can see the new comment immediately at the top of the comments list.</p> 

![form](https://user-images.githubusercontent.com/53983892/192405228-c4b0953b-9ac1-4027-b89b-aa11b71b5ff3.png)


<h3>Editing</h3>
<p>When there is one or more comments in the list, you're free to edit them individually by pressing the edit button. When you press it, it shows a modal that overlays the entire screen. This modal has the same form that the one for adding comments, with the difference that this one is already filled with the data of the comment that you want to edit. It is also validated so you need to write a valid email and not leave empty fields.</p>
    
![edit](https://user-images.githubusercontent.com/53983892/192405980-e37f97bd-e870-43b6-a54f-8b2be48bc74b.png)
    
<p>After pressing the save button on the modal, the comment component receives the new values from the form and re-renders only that component, while the API makes the update in the database in the background, this way React won't have to wait until the database responds, and the list won't have to re-render again.</p>
    
<h3>Deleting</h3>
<p>When there is one or more comments in the list, you're free to delete them individually by pressing the delete button. When you do so, a confirmation alert will show up, if accepted, a request is send to the api to delete the comment from the database. If nothing goes wrong, the list of comments is re-renderd without the deleted comment.</p>
    
<h3>Create a production build</h3>
<p>For the react project, running <code>npm run build</code> should do the job. I will create a build folder ready to be deployed.</p>
<p>The API should work as is. You can configure a PM2 instance in a linux server and run it with <code>pm2 start index.js</code></p>

<h2>Design</h2>
<h3>API</h3>
<p>So there are quite a few design patterns to follow in a NodeJS API. Given the simplicity of this project, there are only three files in the sourcecode, thus, I didn't see the need for a complex design patterns. There is one file for the databse, another for the routes of the comments, and annother one for the main app. The <code>db.js</code> file manages the mysql connection, the <code>comments.routes.js</code> manages the methods for every route, and the <code>index.js</code> contains the server condiguration, there's not more than that.</p>

<p>As said before, the application makes use of the <a href="https://expressjs.com/">ExpressJS<a> library, in order to accelerate and facilitate the development of the API. Making the server configuration and the routes management easier.</p>
    
<h3>React Application</h3>
<p>The structure of the source code is quite simple:</p>
<ul>
    <li>The <code>App.js</code> file contains the main React component, the parent of everything.</li>
    <li>The <code>components</code> folder contains the components themselves and a css file related to that component.</li>
    <li>The <code>data</code> folder contains the neccessary files to manage the api calls.</li>
    <li>The <code>utils</code> folder contains a file with useful functions used in some components.</li>
</ul>
    
<p>As said before, the React Applications makes use of the <a href="https://mui.com/">MUI<a> library. This is a library that provide pre-styled anc customizable components. This makes possible to develop a good looking UI in less time.</p>
