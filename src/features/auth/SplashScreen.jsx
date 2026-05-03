import useAuthStore from './authStore';
import data from '../../mocks/data.js';
function SplashScreen() {
  const { isLoggedIn, login, logout } = useAuthStore();

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-gray-800 p-4 rounded-lg w-full max-w-md"
        >
          <h2 className="text-white text-xl font-bold">{item.username}</h2>
        </div>
      ))}
      <h1 className="text-white text-3xl font-bold">Pulse ⚡</h1>
      <p className="text-gray-400">
        Logged in: {isLoggedIn ? 'Yes ✅' : 'No ❌'}
      </p>
      <button
        onClick={() => login({ id: 1, name: 'Ali', username: 'ali123' })}
        className="bg-purple-600 text-white px-6 py-2 rounded-full"
      >
        Test Login
      </button>
      <button
        onClick={logout}
        className="bg-gray-800 text-white px-6 py-2 rounded-full"
      >
        Test Logout
      </button>
    </div>
  );
}

export default SplashScreen;
