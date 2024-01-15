export const SectionDivider = ({ height = 1 }) => {
  return (
    <div className="relative w-full -z-10 mt-64">
      <svg
        className={`absolute w-full h-${height} top-1/2 transform -translate-y-1/2`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path
          d="M0 50 C15 25,25 75,50 50 C75 25,85 75,100 50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
