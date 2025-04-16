// components/ProgressBar.jsx
const ProgressBar = ({ currentStage }) => {
    const totalStages = 9;
  
    return (
      <div className="absolute bottom-4 w-full flex justify-center items-center gap-2 px-4">
        {[...Array(totalStages)].map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentStage === index + 1
                ? "w-8 bg-blue-600"
                : "w-4 bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };
  
  export default ProgressBar;
  