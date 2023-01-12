export const simpleText =
  "cake, call, can, candle, cap, car, card, care, careful, careless, carry, case, cat, catch, central, century, certain, chair, chance, change, chase, cheap, cheese, chicken, child, children, chocolate, choice, choose, circle, city, class, clever, clean, clear, climb, clock, cloth, clothes, cloud, cloudy, close, coffee, coat, coin, cold, collect, colour, comb, come, comfortable, common, compare, complete, computer, condition, continue, control, cook, cool, copper, corn, corner, correct, cost, contain, count, country, course, cover, crash, cross, cry, cup, cupboard, cut.";
const normalText =
  "each, ear, early, earn, earth, east, easy, eat, education, effect, egg, eight, either, electric, elephant, else, empty, end, enemy, enjoy, enough, enter, equal, entrance, escape, even, evening, event, ever, every, everyone, exact, everybody, examination, example, except, excited, exercise, expect, expensive, explain, extremely, eye.";

export const category = [
  { name: "Easy", lvl: "light", words: simpleText.split(", ") },
  { name: "Normal", lvl: "normal", words: normalText.split(", ") },
];
