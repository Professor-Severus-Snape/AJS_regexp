import Validator from '../js/Validator';

test.each(
  [
    ['Alan', true],
    ['AlanRickman', true],
    ['Alan-Rickman', true],
    ['Alan_Rickman', true],
    ['Alan_123_Rickman', true],
    ['Alan_12345_Rickman', false],
    ['Alan4444Rickman', false],
    ['1_Alan-Rickman', false],
    ['Alan-Rickman_1', false],
    ['Alan$Rickman', false],
    ['Alan*Rickman', false],
    ['_Alan_Rickman', false],
    ['Alan_Rickman_', false],
    ['-Alan_Rickman', false],
    ['Alan_Rickman-', false],
    ['Alan/Rickman', false],
    ['Alan|Rickman', false],
    ['Alan.Rickman', false],
    ['Alan\nRickman', false],
  ],
)('testing static method validateUsername with name: %s', (name, result) => {
  expect(Validator.validateUsername(name)).toBe(result);
});
