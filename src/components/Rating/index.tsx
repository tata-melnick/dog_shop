import React, { useState } from "react";
import { Star } from "../../icons";
import rndStr from "../../helpers/randomStr";

interface IRatingProps {
  rating: number;
  setRating?(rate: number): void;
}

const Rating: React.FC<IRatingProps> = ({ rating: initRating, setRating }) => {
  const emptyFragments = [1, 2, 3, 4, 5];
  const [rating, setRate] = useState<number>(initRating);

  const enter = (position: number) => setRate(position);
  const leave = () => setRate(initRating);
  const click = (position: number) => {
    setRating(position);
    setRate(position);
  };

  return (
    <div>
      {emptyFragments.map((r) => (
        <span
          key={`star-${rndStr()}`}
          onClick={setRating ? () => click(r) : undefined}
          onMouseEnter={setRating ? () => enter(r) : undefined}
          onMouseLeave={setRating ? leave : undefined}
        >
          <Star
            variant={
              (!rating && "outline") ||
              (rating >= r && "fill") ||
              (r > rating && r < rating + 1 && "half") ||
              "outline"
            }
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;
