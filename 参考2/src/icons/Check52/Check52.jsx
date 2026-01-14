export const Check52 = ({
  color = "#46A7FD",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`check-52 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        fill={color}
        fillOpacity={opacity}
        height="17.114"
        rx="2.28297"
        stroke={color}
        strokeWidth="0.811798"
        width="17.114"
        x="0.405899"
        y="0.405899"
      />

      <path
        className="path"
        d="M13.1456 5.8252L7.39445 11.5764L4.78027 8.9622"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.04567"
      />
    </svg>
  );
};
