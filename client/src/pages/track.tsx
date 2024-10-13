import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { TrackQuery } from '../__generated__/graphql';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const GET_TRACK = gql(`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
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
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`);

const Track = () => {
  const { trackId } = useParams();
  const { data, loading, error } = useQuery<TrackQuery>(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout grid>
      <QueryResult data={data} loading={loading} error={error}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
