export const Dots = ({
    roles,
    activeTab,
    setActiveTabData,
  }) => {
    return (
      <ul className="dots">
        {roles.map((item) => {
          const { role } = item;
          return (
            <li
              key={role}
              className={activeTab === role ? "active" : ""}
              onClick={() => activeTab !== role && setActiveTabData(item)}
              tabIndex={0}
            >
            </li>
          );
        })}
      </ul>
    );
  };
  