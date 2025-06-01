import React from "react";

interface AlertData {
  type: "error" | "warning" | "info";
  title: string;
  description: string;
  timeAgo: string;
  icon: React.ReactNode;
}

const AlertList: React.FC = () => {
  const alerts: AlertData[] = [
    {
      type: "error",
      title: "Maintenance Required: Line B",
      description: "Assembly unit requires immediate maintenance",
      timeAgo: "5 hours ago",
      icon: (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="alert-icon"
          style={{ width: 20, height: 20 }}
        >
          <path
            d="M17.012 14.5156L10.992 3.97913C10.8607 3.74748 10.6704 3.5548 10.4403 3.42075C10.2103 3.28669 9.94885 3.21606 9.68263 3.21606C9.4164 3.21606 9.15494 3.28669 8.92492 3.42075C8.69489 3.5548 8.50454 3.74748 8.37328 3.97913L2.35328 14.5156C2.2206 14.7454 2.15103 15.0062 2.15162 15.2716C2.1522 15.537 2.22293 15.7975 2.35662 16.0267C2.49032 16.2559 2.68223 16.4457 2.91291 16.5768C3.14359 16.708 3.40483 16.7758 3.67015 16.7734H15.7102C15.9742 16.7731 16.2335 16.7034 16.4621 16.5712C16.6907 16.4389 16.8805 16.2489 17.0124 16.0201C17.1443 15.7914 17.2137 15.5319 17.2136 15.2678C17.2135 15.0037 17.144 14.7443 17.012 14.5156Z"
            stroke="#F43F5E"
            strokeWidth="1.50521"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.68994 7.74219V10.7526"
            stroke="#F43F5E"
            strokeWidth="1.50521"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.68994 13.7629H9.69747"
            stroke="#F43F5E"
            strokeWidth="1.50521"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      type: "warning",
      title: "Quality Warning: Product Y Packaging",
      description: "Print quality issues detected",
      timeAgo: "2 hours ago",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="alert-icon"
          style={{ width: 20, height: 20 }}
        >
          <path
            d="M18.7682 15.0001L12.1015 3.33344C11.9562 3.07694 11.7454 2.8636 11.4906 2.71516C11.2359 2.56673 10.9463 2.48853 10.6515 2.48853C10.3567 2.48853 10.0671 2.56673 9.81242 2.71516C9.55768 2.8636 9.34688 3.07694 9.20152 3.33344L2.53485 15.0001C2.38792 15.2546 2.31088 15.5434 2.31153 15.8372C2.31218 16.131 2.3905 16.4195 2.53856 16.6733C2.68662 16.9271 2.89914 17.1373 3.1546 17.2825C3.41006 17.4277 3.69936 17.5027 3.99319 17.5001H17.3265C17.6189 17.4998 17.9061 17.4226 18.1593 17.2762C18.4124 17.1298 18.6225 16.9193 18.7686 16.666C18.9147 16.4127 18.9916 16.1254 18.9915 15.833C18.9914 15.5406 18.9144 15.2533 18.7682 15.0001Z"
            stroke="#F59E0B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.6599 7.5V10.8333"
            stroke="#F59E0B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.6599 14.1667H10.6682"
            stroke="#F59E0B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      type: "info",
      title: "Line Paused: Packaging Line B",
      description: "Awaiting material resupply",
      timeAgo: "1 hour ago",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="alert-icon"
          style={{ width: 20, height: 20 }}
        >
          <path
            d="M14.8267 3.33325H13.16C12.6998 3.33325 12.3267 3.70635 12.3267 4.16659V15.8333C12.3267 16.2935 12.6998 16.6666 13.16 16.6666H14.8267C15.2869 16.6666 15.66 16.2935 15.66 15.8333V4.16659C15.66 3.70635 15.2869 3.33325 14.8267 3.33325Z"
            stroke="#3B82F6"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.15991 3.33325H6.49325C6.03301 3.33325 5.65991 3.70635 5.65991 4.16659V15.8333C5.65991 16.2935 6.03301 16.6666 6.49325 16.6666H8.15991C8.62015 16.6666 8.99325 16.2935 8.99325 15.8333V4.16659C8.99325 3.70635 8.62015 3.33325 8.15991 3.33325Z"
            stroke="#3B82F6"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="flex-1 rounded-xl bg-card shadow-md text-foreground max-md:w-full max-sm:w-full">
      <header className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-foreground">
          Production Alerts
        </h2>
        <p className="text-sm leading-5 text-muted-foreground">
          Recent alerts requiring attention
        </p>
      </header>

      {alerts.map((alert, index) => (
        <AlertItem
          key={index}
          alert={alert}
          isLast={index === alerts.length - 1}
        />
      ))}

      <div className="p-6 text-center">
        <button className="px-0 py-2.5 text-sm font-medium leading-5 rounded-md border border-border cursor-pointer bg-card text-foreground w-full hover:bg-accent transition">
          View All Alerts
        </button>
      </div>
    </section>
  );
};

interface AlertItemProps {
  alert: AlertData;
  isLast: boolean;
}

const AlertItem: React.FC<AlertItemProps> = ({ alert, isLast }) => {
  return (
    <article
      className={`flex gap-4 items-start p-4 ${!isLast ? "border-b border-solid border-border" : ""}`}
    >
      <div>{alert.icon}</div>
      <div className="flex-1">
        <h3 className="text-sm font-medium leading-4 text-foreground">
          {alert.title}
        </h3>
        <p className="text-sm leading-5 text-muted-foreground">{alert.description}</p>
        <div className="flex gap-1 items-center mt-1">
          <div>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="time-icon"
              style={{ width: 12, height: 12 }}
            >
              <path
                d="M6.71997 11C9.48139 11 11.72 8.76142 11.72 6C11.72 3.23858 9.48139 1 6.71997 1C3.95855 1 1.71997 3.23858 1.71997 6C1.71997 8.76142 3.95855 11 6.71997 11Z"
                stroke="#A1A1AA"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.71997 3V6L8.71997 7"
                stroke="#A1A1AA"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <time className="text-xs leading-4 text-muted-foreground">
            {alert.timeAgo}
          </time>
        </div>
      </div>
    </article>
  );
};

export default AlertList;
