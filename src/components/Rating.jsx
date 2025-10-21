import { Star, StarHalf } from "lucide-react";

const Rating = ({ rating, maxStars = 5, iconSize = 18 }) => {
  const stars = [];

  // Loop from 1 up to the max number of stars
  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      stars.push(
        <Star key={i} fill="gold" className="text-accent" size={iconSize} />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <StarHalf key={i} fill="gold" className="text-accent" size={iconSize} />
      );
    } else {
      stars.push(<Star key={i} className="text-accent/70" size={iconSize} />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

export default Rating;
