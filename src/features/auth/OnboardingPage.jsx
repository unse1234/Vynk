import useOnboarding from './useOnboarding';

const OnboardingPage = () => {
  const { interests, selectedInterests, toggleInterest } = useOnboarding();

  return (
    <div className="min-h-screen bg-[#fdf8f6] flex flex-col items-center justify-center px-6">
      {/* Step Indicators */}
      <div className="flex gap-2 mb-10">
        <div className="w-8 h-1.5 rounded-full bg-blue-500" />
        <div className="w-8 h-1.5 rounded-full bg-gray-200" />
        <div className="w-8 h-1.5 rounded-full bg-gray-200" />
      </div>
    {/* headings */}
      <h1 className="text-4xl font-bold text-gray-950 mb-2">What moves you?</h1>
      <p className="text-gray-600  mb-8">Pick at least 3 to personalize your experience</p>

      {/* Interests Grid */}
  {/* Interest Tags */}
      <div className="flex flex-wrap justify-center gap-3 max-w-lg mb-10">
        {interests.map((interest) => {
          const isSelected = selectedInterests.includes(interest)
          return (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all
                ${isSelected
                  ? 'border-blue-500 text-blue-500 bg-white'
                  : 'border-gray-200 text-gray-500 bg-white'
                }`}
            >
              {isSelected && <span className="mr-1">✓</span>}
              {interest}
            </button>
          )
        })}
      </div>

      {/* Next Button */}
      <button
        disabled={selectedInterests.length < 3}
        className={`px-9 py-2 rounded-lg text-xl text-white font-medium transition-opacity
          ${selectedInterests.length >= 3 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed opacity-50'}`}
      >
        Continue
      </button>

    </div>

  );
};
export default OnboardingPage;
