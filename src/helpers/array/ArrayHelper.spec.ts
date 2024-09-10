import { GenericObject } from '@types';
import { updateItemInArray } from './ArrayHelper';

describe('helpers/array', () => {
  it('Should have an update array', async () => {
    const arrayUpdated = updateItemInArray<GenericObject, 'id', 'name'>({
      array: [{}, { id: 17 }],
      testKey: 'id',
      testValue: 17,
      updateKey: 'name',
      updateValue: 'Categoria atualizada',
    });
    expect(arrayUpdated[1].name).toEqual('Categoria atualizada');
  });

  it('Should have an update sub-array', async () => {
    const { subCategories } = { subCategories: [{}, { id: 128 }] };
    const arrayUpdated = updateItemInArray<GenericObject, 'id', 'name'>({
      array: subCategories,
      testKey: 'id',
      testValue: 128,
      updateKey: 'name',
      updateValue: 'Subcategoria atualizada',
    });
    expect(arrayUpdated[1].name).toEqual('Subcategoria atualizada');
  });
});
