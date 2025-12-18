const InfoSlider = ({ items }) => {
  return (
    <>
      {/* Two identical lists for continuous scrolling effect */}
      {[...Array(2)].map((_, index) => (
        <ul
          key={index}
          aria-hidden="true"
          className="list-none flex justify-between items-center shrink-0 min-w-full"
        >
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default InfoSlider;
