import { FC } from 'react';
import heartLiked from '../../assets/images/icons/heart-liked.svg';
// import heartUnliked from '../../assets/images/icons/heart-unliked.svg';
import { Cat } from '../../types';

interface Props {
  cat: Cat;
}

export const CatCard: FC<Props> = ({ cat }) => {
  const { url, breeds } = cat;

  return (
    <article className="w-60 bg-secondary border-2 rounded-md p-4">
      <div className="flex justify-end">
        <button className="mb-3 border-2 rounded-md">
          <img src={heartLiked} alt="Add to favourites" />
        </button>
      </div>

      <img
        className="w-60 h-60 object-contain mb-4"
        src={url}
        alt="Cat photo"
      />

      <div className="text-center">
        <p>Breed:</p>
        <p className="text-xl font-normal	">
          {breeds && breeds?.length !== 0
            ? breeds[0].name
            : 'Unknown, just a cat'}
        </p>
      </div>
    </article>
  );
};
