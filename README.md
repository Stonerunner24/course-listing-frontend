# Course Listing Frontend in Vue 3

This application allows users to create and maintain a list of Courses . Please visit https://github.com/Stonerunner24/course-listing-backend for the backend repository.

## Project Setup

1. Clone the project into your **XAMPP/xamppfiles/htdocs** directory.

```
git clone https://github.com/Stonerunner34/course-listing-frontend.git
```

2. Install the project.

```
npm install
```

3. Make sure **Apache** is running.

   - We recommend using XAMPP to serve this project.
   - In XAMPP, make sure that **Apache** is running.

4. Compile and run the project locally.

```
npm run dev
```

5. If you are wanting to serve your project for production:
    - You will need to have a **.htaccess** file.
    - It should be in your **public** folder.
    - Visual Studio Code will auto format it to where the file will not be read correctly, so add the following rule to your **settings.json** in Visual Studio Code.

```
"files.associations": {
    "**/*.htaccess": "plaintext"
},
```

6. (Optional) Compile the project for production.

```
npm run build
```

7. (Optional) Lint and fix the project files.

```
npm run lint
```

## How to Use this Product
On running this application, it will read from your database and display the list of courses.
To add a new course click the add new course button.
In the add new course page, fill in the information and press save.
To see course information, click the three bars button to the right side of a course.
To delete a course, press the trash can button to the right side of a course.
To edit a course, press the pencil icon to the right side of a course.


## Credits
Product Owner: Trina Kenyon
Scrum Master: Elijah Coyle
Scribe: Daniel Billingsley
Frontend Development:
   Elijah Coyle
   Nicholas Drebot
   Daniel Billingsly
   Trina Kenyon

