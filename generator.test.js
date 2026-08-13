import { test } from 'node:test';
import assert from 'node:assert';
import { parsePrompt, generateHTML } from './generator.js';

test('parsePrompt identifies industries correctly', () => {
  const saasPrompt = "Build a modern SaaS software with a purple neon theme";
  const portfolioPrompt = "An amazing artist portfolio page for displaying digital art";
  const restaurantPrompt = "A dark theme cozy pizza restaurant and bakery cafe named 'Slices'";
  const gymPrompt = "A fitness center crossfit workout gym layout with emerald green theme";
  const generalPrompt = "A classic agency consulting corporate landing page";

  assert.strictEqual(parsePrompt(saasPrompt).industry, 'saas');
  assert.strictEqual(parsePrompt(portfolioPrompt).industry, 'portfolio');
  assert.strictEqual(parsePrompt(restaurantPrompt).industry, 'restaurant');
  assert.strictEqual(parsePrompt(gymPrompt).industry, 'fitness');
  assert.strictEqual(parsePrompt(generalPrompt).industry, 'general');
});

test('parsePrompt identifies custom theme colors correctly', () => {
  const greenPrompt = "An organic nature eco-friendly green website";
  const redPrompt = "A bright red cherry sunset landing page";
  const purplePrompt = "A mystical violet purple magic blog";
  const darkPrompt = "A sleek black midnight stealth dark portfolio";
  const bluePrompt = "An ocean blue sky water background landing page";

  assert.strictEqual(parsePrompt(greenPrompt).colors, 'green');
  assert.strictEqual(parsePrompt(redPrompt).colors, 'red');
  assert.strictEqual(parsePrompt(purplePrompt).colors, 'purple');
  assert.strictEqual(parsePrompt(darkPrompt).colors, 'dark');
  assert.strictEqual(parsePrompt(bluePrompt).colors, 'blue');
});

test('parsePrompt extracts custom brand name in quotes', () => {
  const prompt = 'Create a SaaS platform called "CloudSync Pro" with blue colors';
  const specs = parsePrompt(prompt);
  assert.strictEqual(specs.name, 'CloudSync Pro');
});

test('parsePrompt extracts custom brand name following keywords', () => {
  const prompt = 'Create a restaurant named Slices and Spice in Chicago';
  const specs = parsePrompt(prompt);
  assert.ok(specs.name.includes('Slices'));
});

test('generateHTML produces responsive Tailwind HTML containing brand content', () => {
  const specs = {
    industry: 'saas',
    colors: 'purple',
    name: 'Super Saas',
    customTagline: 'A super powered tool'
  };
  const html = generateHTML(specs);
  assert.ok(html.includes('<!DOCTYPE html>'));
  assert.ok(html.includes('Super Saas'));
  assert.ok(html.includes('A super powered tool'));
  assert.ok(html.includes('https://cdn.tailwindcss.com'));
});
