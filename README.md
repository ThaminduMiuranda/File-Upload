# File-Upload

## Overview

This project requires Node.js for managing dependencies and running scripts. Follow the instructions below to set up your environment.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download and install it from [Node.js official website](https://nodejs.org/).

## Installation

1. **Clone the repository**:

2. **Install Node.js dependencies**:
    - Open your terminal in the project directory.
    - Run the following command to initialize a `package.json` file:
      ```bash
      npm init -y
      ```
    - This will create a `package.json` file with default values, which is necessary for managing your project's dependencies.

3. **Install Required Packages** (if any):
    - After running `npm init -y`, you can Install Express (for handling web requests) and multer (for handling file uploads):
      ```bash
      npm install express multer
      ```

## Running the Project

1. **Start the Server**:
    - In your terminal, run the server:
      ```bash
      node server.js
      ```
    - The server will start running at http://localhost:3000.

2. **Test the file upload**:
    - Open http://localhost:3000 in your browser.
    - Select a subject, lesson, and file, and click "Upload".
    - After uploading, check the uploads directory in your project folder. You should see a folder structure like uploads/subject_name/lesson_name/, with the uploaded file inside.



## Troubleshooting

- If you encounter any issues during installation or while running the project, make sure that Node.js is correctly installed and that you are in the correct directory.

---

Happy coding!
