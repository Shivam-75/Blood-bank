# Blood Bank Project

### DEMO:https://blood-bank-gk62.vercel.app/
### git clone :https://github.com/Shivam-75/Blood-Bank.git
## This is My best Project based on Mern stack Backend & frontend are Included here

#### Technology ,library & modules :-

- React.js
- Node.js
- Express.js
- mongodb
- mongoose

#### Security :-

- JWT Authentication or
- dual base Authentication or
- AccessToken And RefreshToken

# Step to Run Project

### follow the Steps

- Frontend Setup

  - Setup .env file : VITE_URL = http://localhost:3000/api/v1
  - run command : npm run dev

- Backend Setup

  - Setup .env file : PORT = 3000
  - URL = given url
  - CLOUDNARY = toekn
  - API_KEY_CLODUNARY = url token
  - API_SECREAT_KEY_CLODUNARY = secret key
  - ACCESS_TOKEN_SECRET = access toekn secreat creat
  - ACCESS_TOKEN_EXPIRY = time given
  - REFRESH_TOKEN_SECRET = secreat ket provide
  - REFRESH_TOKEN_EXPIRY = time given

  @ install all package like : express mongoose jwt bcypt.js cookie-parse etc

- Run Comand : npm run dev in nodemon is installed other wise node index.js

```Directory structure:
└── shivam-75-blood-bank/
    ├── README.md
    ├── backend/
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .gitignore
    │   └── src/
    │       ├── controller/
    │       │   ├── bloodController.controller.js
    │       │   ├── campController.controller.js
    │       │   ├── donarController.controller.js
    │       │   ├── testController.controller.js
    │       │   └── userController.controller.js
    │       ├── database/
    │       │   └── database.js
    │       ├── db/
    │       │   └── database.js
    │       ├── middleware/
    │       │   ├── authAdmin.Middleware.js
    │       │   └── authAdminMiddleware.middleware.js
    │       ├── models/
    │       │   ├── bloodRequest.model copy.js
    │       │   ├── bloodRequest.model.js
    │       │   ├── camp.models.js
    │       │   ├── donar.models.js
    │       │   └── user.models.js
    │       └── routes/
    │           ├── adminRoutes.route.js
    │           ├── aiRoutes.route.js
    │           ├── bloodrequest.route.js
    │           ├── campRoute.route.js
    │           ├── donarRoute.route.js
    │           └── userRoute.routes.js
    └── frontend/
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vercel.json
        ├── vite.config.js
        ├── .gitignore
        ├── public/
        │   ├── blood/
        │   ├── docotr/
        │   ├── hero/
        │   └── hospital/
        └── src/
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── admin/
            │   ├── AdminError.jsx
            │   ├── NavAdmin.jsx
            │   ├── adminComponent/
            │   │   ├── AdminLogin.jsx
            │   │   ├── BloodRequest.jsx
            │   │   ├── Dashboard.jsx
            │   │   ├── DashboardCard.jsx
            │   │   ├── DonarRequest.jsx
            │   │   ├── ListUser.jsx
            │   │   └── Search.jsx
            │   ├── adminLayout/
            │   │   └── AdminLayout.jsx
            │   └── serviceLaout/
            │       └── Apies.jsx
            ├── assets/
            │   └── item.js
            ├── components/
            │   ├── card/
            │   │   ├── PreDonationTests.jsx
            │   │   ├── ReusableCard.jsx
            │   │   └── Service.jsx
            │   ├── DeleteAccount/
            │   │   └── AccountDelete.jsx
            │   ├── hero/
            │   │   ├── Hero0.jsx
            │   │   ├── Hero1.jsx
            │   │   ├── Hero2.jsx
            │   │   ├── HeroImg.jsx
            │   │   └── Hospital.jsx
            │   ├── layout/
            │   │   └── Layout.jsx
            │   ├── loading/
            │   │   ├── ChatGpt.jsx
            │   │   └── Loading.jsx
            │   ├── Navbar/
            │   │   ├── Footer.jsx
            │   │   └── Nav.jsx
            │   ├── ReqBlood/
            │   │   └── Reciever.jsx
            │   ├── signup/
            │   │   └── Login.jsx
            │   └── Video/
            │       └── Videos.jsx
            ├── page/
            │   ├── Bloodcategory.jsx
            │   ├── Capm.jsx
            │   ├── Donar.jsx
            │   ├── Home.jsx
            │   ├── Setting.jsx
            │   └── Signup.jsx
            ├── service/
            │   └── Api.jsx
            └── store/
                ├── Authstore.jsx
                └── datas.jsx

https://gittodoc.com/Shivam-75/Blood-Bank
```
