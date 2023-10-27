import { signInWithGoogle, signOut, useAuthState } from '../../utilities/firebase';
import './AuthButton.css';

const SignInButton = () => (
  <button id="auth-button" className="ms-auto btn btn-dark" onClick={signInWithGoogle}><i class="bi bi-person-fill"/> Sign in</button>
);

const SignOutButton = () => (
  <button id="auth-button" className="ms-auto btn btn-dark" onClick={signOut}><i class="bi bi-person-fill"/> Sign out</button>
);

export const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};