import React from "react";

interface ILikeIconProps {
  isLiked?: boolean;
}

const LikeIcon: React.FC<ILikeIconProps> = ({ isLiked }) => {
  if (isLiked)
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7351 20.7353C12.5136 20.8627 12.2115 21 12 21C11.7885 21 11.4864 20.8627 11.2749 20.7353C5.59517 17.2059 2 13.098 2 8.92157C2 5.45098 4.44713 3 7.70997 3C9.57301 3 11.1037 3.87255 12 5.18627C12.9164 3.86275 14.427 3 16.29 3C19.5529 3 22 5.45098 22 8.92157C22 13.098 18.4048 17.2059 12.7351 20.7353Z"
          fill="#d40035"
        />
      </svg>
    );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C12.2115 21 12.5136 20.8627 12.7351 20.7353C18.4048 17.2059 22 13.098 22 8.92157C22 5.45098 19.5529 3 16.29 3C14.427 3 12.9164 3.86275 12 5.18627C11.1037 3.87255 9.57301 3 7.70997 3C4.44713 3 2 5.45098 2 8.92157C2 13.098 5.59517 17.2059 11.2749 20.7353C11.4864 20.8627 11.7885 21 12 21ZM12 19.3431C11.9597 19.3431 11.8892 19.2941 11.7986 19.2255C7.57905 16.5 3.62135 12.5686 3.62135 8.92157C3.62135 6.31373 5.35347 4.57843 7.68983 4.57843C9.58308 4.57843 10.6707 5.72549 11.3152 6.70588C11.5871 7.09804 11.7583 7.20588 12 7.20588C12.2417 7.20588 12.3927 7.08824 12.6848 6.70588C13.3797 5.7451 14.427 4.57843 16.3102 4.57843C18.6465 4.57843 20.3787 6.31373 20.3787 8.92157C20.3787 12.5686 16.4209 16.5 12.2115 19.2255C12.1108 19.2941 12.0403 19.3431 12 19.3431Z"
        fill="#7B8E98"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.3432C11.9597 19.3432 11.8892 19.2942 11.7986 19.2255C7.57904 16.5001 3.62134 12.5687 3.62134 8.92163C3.62134 6.31379 5.35346 4.57849 7.68982 4.57849C9.58307 4.57849 10.6707 5.72555 11.3152 6.70594C11.5871 7.0981 11.7583 7.20594 12 7.20594C12.2417 7.20594 12.3927 7.08829 12.6848 6.70594C13.3796 5.74516 14.427 4.57849 16.3102 4.57849C18.6465 4.57849 20.3786 6.31379 20.3786 8.92163C20.3786 12.5687 16.4209 16.5001 12.2115 19.2255C12.1108 19.2942 12.0403 19.3432 12 19.3432Z"
        fill="white"
      />
    </svg>
  );
};

export default LikeIcon;
