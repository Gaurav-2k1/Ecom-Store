interface ContainerProps {
  children: React.ReactNode;
}

const Containers: React.FC<ContainerProps> = ({
  children
}) => {
  return ( 
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
   );
};

export default Containers;
