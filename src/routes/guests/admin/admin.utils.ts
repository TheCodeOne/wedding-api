import { Guests } from '../guests.schema';
import { CompactGuests } from './admin.types';

export function getGuests(guests: Guests[], attending: boolean) {
  return guests
    .filter(({ willAttend }) => willAttend === attending)
    .map(({ guests, lastUpdated }) => ({
      name: concatNames(guests),
      lastUpdated,
    }));
}

export function getAmounts(guestsAttending: CompactGuests[], guestsNotAttending: CompactGuests[], guestsNotReplied: CompactGuests[]) {
  const attending = getAmountOfGuests(guestsAttending);
  const notAttending = getAmountOfGuests(guestsNotAttending);
  const notReplied = getAmountOfGuests(guestsNotReplied);

  return {
    total: attending + notAttending + notReplied,
    attending,
    notAttending,
    notReplied,
  };
}

function getAmountOfGuests(guests: CompactGuests[]) {
  return guests.reduce((acc, { name }) => acc + name.split(', ').length, 0);
}

function concatNames(guests: { name: string; gender: number }[]) {
  return guests.map((guest) => guest.name).join(', ');
}
