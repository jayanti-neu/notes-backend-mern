# MeetingNotes REST API

## Description
This project implements a RESTful API for managing meeting notes. It allows developers to perform CRUD (Create, Read, Update, Delete) operations on meeting notes stored in a MongoDB database. The API also supports filtering meeting notes based on keywords in the title or content, as well as within action items, and filtering by create date range.

## User Requirements
1. **Fetch All Existing Meeting Notes:**
   - Endpoint: `GET /meetingNotes`
   - Description: Fetches all existing meeting notes.
   
2. **Filter Meeting Notes:**
   - Endpoint: `GET /meetingNotes/search?keyword=<keyword>&startDate=<startDate>&endDate=<endDate>`
   - Description: Filters meeting notes based on keywords in the title or content, and within action items. Also allows filtering by create date range.

3. **Add a Meeting Note:**
   - Endpoint: `POST /meetingNotes`
   - Description: Adds a new meeting note with provided details.

4. **Update a Meeting Note:**
   - Endpoint: `PUT /meetingNotes/:id`
   - Description: Updates an existing meeting note, including the action items.

5. **Delete a Meeting Note:**
   - Endpoint: `DELETE /meetingNotes/:id`
   - Description: Deletes a meeting note with the specified ID.

## Technical Requirements
- Developed using Node.js, Express.js, and Mongoose.
- Express framework used for developing endpoints.
- MongoDB utilized for the persistence layer.
- MeetingNote object consists of properties: id, title, content, list of action items, and createdDate.

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the MongoDB server.
4. Run the application using `npm start`.
5. Access the API endpoints as described in the User Requirements section.


