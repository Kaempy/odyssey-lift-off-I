import { useQuery } from '@apollo/client';
import { gql } from '../__generated__';
import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql(`
  query TracksForHomeQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`);
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult data={data} loading={loading} error={error}>
        {data?.tracksForHome?.map((item) => (
          <TrackCard key={item.id} track={item} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
