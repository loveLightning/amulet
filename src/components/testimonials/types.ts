import { StaticImageData } from 'next/image'

import videoImage from '../../../public/images/first-video.png'

interface ReviewsTypes {
  id: number
  image: StaticImageData
}

export const dataReviews: ReviewsTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/testimonials/1.png'),
  },
  {
    id: 1,
    image: require('../../../public/images/testimonials/2.png'),
  },
  {
    id: 2,
    image: require('../../../public/images/testimonials/3.png'),
  },
  {
    id: 3,
    image: require('../../../public/images/testimonials/4.png'),
  },
  {
    id: 4,
    image: require('../../../public/images/testimonials/5.png'),
  },
  {
    id: 5,
    image: require('../../../public/images/testimonials/6.png'),
  },
  {
    id: 6,
    image: require('../../../public/images/testimonials/7.png'),
  },
  {
    id: 7,
    image: require('../../../public/images/testimonials/8.png'),
  },
  {
    id: 8,
    image: require('../../../public/images/testimonials/9.png'),
  },
  {
    id: 9,
    image: require('../../../public/images/testimonials/10.png'),
  },
  {
    id: 10,
    image: require('../../../public/images/testimonials/11.png'),
  },
]

interface VideoTypes {
  id: number
  src: string
  active: boolean
  image: StaticImageData
}

export const dataVideo: VideoTypes[] = [
  {
    id: 0,
    src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    active: false,
    image: videoImage,
  },
  {
    id: 1,
    src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    active: false,
    image: videoImage,
  },
  {
    id: 2,
    src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    active: false,
    image: videoImage,
  },
  {
    id: 3,
    src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    active: false,
    image: videoImage,
  },
]
