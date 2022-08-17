// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import Layout from '../layout/Layout';
// import { colors } from '../theme/theme';
// import CommonButton from './elements/CommonButton';
// import Logo from './Logo';
// import { getCookie, removeCookie } from '../shared/Cookie';
// import jwt from 'jwt-decode';
// import { __getUser } from '../redux/modules/userSlice';

const Header = () => {
  //   const navigate = useNavigate();
  //   // const [isLogin, setIsLogin] = useState(false);
  //   const [user, setUser] = useState('');
  //   const hanedleLogout = () => {
  //     removeCookie('ACCESS_TOKEN');
  //     alert('로그아웃');
  //     window.location.reload();
  //   };
  //   useEffect(() => {
  //     const token = getCookie('ACCESS_TOKEN');
  //     console.log(jwt(token));
  //     if (token) setUser(jwt(token));
  //   }, []);
  //   return (
  //     <StHeader>
  //       <Layout>
  //         <StHeaderInner>
  //           <Logo height='100%' />
  //           <StLoginGroup>
  //             <>
  //               {user ? (
  //                 <StUser>
  //                   <StLoginText>
  //                     <StName>{user.sub}</StName>님 환영합니다.
  //                   </StLoginText>
  //                   <StButton>
  //                     <CommonButton
  //                       bgcolor={colors.white}
  //                       fontcolor={colors.black}
  //                       text='로그아웃'
  //                       width='100px'
  //                       height='36px'
  //                       onClick={hanedleLogout}
  //                     />
  //                   </StButton>
  //                 </StUser>
  //               ) : (
  //                 <>
  //                   <CommonButton
  //                     bgcolor={colors.white}
  //                     fontcolor={colors.black}
  //                     width='100px'
  //                     height='36px'
  //                     text='로그인'
  //                     onClick={() => navigate('/login')}
  //                   />
  //                   <CommonButton
  //                     bgcolor={colors.white}
  //                     fontcolor={colors.black}
  //                     width='100px'
  //                     height='36px'
  //                     text='회원가입'
  //                     onClick={() => navigate('/signup')}
  //                   />
  //                 </>
  //               )}
  //             </>
  //           </StLoginGroup>
  //         </StHeaderInner>
  //       </Layout>
  //     </StHeader>
  //   );
};

export default Header;

// const StHeader = styled.header`
//   height: 150px;
//   background: ${colors.primary};
// `;

// const StHeaderInner = styled.div`
//   position: relative;
//   width: 100%;
//   height: 150px;
// `;

// const StUser = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const StLoginGroup = styled.div`
//   position: absolute;
//   right: 0;
//   bottom: 20px;
//   display: flex;

//   button + button {
//     margin-left: 10px;
//   }
// `;

// const StLoginText = styled.div`
//   color: white;
//   font-size: 20px;
//   margin-right: 10px;
// `;

// const StButton = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const StName = styled.span`
//   font-weight: bold;
// `;
