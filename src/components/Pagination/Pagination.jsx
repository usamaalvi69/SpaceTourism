export const Pagination = ({
    techs,
    activeTab,
    setActiveTabData,
  }) => {
    return (
      <ul className="pages">
        {techs.map((item) => {
          const { id } = item;
          return (
            <li
              key={id}
              className={activeTab === id ? "active" : ""}
              onClick={() => activeTab !== id && setActiveTabData(item)}
              tabIndex={0}
            >
                {id}
            </li>
          );
        })}
      </ul>
    );
  };