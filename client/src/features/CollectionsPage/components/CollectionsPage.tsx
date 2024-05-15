import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';
import Collection from '../../HomePage/components/Collection';

function CollectionsPage(): JSX.Element {

  const collections = useSelector((store: RootState) => store.specificCollectionState.collections);

  const enhancedCollections = collections
    .map((collection) => ({
      ...collection,
      ColPhotos: collection.ColPhotos || [],
    }))
    .slice(0, 3);

  return (
    <div className="banners">
      <div className="TextHead">Коллекции</div>
      {enhancedCollections.map((el) => (
        <Collection collection={el} key={el.id} />
      ))}
    </div>
  );
}

export default CollectionsPage;
