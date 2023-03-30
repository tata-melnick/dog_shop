import React from "react";
import { Star } from "../../icons";
import rndStr from "../../helpers/randomStr";

interface IRatingProps {
  rating?: number;
}

const Rating: React.FC<IRatingProps> = ({ rating }) => {
  const emptyFragments = [1, 2, 3, 4, 5];

  return (
    <div>
      {emptyFragments.map((r) => (
        <Star
          key={`star-${rndStr()}`}
          type={
            (!rating && "outline") ||
            (rating >= r && "fill") ||
            (r > rating && r < rating + 1 && "half") ||
            "outline"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
