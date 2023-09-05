import { useState } from 'react';

const LoginPage = () => {
  const [isExistingUser, setExistingUser] = useState(true);

  const handleToggle = () => setExistingUser(!isExistingUser);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-4">{isExistingUser ? 'Login' : 'Sign Up'}</h2>
        <div className="flex flex-col gap-2">
          {!isExistingUser && <input type="text" placeholder='Display name' className="border rounded-md px-4 py-2 focus:outline-none focus:border-primaryColor"/>}
          <input type="text" placeholder='Email address' className="border rounded-md px-4 py-2 focus:outline-none focus:border-primaryColor"/>
          <input type="text" placeholder='Password' className="border rounded-md px-4 py-2 focus:outline-none focus:border-primaryColor"/>
        </div>
        <button className="m-auto mt-4 bg-primaryColor hover:bg-[#df4f30] text-white font-bold py-2 px-4 rounded">
          {isExistingUser ? 'Login' : 'Register'}
        </button>
        <p className='pt-3 text-xs text-center'>{isExistingUser ? 'If not an existing user?' : 'Already an user?'} <span className='cursor-pointer text-blue-600 hover:text-blue-700 underline' onClick={handleToggle}>{isExistingUser ? 'Sign up' : 'Login'}</span></p>
      </div>
    </div>
  );
};

export default LoginPage;