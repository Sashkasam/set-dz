/* eslint-disable no-undef */
import Character from "../character";
import Team from "../team";

const player1 = new Character('Sashka'); 
const player2 = new Character('Polina');


test ('Проверка добавления нового персонажа в команду', () => {
    const team = new Team();

    team.add(player1);
    expect(team.members).toEqual(new Set([player1]));

});

test ('Проверка на дублирование персонажа в команде', () => {
    const team = new Team();
    
    team.add(player1);
    team.add(player2);

    expect(()=> { team.add(player1); }).toThrowError('Такой персонаж уже есть в команде');
});


test('Проверка на отсутсвие дубликатов при добавлении нескольких игроков', ()=> {
    const team = new Team();

    team.addAll(player1, player2, player1);

    expect(team.members.size).toEqual(2);
});

test ('Проверка на конвертацию Set  в массив', () => {
    const team = new Team();

    team.addAll(player1, player2);

    expect(team.toArray()).toEqual([player1, player2]);
});