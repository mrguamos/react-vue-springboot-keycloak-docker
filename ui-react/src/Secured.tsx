import { userManager } from '@/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Secured() {
  const [data, setData] = useState({});

  const getData = async () => {
    const user = await userManager.getUser();
    const { data } = await axios.get('/api/secured', {
      headers: {
        Authorization: `Bearer ${user?.access_token}`,
      },
    });
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Message from secured resource : {JSON.stringify(data)}</p>
      <div>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Secured;
