import { Link, useNavigate } from 'react-router-dom'
import Input from '../../shared/Input.jsx'
import Button from '../../shared/Button.jsx'
import { useReducer } from 'react'
import useAuthStore from './authStore.js'

// CHANGED: signup ke liye nayi fields add ki
const initialState = {
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  error: '',
  isLoading: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '' }
    case 'SET_ERROR':
      return { ...state, error: action.message, isLoading: false }
    case 'SET_LOADING':
      return { ...state, isLoading: action.value }
    default:
      return state
  }
}

const SignupPage = () => {  // CHANGED: LoginPage → SignupPage
  const [state, dispatch] = useReducer(reducer, initialState)
  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // CHANGED: saari fields check karo
    if (!state.username || !state.email || !state.password || !state.confirmPassword) {
      dispatch({ type: 'SET_ERROR', message: 'Please fill in all fields' })
      return
    }

    // CHANGED: password match check
    if (state.password !== state.confirmPassword) {
      dispatch({ type: 'SET_ERROR', message: 'Passwords do not match' })
      return
    }

    dispatch({ type: 'SET_LOADING', value: true })

    try {
      // CHANGED: /api/login → /api/signup
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // CHANGED: signup data bhej rahe hain
        body: JSON.stringify({
          username: state.username,
          email: state.email,
          phone: state.phone,
          password: state.password,
        }),
      })

      const data = await res.json()

      if (data.success) {
        login(data.user)
        // CHANGED: signup ke baad onboarding pe bhejo
        navigate('/onboarding')
      } else {
        dispatch({ type: 'SET_ERROR', message: data.message })
      }
    } catch {
      dispatch({ type: 'SET_ERROR', message: 'Something went wrong' })
    } finally {
      dispatch({ type: 'SET_LOADING', value: false })
    }
  }

  return (
    <div className="bg-linear-to-br from-sky-100 via-blue-100 to-indigo-100 min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <h1 className="logo text-5xl font-bold text-center text-slate-700 drop-shadow-sm">
        Vynk
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 p-8 sm:p-10 rounded-3xl w-full max-w-sm
                   bg-white/10 backdrop-blur-4xl
                   border border-white/70
                   shadow-[0_8px_32px_rgba(100,120,180,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]"
      >
        {/* CHANGED: username field */}
        <Input
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'username', value: e.target.value })}
        />

        {/* CHANGED: email field */}
        <Input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
        />

        {/* CHANGED: phone field — optional */}
        <Input
          type="tel"
          placeholder="Phone (optional)"
          value={state.phone}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
        />

        {/* CHANGED: password */}
        <Input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
        />

        {/* CHANGED: confirm password — login mein nahi tha */}
        <Input
          type="password"
          placeholder="Confirm Password"
          value={state.confirmPassword}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'confirmPassword', value: e.target.value })}
        />

        {state.error && <p className="text-sm text-red-500 w-full">{state.error}</p>}

        {/* CHANGED: Login → Sign Up */}
        <Button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Creating account...' : 'Sign Up'}
        </Button>

        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-300/60" />
          <span className="text-xs text-slate-400">or</span>
          <div className="flex-1 h-px bg-slate-300/60" />
        </div>

        <Button variant="google">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>

        {/* CHANGED: Sign up → Login link */}
        <p className="text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignupPage  // CHANGED: LoginPage → SignupPage