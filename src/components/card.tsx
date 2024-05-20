interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="rounded-lg bg-card p-6">{children}</div>;
};

export default Card;
