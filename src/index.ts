import { ENGLISH_IMAGES, THAI_IMAGES } from './constants';

export type DaysOfWeek = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
export type GreetingLanguage = 'TH' | 'EN';

type GetHelloImageProps = {
  day?: DaysOfWeek;
  language?: GreetingLanguage;
};

const getImageFromLanguage = (lang: GreetingLanguage | undefined) => {
  switch (lang) {
    case 'EN':
      return ENGLISH_IMAGES;
    case 'TH':
      return THAI_IMAGES;
    default:
      return ENGLISH_IMAGES;
  }
};

export const getHelloImage = (props: GetHelloImageProps | undefined = undefined) => {
  const { day, language } = props ?? {};
  const helloImage = getImageFromLanguage(language ? language : undefined);
  if (!props || !day) {
    const currentDay: DaysOfWeek = new Date()
      .toLocaleString('en-us', { weekday: 'long' })
      .substring(0, 3)
      .toUpperCase() as DaysOfWeek;
    return helloImage[currentDay];
  }
  return helloImage[day];
};

getHelloImage({ day:"MON", language:"TH" })