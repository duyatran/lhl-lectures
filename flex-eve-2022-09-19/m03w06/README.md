# M03D06 - CRUD with Express
### To Do
- [ ] Implement CRUD over HTTP with Express
- [ ] Render data for the user using EJS templates
- [ ] Use forms to submit HTTP requests
- [ ] Explore the Post-Redirect-Get pattern
- [ ] Using Chrome DevTools to see requests and responses
- [ ] Practice debugging Express

### CRUD and BREAD
- API: Application Programming Interface
- CRUD: set of operations (4-5) that is typically done on a particular **resource** (or group of resources)
  - C: Create
  - R: Read (resource/resources)
  - U: Update
  - D: Delete

- BREAD:
  - B: Browse/List resources
  - R: Read a resource
  - E: Edit
  - A: Add
  - D: Delete

- Web Servers communicates to clients (browsers) in HTTP protocol
- HTTP Verbs: GET, POST, PUT, PATCH, DELETE
- RESTful API for CRUD operations

### Routes
- A route is made up of an HTTP **verb** and **path**
- Examples:
  - `GET "/books"`
  - `POST "/books"`
  - `GET "/books/:id"`

### Forms vs Anchor Tags
* Anchor tags (`<a></a>`) only make `GET` requests
  * Anchor tags are generally used to link between websites or to different pages on the same site
* Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  * Forms are used to collect and submit user information
* If data is being retrieved, use a `GET` request
* If data is being updated/changed/created, use a `POST` request (therefore, a form)
  * NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)