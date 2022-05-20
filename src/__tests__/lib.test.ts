import { ENGLISH_IMAGES, THAI_IMAGES } from '../constants';
import { DaysOfWeek, getHelloImage } from '../index';

test('Returns an image for Monday in English', () => {
  expect(getHelloImage({ day: 'MON', language: 'EN' })).toBe(ENGLISH_IMAGES['MON']);
});

test('Returns an image for Monday in Thai', () => {
  expect(getHelloImage({ day: 'MON', language: 'TH' })).toBe(THAI_IMAGES['MON']);
});

test('Returns an image for Monday in English by default when the user does not specify', () => {
  expect(getHelloImage({ day: 'MON' })).toBe(ENGLISH_IMAGES['MON']);
});

test('Returns an image of the current day in English when no parameters are given', () => {
  const currentDay: DaysOfWeek = new Date()
    .toLocaleString('en-us', { weekday: 'long' })
    .substring(0, 3)
    .toUpperCase() as DaysOfWeek;
  if (currentDay === 'SUN') expect(getHelloImage()).toBe(ENGLISH_IMAGES['SUN']);
  if (currentDay === 'MON') expect(getHelloImage()).toBe(ENGLISH_IMAGES['MON']);
  if (currentDay === 'TUE') expect(getHelloImage()).toBe(ENGLISH_IMAGES['TUE']);
  if (currentDay === 'WED') expect(getHelloImage()).toBe(ENGLISH_IMAGES['WED']);
  if (currentDay === 'THU') expect(getHelloImage()).toBe(ENGLISH_IMAGES['THU']);
  if (currentDay === 'FRI') expect(getHelloImage()).toBe(ENGLISH_IMAGES['FRI']);
  if (currentDay === 'SAT') expect(getHelloImage()).toBe(ENGLISH_IMAGES['SAT']);
});

test('Returns an image of the current day in Thai when no parameters are given', () => {
  const currentDay: DaysOfWeek = new Date()
    .toLocaleString('en-us', { weekday: 'long' })
    .substring(0, 3)
    .toUpperCase() as DaysOfWeek;
  if (currentDay === 'SUN') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['SUN']);
  if (currentDay === 'MON') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['MON']);
  if (currentDay === 'TUE') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['TUE']);
  if (currentDay === 'WED') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['WED']);
  if (currentDay === 'THU') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['THU']);
  if (currentDay === 'FRI') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['FRI']);
  if (currentDay === 'SAT') expect(getHelloImage({ language: 'TH' })).toBe(THAI_IMAGES['SAT']);
});
