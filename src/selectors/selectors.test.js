import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe( 'Author Selectors', () => {

  describe( 'authorsFormattedForDropdown', () => {

    it('should return author data formatted for us in a dropdown', () => {

      const authors = [
        {id:'cory-house', firstName:'Cory', lastName:'Hourse'},
        {id:'scott-allen', firstName:'Scott', lastName:'Allen'}
      ];

      const expected = [
        {value:'cory-house', text: 'Cory Hourse'},
        {value:'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);

    });


  });


});
