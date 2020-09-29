import functions from '../index';

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('multiplyFunction', ()=>{
    it('a * b', ()=>{
        expect(functions.multiply(5, 7)).toBe(35);
    })
});

describe('dogYearsFunction', ()=>{
    it('returns humanYears * 7', ()=>{
        expect(functions.dogYears(5)).toBe(35);
    })
});

describe('hungryDogFunction', ()=>{
    it('returns weight * x based on age and weight', ()=>{
        expect(functions.hungryDog(15, 1)).toBe(0.44999999999999996);
    })
});
describe('gameFunction', ()=>{
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'sissors')).toBe('you win!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'paper')).toBe('you lose!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'rock')).toBe(`it's a tie`);
    })
});
describe('milesFunction', ()=>{
    it('return km * 0.621371', ()=>{
        expect(functions.miles(10)).toBe(6.21371);
    })
});

describe('feetFunction', ()=>{
    it('return cm / 30.48', ()=>{
        expect(functions.feet(160)).toBe(5.2493438320209975);
    })
});
describe('annoyingSongFunction', ()=>{
    it('a string that counts down based on the number imputted', ()=>{
        expect(functions.annoyingSong(5)).toBe(`${5} bottles of soda on the wall, ${5} bottles of soda, take one down pass it around ${5 - 1} bottles of soda on the wall`);
    })
});
describe('gradeFunction', ()=>{
    it('return letter grade based on number', ()=>{
        expect(functions.grade(85)).toBe('you got a B');
    })
});
describe('vowelCounterFunction', ()=>{
    it('return a string containing the number of vowels', ()=>{
        expect(functions.vowelCounter('I am a world-class developer using iterations')).toBe(`The text contains ${16} vowel(s)`);
    })
});

