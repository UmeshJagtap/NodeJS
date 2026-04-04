import express from 'express';
import session from 'express-session';

const app = express();

app.use(
  session({
    secret: 'mySecretKey123',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // maxAge: 10000 * 60 * 60, // 1 hour
      maxAge: 1000 * 60 * 2, // 2 minutes for testing
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: false, // Set to true if using HTTPS
    },
  })
);

app.get('/', (req, res) => {
  res.send(
    "<h2>Welcome to the Home Page</h2> <p>Please go to <a href='/login'>/login</a> to create a session. </p>"
  );
});

// Create a session   'connect.sid' in Application > Cookies
app.get('/login', (req, res) => {
  req.session.user = 'Mohit';
  res.send(
    "Session created for user: Mohit. <p>Please go to <a href='/dashboard'>/dashboard</a> to access the dashboard </p> <p>Please go to <a href='/profile'>/profile</a> to access the profile page. </p>"
  );
});

// Protecting routes with session
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(
      `Welcome to the dashboard, ${req.session.user}!  <p>Logout <a href='/logout'>here</a>.</p>`
    );
  } else {
    res.send('Please login to access the dashboard.');
  }
});

app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user}! This is your profile page.`);
  } else {
    res.send('No active session. Please log in first.');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Error logging out.');
    }
    res.send(
      'Session destroyed. You have been logged out. <p>Please go to <a href="/">Home</a> to start again.</p>'
    );
  });
});

// app.get('/', (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.send(`Number of views: ${req.session.views}`);
//   } else {
//     req.session.views = 1;
//     res.send('Welcome to the session demo. Refresh the page!');
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
