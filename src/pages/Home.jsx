import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState('User');
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }


    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.userId) {
      fetch(`http://localhost:3001/api/user/${storedUser.userId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch user');
          }
          return res.json();
        })
        .then((data) => {
          setUsername(data.username);
        })
        .catch(() => {
          setUsername(storedUser.username || 'User');
        });
    }
  }, []);

  const handleSendMessage = () => {
    navigate('/send');
  };

  const handleGenerateLink = () => {
    alert('Your unique link: https://ngilo.app/your-unique-id');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{greeting}, {username}!</h1>
      <p>What would you like to do?</p>

      <button onClick={handleSendMessage} style={{ marginRight: '1rem', padding: '10px 20px' }}>
        Send Anonymous Message
      </button>

      <button onClick={handleGenerateLink} style={{ padding: '10px 20px' }}>
        Generate Link
      </button>
    </div>
  );
}

export default Home;
