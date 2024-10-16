function Container({ children, className }) {
  return <div className={`flex gap-5 ${className}`}>{children}</div>;
}

export default Container;
