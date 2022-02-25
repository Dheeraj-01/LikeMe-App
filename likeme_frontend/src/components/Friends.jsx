import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { client } from '../client';
import { friendsQuery } from '../utils/data';

const Friends = ({ user }) => {
  console.log(user);
  const [friendsData, setfriendsData] = useState(false);

  console.log("This is friends Data ", friendsData);

  useEffect(() => {
    const query = friendsQuery(user?._id);
    client.fetch(query).then((data) => {
      setfriendsData(data[0]?.friend);
    });
  }, [user])

  if (!friendsData) return (<>No Friends</>);

  return (
    <div>
      {friendsData && friendsData?.map((data, index) => (
        <>
          <div className='flex justify-start items-center p-3'>
            <p className="font-semibold capitalize p-2 m-2">{index + 1}</p>
            <Link key={index} to={`/user-profile/${data?.friendId}`} className="flex gap-2 mt-2 items-center">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={data?.image}
                alt="user-profile"
              />
              <p className="font-semibold capitalize">{data?.name}</p>
            </Link>
          </div>
        </>
      ))}

    </div>
  )
}

export default Friends