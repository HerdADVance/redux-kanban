import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignedTo: user});
const list = new schema.Entity('lists', {
	cards: [card]
});

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);

export const lists = {
	entities: normalizedLists.entities.lists,
	ids: normalizedLists.result // renaming result to ids to avoid confusion
};

export const users = {
	entities: normalizedUsers.entities.users,
	ids: normalizedUsers.result // renaming result to ids to avoid confusion
};

export const cards = {
	entities: normalizedLists.entities.cards,
	ids: Object.keys(normalizedLists.entities.cards)
};

export default{
	lists,
	users,
	cards
};