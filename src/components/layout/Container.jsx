function Container({ children, className }) {
  return (
    <>
      <div className={`container w-full h-full ${className || " "}`}>
        {children}
      </div>
    </>
  );
}

export default Container;
