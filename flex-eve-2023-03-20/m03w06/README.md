# M03W06 - CRUD with Express
### To Do
- [ ] CRUD over HTTP with Express
- [ ] Render data for the user using EJS templates
- [ ] Use forms to submit HTTP requests
- [ ] Explore the Post-Redirect-Get pattern
- [ ] Using Chrome DevTools to see requests and responses

### CRUD over HTTP
- API: Application Programming Interface
- CRUD: set of operations that is typically done on a particular *resource* (or set of resources)
  - C: Create (New Resource Form + Save)
  - R: Read (Index/List + Show)
  - U: Update (Edit Form + Update)
  - D: Delete

### Routes
- Web Servers communicates to clients (browsers) in HTTP protocol
- HTTP Verbs: GET, POST, PUT, PATCH, DELETE
- A **route** is made up of an HTTP *verb* and *path*
- RESTful API for CRUD operations

```
CRUD      METHOD      PATH

CREATE    GET         /books/new        # Display NEW book form
CREATE    POST        /books            # NEW book form submission
READ      GET         /books            # Display all books (index)
READ      GET         /books/:id        # Display specific book (show)
UPDATE    GET         /books/:id/edit   # Display EDIT book form
UPDATE    POST        /books/:id        # EDIT book form submission
DELETE    POST        /books/:id/delete # DELETE specific book
```

### EJS (Embedded JavaScript)
- Helps us write HTML templates
- EJS supports adding JS logic to HTML templates
- EJS is back-end, and runs BEFORE it is sent to the browser (i.e. EJS does NOT run in a browser)
- V in the MVC pattern for separation of concerns
- By default, Express assumes template files are in your project's `/views` directory.

### Forms vs Anchor Tags
- Anchor tags are generally used to link between websites or to different pages on the same site
- Anchor tags (`<a></a>`) only make `GET` requests
- Forms are used to transmit user data to servers
- Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)

#### Form with method="GET"
- Is able to send a request with query parameters (right in the URL / address bar)
- Easy to share / reproduce: e.g. navigating directly to `https://google.com/search?q=query` is the same thing as entering "query" into Google
- Appropriate for searches and retrieving resources consistently

```HTML
<form method="GET" action="https://google.com/search">
    <input name="q">
```

#### Form with method="POST"
- Not easily bookmarkable / reproducable
- Does not show submission values in address bar / URL
- Appropriate for sign-ins, creating/updating data, etc. => actions you don't want as easily repeated or visible

```HTML
<form method="POST" action="https://site.com/sign-in">
    <input name="user">
    <input name="pass">
```

### Useful Links
- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [Express](https://github.com/expressjs/express)
- [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
- [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
- [Nodemon](https://github.com/remy/nodemon#nodemon)
- [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)