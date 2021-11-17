type url = string
type downsized_medium = { url: url }

export interface GiphyGif {
  id: number
  title: string
  images: {
    downsized_medium: downsized_medium
  }
}

export interface GiphyResponse extends Omit<GiphyGif, 'images'> {
  url: url
}