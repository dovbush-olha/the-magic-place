import { Container } from 'shared/ui';
import { useHouse } from 'shared/api/housesAPI';
import { useHouseTitles } from 'shared/api/housesAPI/hooks/useHouseTitles';

export function HousesPage() {
  console.log(useHouse('Slytherin'));
  console.log(useHouseTitles('6463a4f7761d1804051b4c12'));
  return (
    <Container>
      <p>This is houses page</p>
    </Container>
  );
}
