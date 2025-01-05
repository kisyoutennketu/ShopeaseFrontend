import React, { useCallback, useEffect } from 'react'
import { logOut } from '../../utils/jwt-helper';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/features/common';
import { fetchUserDetails } from '../../api/userInfo';
import { loadUserInfo, selectUserInfo } from '../../store/features/user';

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);


  useEffect(() => {
    dispatch(setLoading(true));
    fetchUserDetails().then(res => {
      dispatch(loadUserInfo(res));
    }).catch(err => {

    }).finally(() => {
      dispatch(setLoading(false));
    })
  }, []);



  const onLogOut = useCallback(() => {
    logOut();
    navigate("/");
  }, [navigate]);





  return (
    <div className='p-8'>
      {userInfo?.email && (
        <>
          <p className='text-xl font-bold'>Hello {userInfo?.firstName}</p>
          <p>Welcome to your account</p>
          <div className='md:flex mt-4'>
            <ul className='lex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0' >
              <li>
                <NavLink
                  to={"/account-details/profile"}
                  className={({ isActive }) => [
                    isActive? "bg-black hover:bg-gray-400" : "bg-gray-400 hover:bg-black",
                    "inline-flex items-center px-4 py-3 text-white rounded-lg active w-full"
                  ].join(" ")} >
                  <svg
                    className="w-4 h-4 me-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/account-details/orders"}
                  className={({ isActive }) => [
                    isActive? "bg-black hover:bg-gray-400" : "bg-gray-400 hover:bg-black",
                    "inline-flex items-center px-4 py-3 text-white rounded-lg active w-full"
                  ].join(" ")} >
                  <svg
                    className="w-4 h-4 me-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/account-details/settings"}
                  className={({ isActive }) => [
                    isActive? "bg-black hover:bg-gray-400" : "bg-gray-400 hover:bg-black",
                    "inline-flex items-center px-4 py-3 text-white rounded-lg active w-full"
                  ].join(" ")} >
                  <svg
                    className="w-4 h-4 me-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Settings
                </NavLink>
              </li>
            </ul>
            <div className='px-4 w-full rounded-lg' >
              <Outlet />
            </div>
          </div>
        </>)}
    </div>
  )
}

export default Account