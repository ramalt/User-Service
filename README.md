
# User Service ⚡
Complete user login, sign up, reset pass operations.
## About 

- #### Clear design
    this repo created clear folder structure and seperated logic and http layers.
- #### Two Factor Verification
    send verification link to user via verified mail and update user password with (süreli) JWT token. Token payload has user email and user id.
- #### JWT auth
    Create when user login or register and store as request field.


## Usage

- Repository Pattern: Write all data access methods.
- Services: Place here all business logic using repositories.
- app and index: server and express is seperated with index.js and app.js. index.js is entrypoint of project.


## Installation ✅

Bu bölümde, projeyi yerel bilgisayarınıza nasıl kuracağınızı anlatabilirsiniz. Aşağıda temel adımları bulabilirsiniz:
1. Download  or  clone  the  project  files.  
2. Install  the  dependencies.  `npm  install`  
3. Create a `.env` file and copy from `.env.dev`
4. `.env` file has `APPMODE` parameter. `APPMODE` default value is "development". 
5. Run  the  project. `npm run dev` (uses nodemon)

---


This  README.md  file  is  designed  for  a user login operations  simple  project.  You  can  add  more  details  and  edit  it  as  needed.  Feel  free  to  modify  this  file  to  provide  more  information  about  the  project  and  assist  users.  Happy  coding! 🔥
