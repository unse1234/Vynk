import { http, HttpResponse } from 'msw';
import usersData from './data';

const users = JSON.parse(localStorage.getItem('users')) || usersData;

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(users);
  }),

  http.post('/api/login', async ({ request }) => {
    const { identifier, password } = await request.json();

    const user = users.find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (!user) {
      return HttpResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const { password: _, ...safeUser } = user;
    return HttpResponse.json({ success: true, user: safeUser });
  }),

  http.post('/api/signup', async ({ request }) => {
    const newUser = await request.json();

    const exists = users.find(
      (u) => u.username === newUser.username || u.email === newUser.email
    );

    if (exists) {
      return HttpResponse.json(
        { success: false, message: 'Username or email already exists' },
        { status: 400 }
      );
    }

    const user = { id: users.length + 1, ...newUser };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    const { password: _, ...safeUser } = user;
    return HttpResponse.json({ success: true, user: safeUser });
  }),
];
