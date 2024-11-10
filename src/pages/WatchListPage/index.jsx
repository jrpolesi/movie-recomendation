import { useState } from "react";
import { WatchListMovies, WatchListSeries } from "../../components";
import { SystemButton } from "../../components/SystemButton";
import { mergeClassName } from "../../utils";
import { PageTemplate } from "../PageTemplate";
import styles from "./style.module.css";

const tabs = [
  {
    id: "movies",
    label: "Filmes",
    Component: WatchListMovies,
  },
  {
    id: "series",
    label: "Séries",
    Component: WatchListSeries,
  },
];

export function WatchListPage() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <PageTemplate>
      <h2 className={styles.watchListPageTitle}>Ver mais tarde</h2>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <SystemButton
            key={tab.id}
            onClick={() => setCurrentTab(tab)}
            className={
              tab.id === currentTab.id
                ? styles.tab
                : mergeClassName(styles.tab, styles.inactiveTab)
            }
          >
            {tab.label}
          </SystemButton>
        ))}
      </div>

      {currentTab.Component && <currentTab.Component />}
    </PageTemplate>
  );
}
