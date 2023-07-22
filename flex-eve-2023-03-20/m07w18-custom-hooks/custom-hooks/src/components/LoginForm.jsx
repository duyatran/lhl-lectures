import useInput from "../hooks/useInput";

const LoginForm = () => {

  const usernameInput = useInput('');
  const passwordInput = useInput('');

  return (
    <>
      <h2>LoginForm component</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type='text'
          id='username'
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        >
        </input>

        <label htmlFor="password">Password</label>
        <input
          type='text'
          id='password'
          // value={passwordInput.value}
          // onChange={passwordInput.onChange}
          {... passwordInput }
          >
        </input>

        <h3>username: {usernameInput.value}</h3>
        <h3>password: {passwordInput.value}</h3>
      </form>
    </>
  )
}

export default LoginForm;