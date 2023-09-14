<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>add course</title>
        <link rel="stylesheet" href="./style.css"/>
        <!--import vue.js-->
        <script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>
    </head>
    <body>
        <div id="app">
            <!--top bar with oc logo-->
            <div class="top-bar">
                <div class="banner-content">
                    <img src="./public/OClogo.png" class="logo" alt="OC logo">
                    <p class="banner-text">OC Course Listing</P>
                </div>
            </div>
            
            <!--course information component-->

            <form>
                <label for="Department">Department</label><br>
                <input type="text" id="departmentBox" name="Department"><br>
                <label for="CouresNumber">Course Number</label><br>
                <input type="text" id="courseNumberBox" name="courseNumber"><br>
                <label for="CourseName">Course Name</label><br>
                <input type="text" id="courseNameBox" name="CourseName"><br>

            </form>

            
        </div>
    </body>
</html>