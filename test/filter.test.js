import assert from 'node:assert/strict';
import test from 'node:test';

import { filterRows } from '../static/js/filter.js';

const sightings = [
  { city: 'benton', state: 'ar', shape: 'circle' },
  { city: 'benton', state: 'ca', shape: 'light' },
  { city: 'phoenix', state: 'az', shape: 'circle' },
];

test('returns every row when no filters are active', () => {
  assert.deepEqual(filterRows(sightings, {}), sightings);
});

test('applies every active filter', () => {
  assert.deepEqual(filterRows(sightings, { city: 'benton', state: 'ar' }), [
    sightings[0],
  ]);
});

test('returns an empty result for an unmatched filter', () => {
  assert.deepEqual(filterRows(sightings, { shape: 'triangle' }), []);
});
