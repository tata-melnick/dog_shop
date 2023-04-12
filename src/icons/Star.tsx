import React from "react";

interface IStarProps {
  variant?: "outline" | "half" | "fill";
}

const Star: React.FC<IStarProps> = ({ variant }) => {
  switch (variant) {
    case "fill":
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1661 21.3357C18.5354 21.0582 18.6164 20.6016 18.3913 19.957L16.5091 14.3797L21.3181 10.951C21.8765 10.5571 22.1016 10.1363 21.9576 9.69767C21.8135 9.25901 21.3902 9.04415 20.6968 9.0531L14.798 9.09786L13.0059 3.49371C12.7897 2.84019 12.4655 2.5 11.9972 2.5C11.5379 2.5 11.2137 2.84019 10.9976 3.49371L9.20545 9.09786L3.3067 9.0531C2.61326 9.04415 2.18999 9.25901 2.04589 9.69767C1.8928 10.1363 2.12695 10.5571 2.6853 10.951L7.49436 14.3797L5.61216 19.957C5.38702 20.6016 5.46807 21.0582 5.83731 21.3357C6.20654 21.6222 6.67484 21.5237 7.23319 21.1208L11.9972 17.6384L16.7703 21.1208C17.3286 21.5237 17.7879 21.6222 18.1661 21.3357Z"
            fill="#FFAA0D"
          />
        </svg>
      );
    case "half":
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1661 21.3357C18.5354 21.0582 18.6164 20.6016 18.3913 19.957L16.5091 14.3797L21.3181 10.951C21.8765 10.5571 22.1016 10.1363 21.9576 9.69767C21.8135 9.25901 21.3902 9.04415 20.6968 9.0531L14.798 9.09786L13.0059 3.49371C12.7897 2.84019 12.4655 2.5 11.9972 2.5C11.5379 2.5 11.2137 2.84019 10.9976 3.49371L9.20545 9.09786L3.3067 9.0531C2.61326 9.04415 2.18999 9.25901 2.04589 9.69767C1.8928 10.1363 2.12695 10.5571 2.6853 10.951L7.49436 14.3797L5.61216 19.957C5.38702 20.6016 5.46807 21.0582 5.83731 21.3357C6.20654 21.6222 6.67484 21.5237 7.23319 21.1208L11.9972 17.6384L16.7703 21.1208C17.3286 21.5237 17.7879 21.6222 18.1661 21.3357ZM16.7883 19.5542L12.4565 16.2687C12.3124 16.1523 12.1593 16.0896 11.9972 16.0986V4.68437C12.0242 4.68437 12.0423 4.70227 12.0513 4.75599L13.6183 9.93938C13.7353 10.3064 13.9695 10.4497 14.3387 10.4407L19.7872 10.3512C19.8412 10.3512 19.8592 10.3512 19.8682 10.378C19.8772 10.396 19.8592 10.4139 19.8232 10.4407L15.3383 13.5203C15.0231 13.7352 14.9511 14.0216 15.0772 14.3708L16.8693 19.4826C16.8783 19.5363 16.8873 19.5452 16.8693 19.5721C16.8513 19.59 16.8243 19.581 16.7883 19.5542Z"
            fill="#FFAA0D"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1661 21.3357C18.5354 21.0582 18.6164 20.6016 18.3913 19.957L16.5091 14.3797L21.3181 10.951C21.8765 10.5571 22.1016 10.1363 21.9576 9.69767C21.8135 9.25901 21.3902 9.04415 20.6968 9.0531L14.798 9.09786L13.0059 3.49371C12.7897 2.84019 12.4655 2.5 11.9972 2.5C11.5379 2.5 11.2137 2.84019 10.9976 3.49371L9.20545 9.09786L3.3067 9.0531C2.61326 9.04415 2.18999 9.25901 2.04589 9.69767C1.8928 10.1363 2.12695 10.5571 2.6853 10.951L7.49436 14.3797L5.61216 19.957C5.38702 20.6016 5.46807 21.0582 5.83731 21.3357C6.20654 21.6222 6.67484 21.5237 7.23319 21.1208L11.9972 17.6384L16.7703 21.1208C17.3286 21.5237 17.7879 21.6222 18.1661 21.3357ZM16.7883 19.5542L12.4565 16.2687C12.1683 16.0449 11.8351 16.0449 11.5469 16.2687L7.21518 19.5542C7.17916 19.581 7.15214 19.59 7.13413 19.5721C7.11612 19.5452 7.12512 19.5363 7.13413 19.4826L8.92627 14.3708C9.05235 14.0216 8.9803 13.7352 8.6651 13.5203L4.18025 10.4407C4.13522 10.4139 4.12622 10.396 4.13522 10.378C4.14423 10.3512 4.16224 10.3512 4.21627 10.3512L9.66474 10.4407C10.034 10.4497 10.2681 10.3064 10.3852 9.93938L11.9522 4.75599C11.9612 4.70227 11.9792 4.68437 11.9972 4.68437C12.0242 4.68437 12.0423 4.70227 12.0513 4.75599L13.6183 9.93938C13.7353 10.3064 13.9695 10.4497 14.3387 10.4407L19.7872 10.3512C19.8412 10.3512 19.8592 10.3512 19.8682 10.378C19.8772 10.396 19.8592 10.4139 19.8232 10.4407L15.3383 13.5203C15.0231 13.7352 14.9511 14.0216 15.0772 14.3708L16.8693 19.4826C16.8783 19.5363 16.8873 19.5452 16.8693 19.5721C16.8513 19.59 16.8243 19.581 16.7883 19.5542Z"
            fill="#7b8e98"
          />
        </svg>
      );
  }
};

export default Star;
