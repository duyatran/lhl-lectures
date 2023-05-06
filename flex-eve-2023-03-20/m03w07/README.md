# M03W07 - Security & Real World HTTP Servers

### Links
- [Lecture recording](https://vimeo.com/824408630/8c747bdb5b)
- [Code repo](https://github.com/duyatran/lhl-lectures/tree/master/flex-eve-2023-03-20/m03w07)

### To Do
- [x] Storing passwords
- [x] Encrypted cookies (not really) => Signed cookies with `cookie-session`
- [x] HTTP Secure (HTTPS)
- [-] REST (some review reading, covered last week)
### Storing Passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved
* We make hashing more secure by adding a _salt_ to the original string prior to hashing
* This [helps to protect against Rainbow Table attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)

### Encrypted Cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two-way process: encrypted strings can be decrypted by the intended recipient with **shared keys**
  * Sender and recipient(s) need to share:
    * one key: symmetric encryption
    * two keys: assymmetric encryption (public and private key)
* Stretch: The `cookie-session` middleware introduced in [this activity](https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m03w7/activities/546?journey_step=37&workbook=10) only *signs* your cookies
  - Signing adds some protection against tampering (`cookie-session` can detect if the cookie is modified and refuses to serve the request), but it is **not** encryption (your cookie is only [Base64-encoded](https://emn178.github.io/online-tools/base64_encode.html), which is basically still plaintext).
  - Other middleware is required to encrypt cookies, e.g. [cookie-encrypter](https://www.npmjs.com/package/cookie-encrypter)

### HTTP Secure (HTTPS)
* A man-in-the-middle (MITM) attacker can still listen to your HTTP communication (which is in plaintext) and steal your cookies
  * Even if your cookies are *signed and encrypted*, the MITM attacker does **not** need to know the content of your cookies, as they can just use the session cookies to pretend to be you
* HTTP**S** uses Transport Layer Security (TLS, formerly known as SSL) to encrypt communication between clients and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
  * The public key is available to anyone who wants it and is used to encrypt the communication
  * The private key is known only to the receiver and is used to decrypt the communication
* Stretch: learn more about HTTPS [here](https://www.youtube.com/watch?v=T4Df5_cojAs)

### REST (Representational State Transfer)

* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | POST | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | POST | /resources/:id/delete | Delete an existing resource (Delete) |

* RESTful API's have some advantages:
  * If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out
  * Results in clean URLs (ie. `/resources` instead of `/get-my-resource`)
  * The desired action is implied by the HTTP verb
  * This method of specifying URLs is chainable (eg. `/users/123`, `/users/123/resources` or `/users/123/resources/456`)

* Selectors are always plural (eg. `/resources`, `/users`)
* Actions are always singular (eg. `/login`, `/register`)

#### More HTTP Methods
- We have more [*verbs*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available to us than just `GET` and `POST`
- Popular ones are `PUT`, `PATCH`, and `DELETE`
- `PUT`: used to replace an existing resource
- `PATCH`: update part of an exisiting resource
- `DELETE`: delete an existing resource
- We can access these other methods via AJAX requests (we'll introduce you to AJAX in week 4) or by using the [`method-override`](https://www.npmjs.com/package/method-override) package
- Using these new verbs, our routes table now looks like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | PUT | /resources/:id | Replace a resource (Edit) |
  | PATCH | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | DELETE | /resources/:id | Delete an existing resource (Delete) |

  ### Useful Links
* [7 Cryptography Concepts EVERY Developer Should Know](https://www.youtube.com/watch?v=NuyzuNBFWxQ)
* [Plain Text Offenders](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)
* [How does HTTPS work? What's a CA? What's a self-signed Certificate?](https://www.youtube.com/watch?v=T4Df5_cojAs)
* [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
* [List of common Express middleware](https://expressjs.com/en/resources/middleware.html)
* [Some RESTful API Good Pratices](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
