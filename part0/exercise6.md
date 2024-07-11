sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    The browser executes JavaScript code to modify the DOM structure and then sends the submitted note to the server via an HTTP POST request. The server processes the request without POST/REDIRECT/GET so the data loads on the page without refreshing