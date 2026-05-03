const usersData = [
  {
    id: 1,
    name: 'Ali',
    username: 'ali123',
    email: 'ali@example.com',
    phone: '123-456-7890',
    password: 'password123', // NOTE: In real app passwords would be hashed — never store plain text
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Software developer and tech enthusiast.',
    followers: 120,
    following: 80,
    posts: 45,
  },
  {
    id: 2,
    name: 'Sara',
    username: 'sara456',
    email: 'sara@example.com',
    phone: '098-765-4321',
    password: 'password456', // NOTE: In real app passwords would be hashed — never store plain text
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'UX designer and creative thinker.',
    followers: 95,
    following: 110,
    posts: 30,
  },
  {
    id: 3,
    name: 'John',
    username: 'john789',
    email: 'john@example.com',
    phone: '555-123-4567',
    password: 'password789', // NOTE: In real app passwords would be hashed — never store plain text
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Digital marketer and content creator.',
    followers: 150,
    following: 200,
    posts: 60,
  },
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(usersData))
}

export default usersData;
