import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { Category } from '../types/categories.types';
import { FetchResponse } from '../types/general.types';

export const useFetchGifs = (category: Category) => {
  const [state, setState] = useState<FetchResponse>({
    data: [],
    loading:  true
  })

  useEffect(() => {
    getGifs( category )
      .then((gifs) => {
        setState({
          data: gifs,
          loading: false
        })
      })
  }, [category])

  return state
}


