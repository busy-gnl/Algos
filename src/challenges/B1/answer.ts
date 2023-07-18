/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({events,}: {events: EventDatetime[]}): EventDatetime[] {
      events.sort((a, b) => (Date.parse(a.startDatetime) - Date.parse(a.endDatetime) > Date.parse(b.startDatetime) - Date.parse(b.endDatetime) ? 1 : -1));
      events.sort((a, b) => (a.startDatetime > b.startDatetime ? 1 : -1));
  
    return events;
  }


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}