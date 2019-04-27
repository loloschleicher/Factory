import { expect } from 'chai';
import { SuperHeroFactory } from '../superHeroFactory';
import { Hero } from '../hero';

describe('Test Factory', function(){
    it('Create Hero', function(){
        const superheroFactory = new SuperHeroFactory();
        const batman = superheroFactory.createProduct({Hero , name: 'Clark'});
        const spiderman = superheroFactory.createProduct({type: "hero", name: 'Peter', health: 100});        
        expect(batman.name).to.equals("Clark");
    });

    it('Health of Villain', function(){
        const superheroFactory = new SuperHeroFactory();
        const joker = superheroFactory.createProduct({name: 'Joker', health: 50, type: "villain"});
        expect(joker.health).to.equals(50);
    });
})