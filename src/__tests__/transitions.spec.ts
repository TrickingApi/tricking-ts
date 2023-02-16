import { Transition, TransitionId } from '../models';
import { TransitionsClient } from '../clients';
/**
 * This Test Suite directly calls the tricking api. 
 * ToDo: should mock it with hardcoded data..will crea 
 */
describe ('Test Transitions Client', () => {
  let client: TransitionsClient;

  beforeAll(() => {
    client = new TransitionsClient();
  });

  // Transitions
  it('check if it returns a Transition passing an id', async () => {
    const data = await client.getTransitionById(TransitionId.POP)
                             .then((response: Transition) => response)
                             .catch((response: Transition) => response);

    if (data) {
      try {
        const transition = data as Transition;
        if (transition) {
          expect(transition.id).toBe(TransitionId.POP);
          expect(transition.name).toBe('Pop');
          expect(transition.description).toBe('The Pop can be described as a sequential (one foot at a time) landing followed by a unified (two-foot) takeoff. It is differentiated by the punch by the timing and power absorption throughout the transition.');
          expect(transition.aliases).toHaveLength(0);
          expect(transition.examples).toHaveLength(2);
          expect(transition.examples[0]).toBe('Cartwheel (pop) Full Twist');
          expect(transition.examples[1]).toBe('Scoot (pop) Full Twist');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error('Error in API request during unit tests');
    }
  });
});