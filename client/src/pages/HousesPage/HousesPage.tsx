import { Container } from 'shared/ui';
import { useHouseTitles } from 'shared/api/housesAPI';
import { ErrorBoundaryComponent } from 'components/ErrorBoundaryComponent';
import { useState, useEffect } from 'react';
import PageLoader from 'components/PageLoader/PageLoader';

type FetchedHouse = {
  id: string;
  houseId: string;
  titleEn: string;
  titleUk: string;
};

export function HousesPage() {
  const { titles } = useHouseTitles('6463a4f7761d1804051b4c12');

  const [hufflepuffTitles, setHufflepuffTitles] = useState<FetchedHouse[]>([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (titles) {
      setHufflepuffTitles(titles);
    }
  }, [titles]);

  const handleButtonClick = () => {
    setShowList(true);
  };

  return (
    <Container>
      <button onClick={handleButtonClick}>Show</button>
      <PageLoader isLoading={!titles}>
        {showList && (
          <ul>
            {hufflepuffTitles.map((element) => (
              <ErrorBoundaryComponent key={element.id}>
                <li key={element.id}>{element.EN.titleEn}</li>
              </ErrorBoundaryComponent>
            ))}
          </ul>
        )}
      </PageLoader>
    </Container>
  );
}
