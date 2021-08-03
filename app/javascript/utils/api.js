import useSWR, { useSWRInfinite, mutate } from 'swr'

export function useUser () {
  const { data, error } = useSWR(`/api/session`)
  return {
    data: data,
    loading: !error && !data,
    error: error
  }
}

export const apiLogin = async (requestData, token) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token
    },
    body: JSON.stringify(requestData)
  })
  const data = await response.json()
  if(!data.error) {
    mutate('/api/session')
  }
  return data
}

const PAGE_SIZE = 10

const getKey = (path) => {
  const func = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null
    return `${path}?page=${pageIndex + 1}`
  }
  return func
}

export function usePosts() {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey('/api/posts'))
  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return { posts, error, isLoadingMore, size, setSize, isReachingEnd, isRefreshing }
}