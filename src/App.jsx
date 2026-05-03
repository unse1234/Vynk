import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SplashScreen from './features/auth/SplashScreen'
import LoginPage from './features/auth/LoginPage'
import OnboardingPage from './features/auth/OnboardingPage'
import FeedPage from './features/feed/FeedPage'
import CreatePostPage from './features/feed/CreatePostPage'
import ExplorePage from './features/explore/ExplorePage'
import NotificationsPage from './features/notifications/NotificationsPage'
import ProfilePage from './features/profile/ProfilePage'
import SignupPage from './features/auth/SignupPage'
import ProtectedRoutes from './shared/ProtectedRoutes.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App