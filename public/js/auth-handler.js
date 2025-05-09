import { auth, signUpUser, signInUser, signOut } from '../../frontend/src/services/auth.js';

// Handle auth state changes
auth.onAuthStateChanged((user) => {
  const authStatusEl = document.getElementById('auth-status');
  const loginFormEl = document.getElementById('login-form');
  const signupFormEl = document.getElementById('signup-form');
  const logoutBtnEl = document.getElementById('logout-btn');
  
  if (user) {
    authStatusEl.textContent = `Logged in as: ${user.email}`;
    loginFormEl.style.display = 'none';
    signupFormEl.style.display = 'none';
    logoutBtnEl.style.display = 'block';
  } else {
    authStatusEl.textContent = 'Not logged in';
    loginFormEl.style.display = 'block';
    signupFormEl.style.display = 'block';
    logoutBtnEl.style.display = 'none';
  }
});

// Add event listeners
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
  try {
    await signUpUser(email, password);
  } catch (error) {
    console.error("Error signing up:", error);
    alert(error.message);
  }
});

document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    await signInUser(email, password);
  } catch (error) {
    console.error("Error signing in:", error);
    alert(error.message);
  }
});

document.getElementById('logout-btn')?.addEventListener('click', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    alert(error.message);
  }
});
