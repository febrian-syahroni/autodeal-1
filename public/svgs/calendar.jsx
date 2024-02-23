const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M1.332 6.518h13.333M4.295 1.333v1.481m7.407-1.481v1.481m-8 11.852h8.593c.83 0 1.245 0 1.562-.161.278-.142.505-.369.647-.648.161-.316.161-.731.161-1.561V5.185c0-.83 0-1.245-.161-1.562a1.482 1.482 0 0 0-.647-.647c-.317-.162-.732-.162-1.562-.162H3.702c-.83 0-1.244 0-1.561.162a1.481 1.481 0 0 0-.647.647c-.162.317-.162.732-.162 1.562v7.111c0 .83 0 1.245.162 1.562.142.278.368.505.647.647.317.161.732.161 1.561.161Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Calendar;
