import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ nftId }) => {

const [commentBody, setBody] = useState('');
const [addComment, { error }] = useMutation(ADD_COMMENT);

const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, nftId },
      });

      // clear form value
      setBody('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div>
           <form className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
            >
        <textarea
            placeholder="Leave a comment to this NFT!"
            value={commentBody}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
        {error && <span className="ml-2">Something went wrong...</span>}
      </form>
      </div>
  )

};

export default CommentForm;