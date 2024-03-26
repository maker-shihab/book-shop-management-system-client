
export const filterUserInfo = (userData) => {
  const { email, role, ...basicInfo } = userData;
  let userDetails = { ...basicInfo };
  if (role === 'seller') {
    userDetails = {role, email,...userData.seller };
  } else if (role === 'donar') {
    userDetails = {role, email, ...userData.donar };
  }
  return userDetails;
};
