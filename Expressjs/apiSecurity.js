/*
1. What is JWT token ?
Ans. JWT stands for JSON WEB TOKEN. It is compact and self-contained token format
    that is commonly used for authentication and authorization purpose in web applications.
        JWT's can be signed using a secret or a public / private key pair.

    The tokens consist of three compact parts:
    - Header
    - Payload
    - Signature

    A well formed JWT token consist of three concatinated BASE 64 url-encoded strings,
    separated by dots.



2. What is access token and refresh token in JWT ?
Ans. 1) Access Token:- An access token is a short lived token that is used to authenticate
        and authorize a user to access protected resources or endpoints on a server.

    2) Refresh Token:- A refresh token is a long lived token that is used to obtain 
        a new access token after the current access token is expire or become invalid.



3. What are Authentication and Authorization ?
Ans. Authentication verifies the identity of a user or a service and Authorization
    determines their access rights.

        Authentication is done before the authorization process, whereas the authorization
    process is done after the authentication process.



4. How do we check different JWT tokens for different users ?
Ans. When you are encoding the JWT token, encode the use role also. When you decode
    the JWT token and get the users role then create one middleware for check users role.

    
5. Params is URL
Ans. /api/profile/:profileId



6. How to secure API ?
Ans. API security in node js
    1) Authentication
    2) Authorization
    3) Input validation
    4) HTTPS or TLS
    5) CORS
    6) Rate limiting and Ddos protection
    7) Session Management
    8) Error Handling
    9) Security Headers
    10) API versioning



7. What is CORS ?
Ans. CORS in node js stands for Cross-Origin-Resource-Sharing. It is a mechanism by which resources
    are shared across different servers.



8. Why do we use CORS ?
Ans. All requests made from the frontend of a different origin or to a backend of a different origin
    will be blocked by browser. CORS allows us to bypass this policy in case of scenarious where accessing
    third party resources becomes necessary.
*/