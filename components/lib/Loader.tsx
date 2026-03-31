interface LoaderProps {
  message?: string;
}

const Loader = ({ message = "Loading..." }: LoaderProps) => {
  // TODO: Add size & color variants
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      <p className="ml-3">{message}</p>
    </div>
  );
};

export default Loader;
