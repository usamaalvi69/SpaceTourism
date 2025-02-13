export const DestinationTabs = ({
  destinations,
  activeTab,
  setActiveTabData,
}) => {
  return (
    <ul className="tabs text-preset-8">
      {destinations.map((item) => {
        const { name: planet } = item;
        return (
          <li
            key={planet}
            className={activeTab === planet ? "active" : ""}
            onClick={() => activeTab !== planet && setActiveTabData(item)}
          >
            {planet.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};
